## Crystallize visualisation service

### Motivation

Crystallize uses Figma for content modeling but there is no way to visualise existing shapes. This service allows to solve this problem.
The main idea is being able to gather information about all existing shapes for the given crystallize tenant and show it in some easy to read way.

### How to start
To start service locally:
1. Clone the repo.
2. Install all dependencies with `npm run install`.
3. Configure tenant(s): 
  - Rename `./server/config_examle.js` to `./server/config.js`
  - Use tenant id instead of `tenant_id_here`
  - Set names for every tenant. Name could be custom and not affects any functionality.
  - Set token id for service to have access to crystallize.
  - Set token itself.
4. Rename `./client/.env.local.example` to `./client/.env.local`
5. Run service with `npm start`;
6. Open `http://localhost:3000` to get access to visualisation.

### Where I can find tenant id
Tenant id could be taken from Crystallize:
- Open Crystallize PIM;
- Open Settings -> Usage;
- Copy tenant ID from top right corner of the page.

### Where I can find (generate) token
Crystallize shows token on generation only. If you don't know the actual token then you need to generate a new one. To do that:
- Open Crystallize PIM;
- Open Settings -> Access Tokens -> Generate a new token;
- Set token name and click generate token;
- Copy 'Access token id' to 'tokenId' in config file;
- Copy 'Access token secret' to 'token' in config file;
- **Once you close token generation page you have no way to get secret again!**

### How service is built

Client is built with NextJS and uses [MUI](https://mui.com/) as components library.

Server is built with NodeJS. It gives simple REST API endpoints to get information from Crystallize:
- `/tenants` - to get a list of all tenants configured in `config.js`;
- `/shapeNames/{tenantId}` - to get list of all shapes created for the tenant;
- `/shapeDefinition?tenant={tenant}&shape={shapeID}` - to get shape definition.

Server is using [node-fetch](https://github.com/node-fetch/node-fetch) to send POST requests to Crystallize that contain token information. 
In POST requests server sends GraphQL requests to extract information.