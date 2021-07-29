let activeChange = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<activeChange.length;i++){
  activeChange[i].addEventListener("click",function(){
    // makes everything that was active unactive by removing active
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    activeChange[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}