function register(){
    var nameFromHtml = document.getElementById("name");
    if (nameFromHtml) {
      var name = nameFromHtml.value;
      console.log(name);
    }
    var emailFromHtml = document.getElementById("email");
    if (emailFromHtml) {
      var email = emailFromHtml.value;
      console.log(email);
    }
    var passwordFromHtml = document.getElementById("password");
    if (passwordFromHtml) {
      var password = passwordFromHtml.value;
      console.log(password);
    }
    
    if( name && email && password){
      //console.log("All fields are there") // JSON.parse()
    localStorage.setItem("userData",JSON.stringify({nameOfUser:name, emailOfUser:email, passwordOfUser: password}));
      localStorage.setItem("isUserLoggedIn","false");
      alert("Register done!");
      window.location.href = "./login.html"

    }else{
      alert("Put all fields..")
    }
}
function login(){
  var emailFromHtml = document.getElementById("email");
  if(emailFromHtml){
    var emailFromLogin = emailFromHtml.value
    console.log(emailFromLogin)
  }
  var passwordFromHtml = document.getElementById("password");
  if(passwordFromHtml){
    var passwordFromLogin = passwordFromHtml.value
    console.log(passwordFromLogin)
  }
if(emailFromLogin && passwordFromLogin){
  var dataFromLocal = localStorage.getItem("userData");
  //console.log(dataFromLocal);
  var parsedData = JSON.parse(dataFromLocal);
   console.log(parsedData.emailOfUser,"parsedData.emailOfUser");
  if(emailFromLogin == parsedData.emailOfUser && passwordFromLogin == parsedData.passwordOfUser){
    localStorage.setItem("isUserLoggedIn","true");
    alert("Login Succesfull")
    window.location.href = "./home.html"
  }else{
    alert("Wrong cred !")
  }
  }else{
    alert("Error:-Write all credentials!")
  }
  

  }



  function addtocart(proId){
   // alert("Adding to cart")
    console.log(proId,"proId")
  var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
 // console.log(existingProducts)
    if(existingProducts == null){existingProducts=[]}
     console.log(existingProducts, "existingProducts 1")
   var proPs= proId.querySelectorAll("p");
   var proName =proPs[0].innerText;
  // console.log(proName, "proName")
     var proImg  = proId.querySelector("img").src;
    // console.log(proImg)
   var proPrice = proPs[2].innerText;
   // console.log(proPrice)
   var proObj ={pN: proName, pP:proPrice, pI: proImg}
    // console.log(proObj)
     existingProducts.push(proObj);
   //console.log(existingProducts,"existingProducts 2")
   localStorage.setItem("allProducts",JSON.stringify(existingProducts))
   alert("Product added !")
  }

  function logout(){
    alert("logout is woking");
  }


