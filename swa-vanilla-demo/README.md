1. add staticwebapp.config.json configuration file
2. Install Azure SWA cli 
npm install -D @azure/static-web-apps-cli
3. Create file swa-cli.config.json
and generate contents using: npx swa init
Note: Double check this config file, if you want to deploy to existing app, you need to update appName and resourceGroup
4. Build the project: npx swa build
5. Use swa cli to login to azure
npx swa login --resource-group TestFrontDoo_group --app-name TestAppStatic
We must see below result:
============================================
Welcome to Azure Static Web Apps CLI (2.0.6)

Using configuration "swa-vanilla-demo" from file:
  D:\Project\Azure_handon\swa-vanilla-demo\swa-cli.config.json

Checking Azure session...
✔ Successfully logged into Azure!
✔ Saved project credentials in .env file.
✔ Successfully setup project!
============================================
6. Deploy the site to Azure
npm swa deploy --env production
7. Clean up resource