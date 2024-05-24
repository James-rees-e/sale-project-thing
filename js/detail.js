import { db } from './firebase.js'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const detailId = localStorage.getItem('productDetail');
console.log(detailId);

const docRef = doc(db, 'products', detailId)

const snapData = await getDoc(docRef);
const detailData = snapData.data();
console.log(detailData);

document.querySelector('#accName').innerHTML = 'Acccoutn Name: ' + detailData.name;

document.querySelector('#accPrice').innerHTML = 'Price: ' + detailData.price;

document.querySelector("#accImg").src = detailData.img;


