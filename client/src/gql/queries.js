import {gql} from "apollo-boost";

const GET_SHAPES_DATA = (path) => gql`
    query {
      catalogue(path: "${path}", language: "en") {
        components {
          name
          id
          type
          content {
            ... on SingleLineContent {
              text
            }
            ... on ContentChunkContent {
              chunks {
                name
                id
                type
                content{
                    ... on NumericContent {
                        number
                        unit
                    }
                    ... on SingleLineContent {
                        text
                    }
                }
              }
            }
            ... on NumericContent {
              number
              unit
            }
            ... on PropertiesTableContent {
                sections {
                    ... on PropertiesTableSection {
                      title
                      properties {
                        key
                        value
                        }
                    }
                }
            }
          }
        }
      }
    }
`

// const GET_ALL_SHAPES = gql`
// query GetRootPaths {
//   catalogue(language: "en", path: "/") {
//     children {
//       path
//       shape {
//         name
//         identifier
//       }
//     }
//   }
// }
// `
const GET_ALL_SHAPES = gql`
    query getShapes {
      shape {
        getMany(tenantId: "619d5a05280ff61547cf985d") {
          name,
          identifier
        }
      }
    }
`

export { GET_SHAPES_DATA, GET_ALL_SHAPES }