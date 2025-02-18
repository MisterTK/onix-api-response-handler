/**
 * Example usage of the Onix API response handler
 */

const { processOnixResponse } = require('../src/index');

// Sample API response based on the provided paste.txt file
const sampleResponse = {
  "answer": {
    "answerText": "Jessica Wesley is Onix's Chief Marketing Officer (CMO). She joined Onix in January 2023 as Onix's first CMO. Jessica has a track record of leading global marketing teams, creative co-marketing with hyperscaler partners, building a leading brand within the Google Cloud ecosystem, and driving demand generation and pipeline for services organizations. She previously spent a decade at regional and global systems integrators and Google Cloud partners. Jessica believes that Onix and its cloud partners are coming together to better serve customers, offering them complete cloud solutions.",
    "steps": [
      {
        "description": "Rephrase the query and search.",
        "actions": [
          {
            "searchAction": {
              "query": "Who is Onix's CMO?"
            },
            "observation": {
              "searchResults": [
                {
                  "snippetInfo": [
                    {
                      "snippet": "In this installment of &#39;Personas behind the brand&#39;, we chat with Jessica Wesley, <b>Chief Marketing Officer</b> at <b>Onix</b>, and gain insights into her leadership&nbsp;...",
                      "snippetStatus": "SUCCESS"
                    }
                  ],
                  "document": "projects/36231825761/locations/global/collections/default_collection/dataStores/onixnet-com_1739299528054/branches/0/documents/83310f7c355be804039357237b1306ec",
                  "title": "Onix Leadership Spotlights: Jessica Wesley",
                  "uri": "https://www.onixnet.com/blog/onix-leadership-spotlights-jessica-wesley/"
                },
                {
                  "title": "Onix Networking Corporation Appoints Patrick Schablitzki as Chief Operating Officer (COO)",
                  "uri": "https://www.onixnet.com/news/onix-networking-corporation-appoints-patrick-schablitzki-as-chief-operating-officer-coo/",
                  "snippetInfo": [
                    {
                      "snippet": ""Patrick brings significant experience and expertise on helping customers innovate and accelerate their transformation journey leveraging Google Cloud," said&nbsp;...",
                      "snippetStatus": "SUCCESS"
                    }
                  ],
                  "document": "projects/36231825761/locations/global/collections/default_collection/dataStores/onixnet-com_1739299528054/branches/0/documents/27c96166716a4f22abf5da74a0adb456"
                }
                // Additional results omitted for brevity
              ]
            }
          }
        ],
        "state": "SUCCEEDED"
      }
    ],
    "state": "SUCCEEDED"
  },
  "answerQueryToken": "NMwKDAiThtS9BhDIvZyXARIkNjdiNGNlMWUtMDAwMC0yZDNjLWJmY2YtMDg5ZTA4MmRlNWZj"
};

// Process the sample response
const result = processOnixResponse(sampleResponse);

// Display the structured result
console.log('Structured API Response:');
console.log(JSON.stringify(result, null, 2));

// Output summary
console.log('\nSummary:');
console.log(`- Answer text: ${result.answerText ? 'Present' : 'Missing'}`);
console.log(`- Number of sources: ${result.sources.length}`);
