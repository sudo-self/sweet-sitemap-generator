## Sweet-Sitemap-Generator

sitemap-generator CLI tool.

Quick Local Server

```
git clone https://github.com/sudo-self/sweet-sitemap-generator.git
cd sweet-sitemap-generator
node server.js
``` 
 
Then create sitemaps with curl

```
curl -X POST http://localhost:3000/generate-sitemap \
-H "Content-Type: application/json" \
-d '{"url": "https://sudo-self.com"}'
```

or with NPM

```
npm install -g sweet-sitemap-generator

npx sweet-sitemap-generator [URL]
```

Example Output

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url>
    <loc>https://github.com/sudo-self</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=repositories</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=projects</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=packages</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=stars</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=followers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=following</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?tab=achievements</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?achievement=pull-shark&amp;tab=achievements</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?achievement=starstruck&amp;tab=achievements</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?achievement=yolo&amp;tab=achievements</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self?achievement=quickdraw&amp;tab=achievements</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/sudo-self</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/psx.deno/actions/workflows/deno.yml</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/sudo-self/actions/workflows/blogpost.yml</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/iOS-Cracked-Apps</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/iOS-Cracked-Apps/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/iOS-Cracked-Apps/forks</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/playstation-stackblitz</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/playstation-stackblitz/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/AORAH-12.3-13.2</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/AORAH-12.3-13.2/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/AORAH-12.3-13.2/forks</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/Palera1n-C</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/Palera1n-C/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/samsung-frp</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/samsung-frp/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/samsung-frp/forks</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/doodle</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://github.com/sudo-self/doodle/stargazers</loc>
    <lastmod>2024-08-31T20:12:47.537Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
<!-- sitemap by JesseJesse.com -->%                 
```
