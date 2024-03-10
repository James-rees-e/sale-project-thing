var option = {
    animation: true,
    delay: 1000,
  };

  class Toasty {
    $toastHTMLElement
    $toastContent
    $toastElement
    constructor(toastHTMLElement, toastContent) {
      this.toastHTMLElement = toastHTMLElement
      this.toastContent = toastContent
      this.toastElement = new bootstrap.Toast(this.toastHTMLElement, option)
  
    }
    showAlert(text, color) {
      this.toastHTMLElement.style.backgroundColor = color;
      this.toastContent.innerHTML = text;
      this.toastElement.show();
    }
  }
  export default Toasty
  