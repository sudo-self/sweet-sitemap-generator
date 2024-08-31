
# Sweet Sitemap Generator

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
npm i sweet-sitemap-generator

npx sweet-sitemap-generator <url of the sitemap to create>
```

