function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    // this code is if user enter his name the variable store his value in local storage
    sessionStorage.setItem("name", name);
    if(name == ""){
      alert("Please Enter your name")
    }else{
    location.href = "quiz.html";

    }
  
  }