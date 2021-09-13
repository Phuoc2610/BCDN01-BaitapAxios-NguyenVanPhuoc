function Validation() {
    // kiểm tra để trống
    this.checkEmpty = function (inputValue, spanID, message) {
      if (inputValue.trim() == "") {
        document.getElementById(spanID).innerHTML = message;
        return false;
      } else {
        document.getElementById(spanID).innerHTML = "";
        return true;
      }
    };
  
    // // Kiểm tra trùng tài khoản
    // this.checkTK = function (inputValue, spanID, message, mang) {
    //   var isExist = false;
    //   isExist = mang.some(function (item) {
    //     return item.taiKhoan === inputValue.trim();
    //   });
    //   if (isExist) {
    //     document.getElementById(spanID).innerHTML = message;
    //     return false;
    //   } else {
    //     document.getElementById(spanID).innerHTML = "";
    //     return true;
    //   }
    // };
  
    // Kiểm tra tên
    this.checkName = function (inputValue, spanID, message) {
      var pattern = new RegExp(
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$"
      );
      if (pattern.test(inputValue)) {
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
  
    // Kiểm tra email
    this.checkEmail = function (inputValue, spanID, message) {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputValue.match(pattern)) {
        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
  
    // Kiểm tra password
    this.checkPass = function (inputValue, spanID, message) {
      var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
      if (inputValue.match(pattern)) {
        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
  

    //  Kiểm tra dropdown
    this.checkDropdown = function (selID, spanID, message) {
      var optionIndex = document.getElementById(selID).selectedIndex;
      console.log(optionIndex);
      if (optionIndex != 0) {
        // hợp lệ
        document.getElementById(spanID).innerHTML = "";
        return true;
      } else {
        // không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        return false;
      }
    };
  
  }