var hq = require("hyperquext");
var cheerio = require("cheerio");

var parseArgs = hq.devcorators.parseArgs,
  consumeForcedOption = hq.devcorators.consumeForcedOption,
  attachBodyToResponse = hq.devcorators.attachBodyToResponse,
  getFinalRequestFromHyperquext = hq.helpers.getFinalRequestFromHyperquext,
  getResponseFromClientRequest = hq.helpers.getResponseFromClientRequest


module.exports = attachCheerioToResponse;

function attachCheerioToResponse(hyperquext) {
  return parseArgs(function (uri, opts, cb) {
    if (!opts.cheerio) return hyperquext(uri, opts, cb);

    var req = consumeForcedOption(attachBodyToResponse(hyperquext), 'body')(uri, opts, cb);
    getFinalRequestFromHyperquext(req, function (err, finalRequest) {
      getResponseFromClientRequest(finalRequest, function (err, res) {
        if (res.cheerio) return;
        finalRequest.res.cheerio = cheerio.load(res.body);
      })
    })
    return req;
  });
}