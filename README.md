# AmtPoc

# Running mobile code
npm run mobile

# Running dev web code
npm run dev

## Development server

## build production
    ng build --prod
    ng build -c=mobile
    
## Features added 
    bootstrap : npm install bootstrap --save
    
# add these to 
  Add bootstrap to the angular.json in build tag as below
  "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
   
# Adding cordova to create apk
step 1 : Setup Android Studio SDK
step 2 : Install Cordova globally ------- npm install -g cordova
step 3 : Create a new Cordova project ------- cordova create amt-poc-cordova com.amtpoc AmtPocApp
step 4 : To develop Cordova applications, you must install SDKs for each mobile platform you are targeting. Navigate into the newly created Cordova project and add Android as platform
         cordova platform add android
         
    
## create apk file
    1. Go to mobile folder
    2. change <base href="/"> to <base href="./"> by adding .(dot)
    3. if first time then
        a. cordova platform add android (for android device)
        b. cordova platform add ios (for IOS)
        c. cordova platform browser (to run on browser)
    4. cordova run android (for building app -- cordova build android)
    5. go to the below folder location, there you will find .apk
        \Workspace\AbdulMazidTailor\mobile\platforms\android\app\build\outputs\apk\debug\app-debug.apk
