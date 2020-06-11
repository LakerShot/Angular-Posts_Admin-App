// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from './interface';

// INIT APP Like an admin
// if you wanna init this app you have to do 4 things
// first - create firebase database -> copy database url -> past this url to fbDbUrl variable 
// second - go to firebase -> authentication and add user(admin)
// third - add firebase app to your project -> copy apiKey -> past this apikey to fbDbUrl variable  
// forth - go to firebase authentication -> rules -> and past code down below
// {
//   "rules": {
//     ".read": true,
//     ".write": "auth != null"
//   }
// }
// Good job now you're Admin. You can add/remove/finde/edit pages and read posts! 

export const environment: Environment = {
  production: false,
  apiKey: 'PAST YOUR APIKEY_URL HERE',
  fbDbUrl: 'PAST YOUR FIREBASE_DATABESE_URL HERE'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
