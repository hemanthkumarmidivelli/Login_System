function validateForm() {
    let x = document.forms["login"]["username"].value;
    let y = document.forms["login"]["password"].value;

    if (x == "") {
      alert("username must be filled out");
      return false;
    }else if (y==""){
        alert("Password must be filled out");
        return false;
    }
  }
