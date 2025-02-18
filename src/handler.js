/**
 * Handler for Onix API responses
 * Extracts and structures title/uri pairs along with answerText
 */

function parseOnixApiResponse(apiResponse) {
  try {
    // Validate input
    if (!apiResponse || typeof apiResponse !== 'object') {
      throw new Error('Invalid API response format');
    }
    
    // Extract answerText
    const answerText = apiResponse.answer?.answerText || null;
    
    // Extract search results if available
    const searchSteps = apiResponse.answer?.steps || [];
    let searchResults = [];
    
    // Look through steps to find search results
    for (const step of searchSteps) {
      if (step.actions) {
        for (const action of step.actions) {
          if (action.observation?.searchResults) {
            searchResults = action.observation.searchResults;
            break;
          }
        }
      }
      if (searchResults.length > 0) break;
    }
    
    // Extract title/uri pairs
    const titleUriPairs = searchResults.map(result => ({
      title: result.title || '',
      uri: result.uri || ''
    }));
    
    // Build structured response
    return {
      answerText,
      sources: titleUriPairs,
      rawSourceCount: titleUriPairs.length
    };
    
  } catch (error) {
    console.error('Error parsing Onix API response:', error);
    return {
      error: error.message,
      answerText: null,
      sources: []
    };
  }
}

module.exports = { parseOnixApiResponse };
