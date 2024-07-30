let slide=document.querySelector(".sliderW");
let menuitem=document.querySelectorAll(".menuitem");

const products = [
    {
      id: 1,
      title: "NIKE",
      price: 119,
      img: "nike.png"
    },
    {
        id: 2,
        title: "CRATER",
        price: 116,
        img: "crater.png"
    },
    {
        id: 3,
        title: "JORDAN",
        price: 110,
        img: "file.png"
    },
    {
        id: 4,
        title: "AIR FORCE",
        price: 99,
        img: "file2.png"
    }
];

let chproduct=products[0];

let currentproimg=document.querySelector(".productimg");
let currentprotitle=document.querySelector(".producttitle");
let currentproprice=document.querySelector(".productprice");
let size=document.querySelectorAll(".sizes");


menuitem.forEach((val,index)=>{
    val.addEventListener("click",()=>{
        slide.style.transform=`translateX(${-100*index}vw)`;

        chproduct=products[index];
        currentproimg.src=chproduct.img;
        currentprotitle.innerText=chproduct.title;
        currentproprice.innerText=chproduct.price;
    });
});


let one=document.querySelectorAll(".sizes");
size.forEach((sizes)=>{
     sizes.addEventListener("click",(e)=>{
        one.forEach((val)=>{
            val.classList.remove("sizecolor");
        });
        if(sizes.innerHTML=="41"){
            document.getElementById("s1").classList.add("sizecolor");
            console.log("red1");
        }
        else if(sizes.innerHTML=="42"){
            document.getElementById("s2").classList.add("sizecolor");
            console.log("red2");
        }
        else if(sizes.innerHTML=="43"){
            document.getElementById("s3").classList.add("sizecolor");
        }
    });
});

let productbutton=document.querySelector(".productbutton");
let payment=document.querySelector(".payment");
let clos=document.querySelector(".payspan");

productbutton.addEventListener("click",()=>{
    payment.style.display="flex";
});
clos.addEventListener("click",()=>{
    payment.style.display="none";
});
