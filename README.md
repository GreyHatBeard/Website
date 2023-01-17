# GreyHatBeard Podcast Site
This is the code for generating the static GreyHatBeard site which is then hosted on Azure Storage as a static website and exposed via a CDN.

Check out the show at https://www.greyhatbeard.com.

To get started, clone the repository and run:
```
npm i
```

Install the Gatsby Client
```
npm install -g gatsby-cli
```

To run locally:
```
gatsby develop
```

To build into the public folder which can be copied to Azure Storage in the $web container:
```
gatsby build
```

To try the build version:
```
gatsby build & gatsby serve
```

# Code overview

The site is written using [Gatsby JS](https://www.gatsbyjs.org/) and using the [Gatsby Casper theme](https://github.com/scttcper/gatsby-casper.git).

Edit website-config.ts with your website settings.

Shows are added as markdown files (.md) in the content folder with any required images in img. They should have the following metadata at the start:

```
---
title: "Show 1: Our first show"
author: Another Author
image: img/NewsIcon.png
date: "2020-01-10T10:00:00.000Z"
draft: false
tags: 
  - shows
categories:
  - 2020
url: "https://www.greyhatbeard.com/podcasts/2020-01-10-show1.mp3"
number: 1
size: "53 min"
---
```

## How to edit your site title and description
Edit `gatsby-config.js` section `siteMetadata`

```javascript
 siteMetadata: {
    title: 'My awesome site name',
    description: 'This is a description for my site',
    siteUrl: 'https://mysite.com', // full path to blog - no ending slash
  },
```

## How to adjust pagination
In `gatsby-node.js`, edit the `postsPerPage` constant. The default value is
six posts per page.

## Podcast feed
The podcast feed is supplied by:
https://github.com/miller-productions/gatsby-plugin-podcast-feed

## Audio Player
The audio player is supplied by:
https://github.com/lhz516/react-h5-audio-player
