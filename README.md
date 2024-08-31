## Sweet-Sitemap-Generator

sitemap-generator CLI tool.

Quick Local Server

```
git clone https://github.com/sudo-self/sweet-sitemap-generator.git
cd sweet-sitemap-generator
```

create sitemaps node
```
node generateSitemap.js [URL]
```

create sitemaps curl

```
curl -X POST http://localhost:3000/generate-sitemap \
-H "Content-Type: application/json" \
-d '{"url": "https://github.com/sudo-self/sweet-sitemap-generator"}'
```
create sitemaps npm

```
npm install -g sweet-sitemap-generator
npx sweet-sitemap-generator [URL]
```


