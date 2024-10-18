
const nav = document.querySelector(".responsiveNav");

const showNav = () => {
    nav.style.opacity = "1"
    nav.style.zIndex = "2"
    nav.style.width = "300px"
}

const dissappearNav = () => {
    nav.style.opacity = "0"
    nav.style.zIndex = "-1"
    nav.style.width = "120px"
}

const removeNav = () =>{
    nav.style.opacity = "0"
    nav.style.zIndex = "-1"
    nav.style.width = "120px"
}

const form =  document.querySelector("form");
const userName = document.querySelectorAll("input")[0];
const email = document.querySelectorAll("input")[1];
const msg = document.querySelectorAll("textarea")[0];
const emailLabel = document.querySelectorAll("label")[1];

form.addEventListener("submit", (e) =>{

    if(userName.value === ""  || msg.value === "" ){
        e.preventDefault();
        userName.style.border  = "2px solid red";
        email.style.border  = "2px solid red";
        msg.style.border  = "2px solid red";
    }

    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        e.preventDefault();
        
        emailLabel.textContent = "Invalid Email"
        emailLabel.style.color = "red"

        userName.style.border  = "2px solid red";
        email.style.border  = "2px solid red";
        msg.style.border  = "2px solid red";
    }

    else{
        return true;
    }

})











