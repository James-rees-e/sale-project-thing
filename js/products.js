import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  import { db } from "./firebase.js";
  
  const collectionRef = collection(db, "products");
  
  // Lấy dữ liệu từ Database Firestore theo thời gian thực
  onSnapshot(collectionRef, (data) => {
    const productList = [];
  
    data.docs.forEach((doc) => {
      productList.push({ ...doc.data(), id: doc.id });
    });
  
    document.querySelector("#product").innerHTML = "";
  
    productList.forEach((prod) => {
        console.log(prod);
      document.querySelector("#product").innerHTML += `
      <div class="col-3  px-3">

        <div class="holder pb-3">
          <div class="product-img">
              <img src="${prod.img}"
                  alt="">
          </div>
          <div class="product-info justify-content-between px-3 pt-2 d-flex">
              <div class="">
                  <a href="index.html">${prod.name}</a>
                  <p class="status">stocking</p>
              </div>

              <p class="price">${prod.price} VND</p>
          </div>

          <div class="product-btns d-flex justify-content-between px-4 ">
              <button class="buy-btn py-1 px-4">buy now</button>
              <button class="detail-btn py-1 px-4">detail</button>
          </div>
      </div>
    </div>
      `;
    });
  
    //   Xóa dữ liệu database
    document.querySelectorAll(".delete").forEach((btn, index) => {
      btn.onclick = () => {
        const documentRef = doc(db, "ToDo", productList[index].id);
  
        deleteDoc(documentRef).then(() => alert("Xóa thành công !"));
      };
    });
  });
  
  // Thêm dữ liệu vào Database
  document.querySelector("#addButton").onclick = () => {
    const name = document.querySelector("#addTask input").value.trim();
    if (name.length === 0) {
      alert("Mời nhập tên task");
    } else {
      addDoc(collectionRef, {
        name: name,
        isComplete: false,
      });
    }
  };