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

    //   const snapshot = await getSubscriberByNumber(45);
    //   console.log('snapshot:', snapshot.val());
      writeUserData('rexviet@gmail.com');
}

const writeUserData = async (email) => {
    let number;
    do {
        number = randomInRange(1, 100);
    } while (await checkNumberExists(number));
    firebase.database().ref('subscribers/' + random).set({
      email: email,
    });
  }

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSubscriberByNumber = async (number) => {
    return firebase.database().ref('subscribers').child(number).get();
}

const checkNumberExists = async (number) => {
    const snapshot = await getSubscriberByNumber(number);
    return snapshot && snapshot.exists();
}