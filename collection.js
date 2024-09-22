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
var bigcontainer=document.getElementById("bigcontainer")
var smallcontainer=bigcontainer.querySelectorAll("div")
console.log(smallcontainer);
var input=document.getElementById("input")
input.addEventListener("keyup",function(event)
{
 let inputs=event.target.value.toLowerCase()
 console.log(inputs);
 for(i=0;i<smallcontainer.length;i++)
 {
   var text=smallcontainer[i].querySelector("h4").textContent.toLowerCase()
   console.log(text);
   if(text.toLowerCase().indexOf(inputs)<0)
   {
    smallcontainer[i].style.display="none"
   }
   else{
    smallcontainer[i].style.display="block"
   }
   
 }
 
}
)
