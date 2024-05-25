import {
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebase.js";

const collectionRef = collection(db, "products");

let cartList = JSON.parse(localStorage.getItem("cart"));

if (!cartList || cartList.length === 0) {
  localStorage.setItem("cart", JSON.stringify([]));
  cartList = [];
}

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
              <button class="cart-btn py-1 px-4">add to cart</button>
              <button class="detail-btn py-1 px-4">detail</button>
          </div>
      </div>
    </div>
      `;
  });

  const cartElements = document.querySelectorAll(".cart-btn");
  const detailBtns = document.querySelectorAll(".detail-btn");

  // Thêm sự kiện click vào nút detail
  detailBtns.forEach((btn, index) => {
    btn.onclick = () => {
      const product = productList[index];
      localStorage.setItem("productDetail", product.id);
      window.location.href = "./detail.html";
    };
  });

  // sự kiện thêm vào giỏ hàng
  cartElements.forEach((item, idx) => {
    item.onclick = () => {
      const findExistInCart = cartList.some(
        (item) => item.id === productList[idx].id
      );

      if (findExistInCart) {
        alert("Sản phẩm này đã được thêm từ trước!");
      } else {
        cartList.push(productList[idx]);
        localStorage.setItem("cart", JSON.stringify(cartList));
        alert("Thêm vào giỏ hàng thành công");
      }
    };
  });
});
