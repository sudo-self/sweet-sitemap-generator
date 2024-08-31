#!/usr/bin/env node

const axios = require('axios');
const { JSDOM } = require('jsdom');
const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');

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
    .map(link => new URL(link.href, baseUrl).href)
    .filter(href => href.startsWith(baseUrl)); 
}

function generateSitemap(links) {
  if (links.length === 0) {
    console.warn('No internal links found to include in the sitemap.');
  }

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

async function main() {
  const url = process.argv[2];
  const outputFile = process.argv[3] || 'sitemap.xml';

  if (!url) {
    console.error('No URL provided.');
    process.exit(1);
  }

  console.log(`Fetching ${url}...`);
  const html = await fetchPage(url);

  if (html) {
    console.log('Extracting links...');
    const links = extractLinks(html, url);

    if (links.length > 0) {
      const sitemap = generateSitemap(links);
      fs.writeFileSync(path.resolve(outputFile), sitemap);
      console.log(`Sitemap saved to ${outputFile}`);
    } else {
      console.error('No internal links found.');
      process.exit(1);
    }
  } else {
    console.error('Error fetching the page.');
    process.exit(1);
  }
}

main();

