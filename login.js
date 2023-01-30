const slider = document.querySelector(".slider-img");
const btnLogon =document.querySelector('#btn-login')
const errMessage = document.querySelector('.err-message')



const checkLoginBtn = () => {
  let username = document.querySelector(`#login-username`);
  let pass = document.querySelector(`#login-pass`);
  let email = document.querySelector(`#login-Email`);
  let Full = document.querySelector(`#login-FullName`);
  let btnLogin = document.querySelector(`#btn-login`);
  username.value.length>5 && pass.value.length>5
    ? btnLogin.disabled = false
    : btnLogin.disabled = true;
  console.log('check')
};
const changeInput = (classname,input) => {
  let x = document.querySelector(`#${classname}`);
  input.value.length > 0
    ? x.classList.add("inpt-focused")
    : x.classList.remove("inpt-focused"); 
    checkLoginBtn()
};







