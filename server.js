const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const xml2js = require('xml2js');

const app = express();
app.use(express.json());

async function fetchPage(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

function extractLinks(html, baseUrl) {
  const { document } = new JSDOM(html).window;
  const links = Array.from(document.querySelectorAll('a'));
  return links
    .map(link => new URL(link.href, baseUrl).href) // Use URL constructor to resolve relative links
    .filter(href => href.startsWith(baseUrl)); // Filter out external links
}

function generateSitemap(links) {
  if (links.length === 0) {
    console.warn('No internal links found to include in the sitemap.');
  }

  // Remove duplicate links
  const uniqueLinks = [...new Set(links)];

  const urlSet = uniqueLinks.map(link => ({
    loc: link,
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 0.7
  }));

  const builder = new xml2js.Builder({ 
    rootName: 'urlset', 
    xmldec: { version: '1.0', encoding: 'UTF-8' }, 
    renderOpts: { pretty: true } 
  });

  const xml = builder.buildObject({ url: urlSet });

  const comment = '\n<!-- sitemap by JesseJesse.com -->';
  const xmlWithComment = xml + comment;

  return xmlWithComment;
}

app.post('/generate-sitemap', async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send('No URL provided.');
  }

  console.log(`Fetching ${url}...`);
  const html = await fetchPage(url);

  if (html) {
    console.log('Extracting links...');
    const links = extractLinks(html, url);

    if (links.length > 0) {
      const sitemap = generateSitemap(links);
      res.setHeader('Content-Type', 'application/xml');
      res.send(sitemap);
    } else {
      res.status(404).send('No internal links found.');
    }
  } else {
    res.status(500).send('Error fetching the page.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

