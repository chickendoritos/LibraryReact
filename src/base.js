import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCnt1qIz8S5TwW8ysb97dbYGeZ9QqX65u4",
    authDomain: "warehousereact2.firebaseapp.com",
    databaseURL: "https://warehousereact2.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;