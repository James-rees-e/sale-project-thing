import {
  collection,
  onSnapshot
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
      <div class="col-lg-3 col-md-4 col-sm-12 px-1">

        <div class="holder pb-3">
          <div class="product-img">
              <img src="${prod.img}"
                  alt="">
              <div class="bg-overlay">
                <img src="https://shopgamevalorant.com/assets/images/vienPr.png">
              </div>
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

  const detailBtns = document.querySelectorAll(".detail-btn");

  // Thêm sự kiện click vào nút detail
  detailBtns.forEach((btn, index) => {
    btn.onclick = () => {
      const product = productList[index];
      localStorage.setItem("productDetail", product.id);
      window.location.href = "./detail.html";
    };
  });
});
