// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: "AIzaSyDWZLoW0gIKxmL5VWfR-XCeBI5FB0OsBRM",
    authDomain: "test-e41c2.firebaseapp.com",
    databaseURL: "https://test-e41c2-default-rtdb.firebaseio.com",
    projectId: "test-e41c2",
    storageBucket: "test-e41c2.appspot.com",
    messagingSenderId: "1059711446709",
    appId: "1:1059711446709:web:80fc3a28bdb1b3def618fc"
});


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);

    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };

    return self.registration.showNotification(
        title,
        options,
    );
});
