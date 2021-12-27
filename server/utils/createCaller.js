const fetch = require('node-fetch');
const invariant = require('invariant');
const {tenants} = require('../config');
const URI = 'https://pim.crystallize.com/graphql';

function createApiCaller(tenantId) {
  return async function callApi({ query, variables, operationName }) {
    invariant(
      tenants[tenantId].tokenId,
      "Missing process.env.CRYSTALLIZE_ACCESS_TOKEN_ID"
    );
    invariant(
      tenants[tenantId].token,
      "Missing process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET"
    );

    const response = await fetch(URI, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Crystallize-Access-Token-Id": tenants[tenantId].tokenId,
        "X-Crystallize-Access-Token-Secret": tenants[tenantId].token,
      },
      body: JSON.stringify({ operationName, query, variables }),
    });

    const json = await response.json();

    if (json.errors) {
      console.log(JSON.stringify(json.errors, null, 2));
    }

    return json;
  };
}

module.exports = {
  createApiCaller
}