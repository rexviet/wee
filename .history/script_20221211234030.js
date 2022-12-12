// import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

$(document).ready(async () => {
    const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://aha-exam-8b280-default-rtdb.asia-southeast1.firebasedatabase.app",
      };
      
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      
      
      // Initialize Realtime Database and get a reference to the service
      const database = firebase.database();

      const number = await writeUserData('rexviet@gmail.com');
});
window.onload = async function(e){ 
    console.log("window.onload", e, Date.now() ,window.tdiff);
    const firebaseConfig = {
        // ...
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://aha-exam-8b280-default-rtdb.asia-southeast1.firebasedatabase.app",
      };
      
      // Initialize Firebase
    //   const app = firebase.initializeApp(firebaseConfig);
      
      
      // Initialize Realtime Database and get a reference to the service
      const database = firebase.database();

    //   const snapshot = await getSubscriberByNumber(45);
    //   console.log('snapshot:', snapshot.val());
      const number = await writeUserData('rexviet@gmail.com');
      console.log('number:', number);

      $( '.modal' ).addClass( 'open' );

    if ( $( '.modal' ).hasClass( 'open' ) ) {
        // $( '.container' ).addClass( 'blur' );
        let backdrop = document.createElement("div");

  backdrop.className = "backdrop";

//   backdrop.addEventListener("click", modalCloseHandler);

  document.body.append(backdrop);
    } 

    $( '.close' ).click(function() {
        $( '.modal' ).removeClass( 'open' );
        $( '.container' ).removeClass( 'blur' );
      });
}

const writeUserData = async (email) => {
    const subscribers = await getSubscriberByEmail(email);
    if (subscribers) {
        console.log('existed: ', subscribers.number);
        return subscribers.number;
    }
    let number;
    do {
        number = randomInRange(50, 100);
    } while (await checkNumberExists(number));
    firebase.database().ref('subscribers/number/' + number).set({ email });
    firebase.database().ref('subscribers/email/' + encodeEmail(email)).set({ number: number });

    return number;
  }

const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSubscriberByNumber = async (number) => {
    return firebase.database().ref('subscribers/number').child(number).get();
}

const getSubscriberByEmail = async (email) => {
    const encodedEmail = encodeEmail(email);
    console.log('encodedEmail:', encodedEmail);
    const snapshot = await firebase.database().ref('subscribers/email').child(encodedEmail).get();
    return snapshot && snapshot.exists() ? snapshot.val() : null;
}

const checkNumberExists = async (number) => {
    const snapshot = await getSubscriberByNumber(number);
    return snapshot && snapshot.exists();
}

const encodeEmail = (email) => {
    return email.replace(/@/g, '-at-').replace(/\./g, '-dot-');
}

const decodeEmail = (encodedEmail) => {
    return encodedEmail.replace(/-at-/g, '@').replace(/-dot-/g, '.');
}