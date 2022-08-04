/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'charlescoffee.us.auth0.com', // the auth0 domain prefix
    audience: 'new', // the audience set for the auth0 app
    clientId: 'ufwllgkA2k8yNjapp6UqJjvC0SdN5Ir6', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:5000', // the base url of the running ionic application. 
  }
};
