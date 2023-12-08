  function ageCalculator() {  
    var userinput = document.getElementById("dob").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("para").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
      
    var month_diff = Date.now() - dob.getTime();  
      
    
    var age_dt = new Date(month_diff);   
      
    
    var year = age_dt.getUTCFullYear();  
      
    
    var age = Math.abs(year - 1970);  
      
    document.getElementById("cal").style.display="none";
    document.getElementById("para").innerHTML =    
             "Age is: " + age + " years. ";  
    return false
    }  
}  
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("user").innerHTML = "Username : "+localStorage.getItem("username") || 'No username stored';
    document.getElementById("em").innerHTML = localStorage.getItem("email") || 'No email stored';
    document.getElementById("phn").innerHTML = localStorage.getItem("phonenumber") || 'No phone number stored';
});