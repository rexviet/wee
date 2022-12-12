// import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


window.onload = async function(e){ 
    console.log("window.onload", e, Date.now() ,window.tdiff);
    const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://aha-exam-8b280-default-rtdb.asia-southeast1.firebasedatabase.app",
      };
      
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      
      
      // Initialize Realtime Database and get a reference to the service
      const database = firebase.database();

      const snapshot = await getSubscriberByNumber(45);
      console.log('snapshot:', snapshot.val());
    //   writeUserData('rexviet@gmail.com');
}

function writeUserData(email) {
    const random = randomInRange(1, 100);
    firebase.database().ref('subscribers/' + random).set({
      email: email,
    });
  }

const randomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSubscriberByNumber = function(number) {
    return firebase.database().ref('subscribers').child(number).get();
}