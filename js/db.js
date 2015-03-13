var myFirebaseRef = new Firebase("https://tuunefolio.firebaseio.com/");

myFirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});