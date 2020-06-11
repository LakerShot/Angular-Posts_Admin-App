# Posts Angular App

It's a simple angular app  where you gonna be an Admin. This app allows you to send request to firebase fetch some data make a pull request et cetera (full REST requests)

## Before you get started

+ Install node.js
+ Install Angular CLA 
+ Download this app and open terminal
+ Use the package manager [npm](https://www.npmjs.com/) and write command down below and wait some time.

```bash
npm install
```

## How to run this app
#### if you wanna init this app you have to do 4 things
- first - create firebase database -> copy database url -> past this url to fbDbUrl variable 
- second - go to firebase -> authentication and add user(admin)
- third - add firebase app to your project -> copy apiKey -> past this apikey to fbDbUrl variable  
- forth - go to firebase authentication -> rules -> and past code down below
```{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```
#### Open app and change some field down below
##### enviroments/enviroment.ts 

```python
export const environment: Environment = {
  production: false,
  apiKey: 'PAST YOUR APIKEY_URL HERE',
  fbDbUrl: 'PAST YOUR FIREBASE_DATABESE_URL HERE'
}

# go to enviroments/enviroment.prod.ts and make the same
```
#### Good job now you're Admin. You can add/remove/finde/edit posts and also read them 
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)