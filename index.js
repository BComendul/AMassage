var x = window.matchMedia("(max-width: 1000px)");
var slideIndex = 1;
showSlides(slideIndex);


function myFunction(x) {
  if (x.matches) {


    var stylesheet=document.getElementById("sheet");
    var headings= document.getElementsByTagName("H1");
    stylesheet.href="block.css";
    document.getElementById("massage-pic").style.display="none";
    var i;
    for (i=0; i<headings.length;i++){
    headings[i].className="center-header";
    }
    slideIndex=1;
    showSlides(1);
    // If media query matches
  } else {
    var stylesheet=document.getElementById("sheet");
    stylesheet.href="index.css";
    document.getElementById("massage-pic").style.display="flex";

    slideIndex=1
    showSlides(1);

  }
}
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes








function showSlides(n){
  console.log(n);
  var reviewlist = document.getElementsByClassName("review-entry");
  var i;
  for (i = 0; i < reviewlist.length; i++) {
      reviewlist[i].style.display = "none";
  }

  if (document.getElementById("massage-pic").style.display=="none"){
    if (n > reviewlist.length) {n-= reviewlist.length}
    if (n < 1) {n += reviewlist.length}
    reviewlist[n-1].style.display = "inline-grid";

  }else{
    for (i=0;i<2;i++){
      if (n > reviewlist.length) {n-= reviewlist.length}
      if (n < 1) {n += reviewlist.length}
      reviewlist[n-1].style.display = "inline-grid";
      n++;
    }
  }


slideIndex++;
}
function plusSlides(n){

  var reviewlist = document.getElementsByClassName("review-entry");


if (document.getElementById("massage-pic").style.display=="none"){
  console.log("here");
  var reviewlist = document.getElementsByClassName("review-entry");
if (n<0){
  slideIndex=slideIndex-2;
}else {
  slideIndex=slideIndex;
}
  if (slideIndex > reviewlist.length) {slideIndex-= reviewlist.length}
  if (slideIndex < 1) {slideIndex += reviewlist.length}
  console.log(slideIndex);
  showSlides(slideIndex);

}else{
  if (n<0){
    slideIndex=slideIndex-3;
  }else {
    slideIndex++;
  }
    if (slideIndex > reviewlist.length) {slideIndex-= reviewlist.length}
    if (slideIndex < 1) {slideIndex += reviewlist.length}
    console.log(slideIndex);
    showSlides(slideIndex);

}

}
