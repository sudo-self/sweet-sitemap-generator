const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML form)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to generate and download the sitemap
app.post('/generate-sitemap', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send('No URL provided.');
  }

  // Run the CLI tool and capture the output
  exec(`npx sweet-sitemap-generator ${url}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing command: ${stderr}`);
      return res.status(500).send('Error generating sitemap.');
    }

    // Define the path for the generated file
    const filePath = path.join(__dirname, 'sitemap.xml');

    // Save the output to the file
    fs.writeFile(filePath, stdout, (err) => {
      if (err) {
        console.error(`Error writing file: ${err.message}`);
        return res.status(500).send('Error saving sitemap.');
      }

      // Send the file for download
      res.download(filePath, 'sitemap.xml', (err) => {
        if (err) {
          console.error(`Error sending file: ${err.message}`);
          return res.status(500).send('Error sending file.');
        }

        // Clean up the file after download
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error deleting file: ${err.message}`);
          }
        });
      });
    });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

