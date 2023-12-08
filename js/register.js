function validateForm() {
    let a = document.forms["register"]["username"].value;
    let b = document.forms["register"]["email"].value;
    let c = document.forms["register"]["phonenumber"].value;
    let d = document.forms["register"]["password"].value;
localStorage.setItem("username",a);
  localStorage.setItem("email",b);
  localStorage.setItem("phonenumber",c);
    if (a == "") {
      alert("username must be filled out");
      return false;
    }else if (b==""){
        alert("Email must be filled out");
        return false;
    }else if (c==0){
        alert("phonenumber must be filled out");
        return false;
    }else if (d==""){
        alert("Password must be filled out");
        return false;
    }
  }
  
