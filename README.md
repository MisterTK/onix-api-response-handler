# Onix API Response Handler

A utility for processing Onix API responses and extracting structured data including title/uri pairs and answer text.

## Installation

```bash
npm install onix-api-response-handler
```

## Usage

```javascript
const { processOnixResponse } = require('onix-api-response-handler');

// Example API response from Onix
const apiResponse = {
  // Your API response here
};

// Process the response
const structuredData = processOnixResponse(apiResponse);

console.log(structuredData);
// Output will contain:
// - answerText: The generated answer from the API
// - sources: Array of title/uri pairs from search results
// - rawSourceCount: Number of sources found
```

## Response Structure

The handler returns an object with the following structure:

```javascript
{
  answerText: "Jessica Wesley is Onix's Chief Marketing Officer (CMO)...",
  sources: [
    { title: "Onix Leadership Spotlights: Jessica Wesley", uri: "https://www.onixnet.com/blog/onix-leadership-spotlights-jessica-wesley/" },
    // Additional sources...
  ],
  rawSourceCount: 10
}
```

## Error Handling

If there's an error processing the response, the handler will return:

```javascript
{
  error: "Error message",
  answerText: null,
  sources: []
}
```

## Example with your OpenAPI spec

When using with your Onix OpenAPI spec, you would call it like this:

```javascript
const { processOnixResponse } = require('onix-api-response-handler');

// After making your API call to the Onix endpoint:
// POST /v1alpha/projects/36231825761/locations/global/collections/default_collection/engines/onixnet-com_1739299487816/servingConfigs/default_search:answer

// Process the API response
const result = processOnixResponse(apiResponse);

// Now you have structured access to:
// 1. The answer text - result.answerText
// 2. All title/URI pairs - result.sources
```
