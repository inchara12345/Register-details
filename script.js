<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project - HTML registration form with varification</title>
<style>@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

* {
  margin: 0
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #9b415c;
}

h1 {
  color: white;
  font-family: "Oswald", sans-serif;
  margin: 20px 0;
  text-align: center;
}

.registartion-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  color: #fff;
  font-size: 18px;
  font-family: sans-serif;
  background-color: #6f2f42;
  padding: 20px;
}

.registartion-form input,
.registartion-form select,
.registartion-form textarea {
  border: none;
  padding: 5px;
  margin-top: 10px;
  font-family: sans-serif;
}

.registartion-form input:focus,
.registartion-form textarea:focus {
  outline: none;
  box-shadow: 0 0 10px rgb(228, 228, 228), 0 0 10px rgb(224, 224, 224);
}

.registartion-form .submit {
  width: 100%;
  padding: 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  background-color: #fff;
  border-radius: 5px;
}

.registartion-form .submit:hover {
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}</style></head>

<body>
  <div class="container">
    <h1>HTML registration form with varification</h1>
    <form name="registration" class="registartion-form" onsubmit="return formValidation()">
      <table>
        <tr>
          <td><label for="name">Name:</label></td>
          <td><input type="text" name="name" id="name" placeholder="your name"></td>
        </tr>
        <tr>
          <td><label for="email">Email:</label></td>
          <td><input type="text" name="email" id="email" placeholder="your email"></td>
        </tr>
        <tr>
          <td><label for="password">Password:</label></td>
          <td><input type="password" name="password" id="password"></td>
        </tr>
        <tr>
          <td><label for="phoneNumber">Phone Number:</label></td>
          <td><input type="number" name="phoneNumber" id="phoneNumber"></td>
        </tr>
        <tr>
          <td><label for="gender">Gender:</label></td>
          <td>
            Male: <input type="radio" name="gender" value="male">
            Female: <input type="radio" name="gender" value="female">
            Other: <input type="radio" name="gender" value="other">
          </td>
        </tr>
        <tr>
          <td><label for="language">language</label></td>
          <td>
            <select name="language" id="language">
              <option value="">Select language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Hindi">Hindi</option>
              <option value="Arabic">Arabic</option>
              <option value="Russian">Russian</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label for="zipcode">Zip Code:</label></td>
          <td><input type="number" name="zipcode" id="zipcode"></td>
        </tr>
        <tr>
          <td><label for="about">About:</label></td>
          <td><textarea name="about" id="about" placeholder="Write about yourself..."></textarea></td>
        </tr>
        <tr>
          <td colspan="2"><input type="submit" class="submit" value="Register" /></td>
        </tr>
      </table>
    </form>
  </div>
<script>// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");

// function for form varification
function formValidation() {
  // checking length of name
  if (userName.value.length < 2 || userName.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    userName.focus();
    return false;
  }
  // checking email format
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking password character pattern
  if (password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
    alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
    password.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  // checking language
  if (language.value === "") {
    alert("Please select your language!")
    return false;
  }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }
  return true;
}</script></body>

</html>