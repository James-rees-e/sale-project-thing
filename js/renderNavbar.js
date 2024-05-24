const navbarElement = document.getElementById("myNavbar");

// Hiển thị thông tin navbar tránh lặp lại code
const renderNavbar = () => {
  const currentUser =
    localStorage.getItem("currentUser") === "null"
      ? null
      : localStorage.getItem("currentUser");

  navbarElement.innerHTML = ` 
    <div class="bar">
        <div class="logo">
            <a href="./index.html">
                <img src="./image/logo.png">
            </a>
        </div>

        <div class=" gx-5 nav-links">
            <a href="index.html">Home</a>
            <a href="">random account</a>
            <a href="">Services</a>
        </div>

        ${
          currentUser
            ? `
            <div class="hello-user">
                <p>
                    Xin chào <strong>${currentUser}</strong>
                    <i id="logout-btn" class="fa-solid fa-right-from-bracket"></i>
                </p>
            </div>
        `
            : `
            <div class="nav-btn">
                <a href="./signup.html" class="b1">
                    <button>REGISTER</button>
                </a>
                <a href="./signin.html" class="b2 ">
                    <button>LOG IN</button>
                </a>
            </div> 
            `
        } 
    </div>
`;
};

renderNavbar();

const logoutBtn = document.querySelector("#logout-btn");
// const createBtn = document.querySelector("#create-btn");

// createBtn.onclick = () => {
//   const currentUser =
//     localStorage.getItem("currentUser") === "null"
//       ? null
//       : localStorage.getItem("currentUser");

//   if (currentUser) {
//     window.location.href = "/CreateGUI/create.html";
//   } else {
//     showErrorToast("Login permission!");
//   }
// };

logoutBtn.onclick = async () => {
  localStorage.setItem("currentUser", null);

  alert("Logout successfully!");

  //   Render lại navbar sau khi đã đăng xuất
  renderNavbar();
};
