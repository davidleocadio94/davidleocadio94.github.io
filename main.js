
let aboutMe=document.getElementById('about-me');
let professionalProjects=document.getElementById('professional-projects');
let sideProjects=document.getElementById('side-projects');
let cv=document.getElementById('cv');
let contact=document.getElementById('contact');



function turnPurple(event){
    event.target.style.color='purple';
}

function turnBlack(event){
    event.target.style.color='black';
}

aboutMe.addEventListener('mouseover',turnPurple);
aboutMe.addEventListener('mouseout',turnBlack);
aboutMe.addEventListener('click',function(){
    let childElements=aboutMe.getElementsByClassName('about-me');
    Array.from(childElements).forEach(function(child){
        if (child.style.display === "none") {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        });
    });

//////

professionalProjects.addEventListener('mouseover',turnPurple);
professionalProjects.addEventListener('mouseout',turnBlack);
professionalProjects.addEventListener('click',function(){
    let childElements=professionalProjects.getElementsByClassName('professional-projects');
    Array.from(childElements).forEach(function(child){
        if (child.style.display === "none") {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        });
    });


//////


sideProjects.addEventListener('mouseover',turnPurple);
sideProjects.addEventListener('mouseout',turnBlack);
sideProjects.addEventListener('click',function(){
    let childElements=sideProjects.getElementsByClassName('side-projects');
    Array.from(childElements).forEach(function(child){
        if (child.style.display === "none") {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        });
    });


///

cv.addEventListener('mouseover',turnPurple);
cv.addEventListener('mouseout',turnBlack);
cv.addEventListener('click',function(){
    let childElements=cv.getElementsByClassName('cv');
    Array.from(childElements).forEach(function(child){
        if (child.style.display === "none") {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        });
    });


///



contact.addEventListener('mouseover',turnPurple);
contact.addEventListener('mouseout',turnBlack);
contact.addEventListener('click',function(){
    let childElements=contact.getElementsByClassName('contact');
    Array.from(childElements).forEach(function(child){
        if (child.style.display === "none") {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        });
    });

///
/*
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('resume-iframe');
    iframe.onload = function() {
      // Set the iframe height based on its content's height
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
  });
*/

//professionalProjects.onclick=toggle;
//sideProjects.onclick=toggle;