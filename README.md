# proj
Requirements
- Expo Go (App)
- Node.js (To run the server.js which starts up the server)
- Phone and computer used to run the server needs to be connected to the same network


Install the app "Expo Go" to run the app later on.

Edit the .env file in the spiel folder.
```
IP_ADDRESS='Your IPV4 Address here'
```
The IPV4 address is needed since the server runs remotely (on the computer) so the IPV4 address allows the phone to connect to the server.

Change the directory to the backend directory and run
```
node server.js
```
This runs the server on port 5000.

Change the directory to the spiel directory and run
```
npm start
```
Scan the QR code using your phone. This should bring up the Expo Go app and the app should be visible.
