const { parseOnixApiResponse } = require('./handler');

/**
 * Main entry point for Onix API response handler
 * @param {Object} apiResponse - The raw API response
 * @returns {Object} Structured response with answerText and title/uri pairs
 */
function processOnixResponse(apiResponse) {
  return parseOnixApiResponse(apiResponse);
}

module.exports = { processOnixResponse };
