let activeChange = document.getElementsByClassName("tabHeader")[0].getElementsByTagName("div");

for(let i=0;i<activeChange.length;i++){
  activeChange[i].addEventListener("click",function(){
    // makes everything that was active unactive by removing active
    document.getElementsByClassName("tabHeader")[0].getElementsByClassName("active")[0].classList.remove("active");
    activeChange[i].classList.add("active");
    
    document.getElementsByClassName("tabContent")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tabContent")[0].getElementsByClassName("tabBody")[i].classList.add("active");
  });
}