let x=0;

const divRef1=document.querySelector("#dynamic-content1");
const divRef2=document.querySelector("#dynamic-content2");
const divRef3=document.querySelector("#dynamic-content3");

divRef1.classList.add("hide");
divRef2.classList.add("hide");
divRef3.classList.add("hide");


const buttonRef1=document.querySelector("#button1");
const buttonRef2=document.querySelector("#button2");
const buttonRef3=document.querySelector("#button3");

buttonRef1.addEventListener("click",()=>{divRef1.classList.toggle("hide");});
buttonRef2.addEventListener("click",()=>{divRef2.classList.toggle("hide");});
buttonRef3.addEventListener("click",()=>{divRef3.classList.toggle("hide");});
