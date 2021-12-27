const getShapeNames = (tenant) => `
    {
      shape {
        getMany(tenantId: "${tenant}") {
          name,
          identifier,
          itemCount
        }
      }
    }
`

const getShapeDefinition = (tenant, shape) => `
  {
  shape {
    get(
      tenantId: "${tenant}",
      identifier: "${shape}"
    ) {
      name,
      identifier,
      components {
        name,
        type,
        id,
        description
        config {
          ... on ContentChunkComponentConfig {
            components{
              name
              id
              type
              description
              config {
                ... on NumericComponentConfig {
                  units
                }
              }
            }
          }
          ... on PropertiesTableComponentConfig {
            sections {
              title
              keys 
            }
          }
          ... on ItemRelationsComponentConfig {
            min
            max
            acceptedShapeIdentifiers
          }
          ... on SelectionComponentConfig {
            options {
              isPreselected
              key
              value
            }
          }
        }
      }
    }
  }
}
`

module.exports = {
  getShapeNames,
  getShapeDefinition
}