# hyperquext-cheerio

Attach `cheerio` to the response object.

Note: This extension will have to parse the response. Which may make your app less efficient.

## Usage:

Decorating Hyperquext:

```
var request = attachCheerioToResponse(hyperquext)
```

From now on you can specify in options `{cheerio: true}` and you're set.

## install

With [npm](https://npmjs.org) do:

```
npm install hyperquext-cheerio
```

## license

MIT