function validateForm() {
console.log("validateForm called");
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
 

  let nameRegex = /^[A-Za-z]{6}$/;
  let mailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  // Validate username
  if (!nameRegex.test(userName)) {
    alert("Username must contain only alphabets and be at least 6 characters long.");
    return false;
  }

  // Validate email
  if (!mailRegex.test(email)) {

    alert("Invalid email format.");
    return false;
  }
 alert("submitted");
 window.location.href="todo.html";
 return false;
}

window.validateForm = validateForm;


