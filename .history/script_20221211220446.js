// import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


window.onload = function(e){ 
    console.log("window.onload", e, Date.now() ,window.tdiff, 
    const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://aha-exam-8b280-default-rtdb.asia-southeast1.firebasedatabase.app",
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      
      // Initialize Realtime Database and get a reference to the service
      const database = getDatabase(app);
}