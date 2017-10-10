import React, {Component} from 'react'
var firebase = require('firebase');
var uuid = require('uuid');

  var config = {
    apiKey: "AIzaSyCNTAd9-AZyn3Aq-0EJfmMrRy8zeX9IH4M",
    authDomain: "u-servay-bedae.firebaseapp.com",
    databaseURL: "https://u-servay-bedae.firebaseio.com",
    projectId: "u-servay-bedae",
    storageBucket: "u-servay-bedae.appspot.com",
    messagingSenderId: "793472191628"
  };
  firebase.initializeApp(config);

class Usurvay extends Component {
  constructor(props){
    super(props);

    this.state = {
      uid:uuid.v1(),
      studentName: '',
      answers: {
        answer1:'',
        answer2:'',
        answer3:''
      },
      isSubmited: false
    };
  }
  render(){
    var studentName;
    var questions;

if(this.state.studentName === '' && this.state.isSubmited === false) {
  studentName= <div>
<h1>hey student plz tell me your name</h1>
  <form>
    <input type="text" placeholder="enter your name" ref="name" />
  </form>

  </div>
}

    return(
      <div>
        {studentName}
        ---------------
        {questions}

      </div>
    );
  }
}
export default Usurvay;
