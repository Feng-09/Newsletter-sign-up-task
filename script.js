"use strict";

let btn = document.getElementById("subscribe");
let input = document.getElementById("mail");
let valid = document.getElementById("popUp");
let bg = document.getElementById("main");
let dismiss = document.getElementById("dismissBtn");
let main = document.getElementById("body");
let invalid = document.getElementById("invalid");

btn.addEventListener("click", () => {
  let mail = document.getElementById("mail").value;
  console.log(mail);
  let validation1 = /\w@\w.\w/.test(mail);
  console.log(validation1);
  document.getElementById("iMail").innerHTML = mail;
  if (validation1 === true) {
    valid.classList.add("popup");
    bg.classList.add("bg");
    main.classList.add("invisible");
  } else {
    invalid.innerHTML = "Valid email required";
    input.classList.add("fail");
    invalid.classList.add("vibrate");
  }
});

input.addEventListener("focus", () => {
  document.getElementById("invalid").innerHTML = "";
  invalid.classList.remove("vibrate");
});

dismiss.addEventListener("click", () => {
  valid.classList.remove("popup");
  bg.classList.remove("bg");
  main.classList.remove("invisible");
});

bg.addEventListener("click", () => {
  valid.classList.remove("popup");
  bg.classList.remove("bg");
  main.classList.remove("invisible");
});
