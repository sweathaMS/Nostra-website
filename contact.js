var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})
 let x=document.getElementById("x")
 let signuptext=document.querySelector(".signup")
 x.addEventListener("click",function()
{
  
  signuptext.style.display="none"
})