// import {
//     InMemoryCache,
//     ApolloClient,
//     createHttpLink
// } from "@apollo/client";
//
// const link = createHttpLink({
//     uri: 'https://pim.crystallize.com/graphql',
//     fetchOptions: {
//         mode: 'no-cors',
//     },
//     // headers: {
//     //     accept: '*/*',
//     //     "content-type": "application/json",
//     //     "Access-Control-Allow-Credentials" : true,
//     // }
// })
//
// const client = new ApolloClient({
//     // uri: 'https://api.crystallize.com/sandbox/catalogue',
//     cache: new InMemoryCache({}),
//     link,
//
// });
//
// export default client;

import {
    ApolloClient,
    InMemoryCache,
    gql,
    createHttpLink,
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'X-Crystallize-Access-Token-Id': '1e0f4fc0861da39a664b',
            'X-Crystallize-Access-Token-Secret': '3dedc5484a8c9f53152e64bec2efaebdc3f3c406'
        }
    }
});

const link = createHttpLink({
    // uri: 'https://pim.crystallize.com/graphql',
    uri: 'https://pim.crystallize.com/graphql',
    fetchOptions: {
        mode: 'cors',
    },
    // credentials: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Crystallize-Access-Token-Id': '1e0f4fc0861da39a664b',
        'X-Crystallize-Access-Token-Secret': '3dedc5484a8c9f53152e64bec2efaebdc3f3c406'
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true,
    },

})



// Access token id
// 1e0f4fc0861da39a664b
// Access token secret
// 3dedc5484a8c9f53152e64bec2efaebdc3f3c406

const client = new ApolloClient({
    // uri: 'https://pim.crystallize.com/graphql',
    link: authLink.concat(link),
    cache: new InMemoryCache()
});

client
    .query({
        query: gql`
    {
      shape {
        getMany(tenantId: "619d5a05280ff61547cf985d") {
          name,
          identifier
        }
      }
    }
    `
    })
    .then(result => console.log(result));

export default client;