let bref=document.querySelector("#bgr");
let menuRef=document.querySelector("#mainmenu");
let i=0;

/* initially set display of main menu to none( or off ) */

menuRef.style.cssText="display:none;"

/*menuRef.classList.toggle("mainmenu");*/

console.log(bref,menuRef);
bref.addEventListener("click",()=>{
    i++;
    console.log(menuRef);
    console.log(menuRef.classList);
   /*  menuRef.classList.toggle("mainmenu");*/
     console.log(menuRef.classList);
    /* menuRef.classList.toggle("toggleclass");*/
    console.log(getComputedStyle(menuRef,null).display);
    if ((getComputedStyle(menuRef,null).display)=="none"){menuRef.style.cssText="display:flex;"}
    else
    { menuRef.style.cssText="display:none;"};
     
    console.log(menuRef.classList+"   "+i);
});

