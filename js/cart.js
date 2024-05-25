let cartList = JSON.parse(localStorage.getItem("cart"));

const renderCart = () => {
  let cartItemHTML = "";

  if (cartList.length > 0) {
    cartList?.forEach((item, index) => {
      cartItemHTML += `
        <div class="col-lg-3 col-md-4 col-sm-12 px-1">
    
            <div class="holder pb-3">
              <div class="product-img">
                  <img src="${item.img}"
                      alt="">
                  <div class="bg-overlay">
                    <img src="https://shopgamevalorant.com/assets/images/vienPr.png">
                  </div>
              </div>
              <div class="product-info justify-content-between px-3 pt-2 d-flex">
                  <div class="">
                      <a href="index.html">${item.name}</a>
                      <p class="status">stocking</p>
                  </div>
    
                  <p class="price">${item.price} VND</p>
              </div>
    
              <div class="product-btns d-flex justify-content-between px-4 ">
                  <button class="remove-btn py-1 px-4">remove from cart</button>
                  <button class="detail-btn py-1 px-4">detail</button>
              </div>
          </div>
        </div>
        `;
    });

    document.getElementById("cart-list").innerHTML = cartItemHTML;

    const detailBtns = document.querySelectorAll(".detail-btn");

    // Thêm sự kiện click vào nút detail
    detailBtns.forEach((btn, index) => {
      btn.onclick = () => {
        const product = productList[index];
        localStorage.setItem("productDetail", product.id);
        window.location.href = "./detail.html";
      };
    });

    const removeBtns = document.querySelectorAll(".remove-btn");

    removeBtns.forEach((item, idx) => {
      item.onclick = () => {
        cartList.splice(idx, 1);
        localStorage.setItem("cart", JSON.stringify(cartList));
        renderCart();
      };
    });

    document.getElementById("buy-btn").innerHTML = `
        <button>Buy now</button>
    `;

    // Thêm sự kiện click nút Buy now
    document.getElementById("buy-btn").onclick = () => {
      const currentUser =
        localStorage.getItem("currentUser") === "null"
          ? null
          : localStorage.getItem("currentUser");

      if (currentUser) {
        cartList = [];
        localStorage.setItem("cart", JSON.stringify([]));

        alert("Mua hàng thành công !");

        renderCart();
      } else {
        alert("Cần đăng nhập để thực hiện hành động này")
      }
    };
  } else {
    document.getElementById("cart-list").innerHTML = `
        <p class="text-center fw-bold" style="font-style: italic; font-size: 18px">
            Chưa có sản phẩm trong giỏ hàng!
        </p>
    `;

    document.getElementById("buy-btn").innerHTML = ``;
  }
};

renderCart();
