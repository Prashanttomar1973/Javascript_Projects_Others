let btn1=document.querySelector("#btn1");
let mode=document.querySelector("body");
let color="light";
btn1.addEventListener("click",()=>{
    if(color === "light"){
        color="dark";
        mode.classList.remove("light");
        mode.classList.add("dark");
    }else{
        color="light";
         mode.classList.remove("dark");
        mode.classList.add("light");
    }

    console.log(color);
});
