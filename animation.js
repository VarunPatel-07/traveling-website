console.log("hi from animation js");
const li1 = document.querySelector("#li-btn-1");
const li2 = document.querySelector("#li-btn-2");
const li3 = document.querySelector("#li-btn-3");
const visible1 = document.querySelector("#visible-1");
const visible2 = document.querySelector("#visible-2");
const visible3 = document.querySelector("#visible-3");

li1.addEventListener("click" , (e)=>{
     li1.classList.add("active") ;
     li2.classList.remove("active") ;
     li3.classList.remove("active") ;
     visible1.classList.remove("active-card");
     visible2.classList.add("active-card");
     visible3.classList.add("active-card")
});
li2.addEventListener("click" , (e)=>{
     li2.classList.add("active") ;
     li1.classList.remove("active") ;
     li3.classList.remove("active") ;
     visible1.classList.add("active-card");
     visible2.classList.remove("active-card");
     visible3.classList.add("active-card")
});
li3.addEventListener("click" , (e)=>{
     li3.classList.add("active") ;
     li2.classList.remove("active") ;
     li1.classList.remove("active") ;
     visible1.classList.add("active-card");
     visible2.classList.add("active-card");
     visible3.classList.remove("active-card")
})
