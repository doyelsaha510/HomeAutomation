<!-- The core Firebase JS SDK is always required and must be listed first -->




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "yourApi_key",
    authDomain: "yourDatabase.firebaseapp.com",
    databaseURL: "https://yourdatabaseUrl.firebaseio.com",
    projectId: "projectId",
    storageBucket: "parkingsystem-abf19.appspot.com",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function lighton()
{
	let p=1;
	dbRef=firebase.database().ref("light");
	dbRef.set(p);
}
function lightoff()
{
	let p=0;
	dbRef=firebase.database().ref("light");
	dbRef.set(p);
}

function fanon()
{
	let p=1;
	dbRef=firebase.database().ref("fan");
	dbRef.set(p);
}

function fanoff()
{
	let p=0;
	dbRef=firebase.database().ref("fan");
	dbRef.set(p);
}

