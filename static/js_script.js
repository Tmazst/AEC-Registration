//
//// Function to handle the scroll event
//function handleScroll() {
//
////      console.log("Scroll Called1");
//      // Get the navigation menu element
//
//      // Store the last known scroll position
//      let lastScrollTop = 0;
//
//      // Get the height of the window
//      const windowHeight = window.innerHeight;
//
//      // Get the current scroll position
//      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//
//      // Determine the scroll direction
//      const scrollDirection = currentScroll > lastScrollTop ? 'down' : 'up';
//
//
//       if (window.innerWidth <= 768){
//          // If the user is scrolling down and the navigation is not already at the bottom
//          if (scrollDirection === 'down' && (windowHeight + currentScroll) >= document.body.offsetHeight-4000) {
//            console.log("Scroll Called",currentScroll,scrollDirection);
//          } else {
//            //write code
//          }
//          // Update the known scroll position
//          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
//
//    }else{
//
//          var scrollingElement = document.getElementById("section-last");
//          // Distance from the top of the document to the top of the scrolling element
//          var elementOffset = scrollingElement.offsetTop;
//          // Viewport (window) top position
//          var windowTop = window.pageYOffset || document.documentElement.scrollTop;
//
//          if (windowTop > elementOffset) {
////              scrollingElement.style.position = "fixed";
////              scrollingElement.style.top = "0";
//              } else {
////                scrollingElement.style.position = "relative";
//              }
//
//    }
//}
//window.onscroll = function() {handleScroll()};

document.addEventListener('DOMContentLoaded', function () {
    
    // const specialDietBool = document.getElementById('special_diet_bool');
    // const specialDietContainer = document.getElementById('special_diet_container');
    // const accommodationBool = document.getElementById('accommodation_bool');
    // const accommodationContainer = document.getElementById('accommodation_cont');

    // specialDietBool.addEventListener('change', function () {
    //     if (specialDietBool.checked) {
    //         specialDietContainer.style.display = 'block';
    //         specialDietContainer.classList.remove('hidden')
    //     } else {
    //         specialDietContainer.style.display = 'none';
    //     }
    // });

    const specialDietRadios = document.querySelectorAll('input[name="special_diet_bool"]');
        
    specialDietRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            const specialDietContainer = document.getElementById('special_diet_container');
            if (this.value === "1") {  // Assuming "1" means Yes
                // console.log("Assuming 1 means Yes")
                specialDietContainer.style.display = 'block';
                specialDietContainer.classList.remove('hidden');
            } else {  // Assuming anything else means No
                specialDietContainer.style.display = 'none';
            }
        });
    });
});

// });


function openDetails(id,event){
    
    console.log("ID: ",id)
    let showRegDetails = document.querySelector("#reg-info-"+id);
    let showEvDetails = document.querySelector("#ev-info-"+id);

    showRegDetails.classList.toggle("show-popup");
    showEvDetails.classList.toggle("show-popup");

    if (event.target.innerHTML === "Show Details"){
            event.target.innerHTML = "Hide";
            } else {
                event.target.innerHTML = "Show Details";
        };
};


function popUp(id){
    // var popScrnLogo = document.getElementById("updates");
    // popScrnLogo.classList.toggle("show-popup");
    
    let popCont = document.querySelector('#pop_image_'+id);
    let popup = document.querySelector("#popup_"+id);

    popCont.classList.toggle("show-popup");
    popup.classList.toggle("show-popup");

    // Assuming you want to remove the query parameter from the URL
    // // Get the current URL without the query parameter
    // var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;

    // // Use replaceState to update the URL without the query parameter
    // window.history.replaceState({path: newUrl}, '', newUrl);
    
};

const paragraph = document.querySelectorAll('.sel-tag');

paragraph.forEach(function(pTag){
    const words = pTag.innerText.split(' ').map(word => `<span>${word}</span>`);
    pTag.innerHTML = words.join(' ');
    pTag.classList.toggle('.sel-tag');
    });
//function pop(){
//    console.log('Mouse Over');
//}

var sections = document.querySelectorAll(".profile-sections");
var currentSectionIndex = 0;
var firstSection = sections[0];
var noSections = sections.length;
var progressCont = document.querySelectorAll(".progress-cont");
var progressCount = document.querySelectorAll(".progress-no");
let indexList = [];


function changeProgressColor(){

    for (var sect=0;sect<noSections;sect++){
        // Create Divs
        var progressCountIncr = document.createElement("div");
        var progressCircle = document.createElement("div");
        var progressLineSep = document.createElement("div");

        if (indexList.includes(sect)) {
            // Skip creating the progress element since it exists
            continue;
        }

        // Do not start from zero
        progressCountIncr.innerText = (sect+1);
        //  console.log("Current Index Outside:" + currentSectionIndex);
        //  console.log("Current Sect: Outside" + sect);
        //  Make current progress count coral in color

        if(currentSectionIndex == sect){
            // Assign Classes to divs
            progressCountIncr.classList.add("progress-no-c");
            progressCircle.classList.add("progress-incr-c");
            progressLineSep.classList.add("progress-line-sep-c");

            // Append to parents div
            progressCircle.appendChild(progressCountIncr);
            progressCont[currentSectionIndex].appendChild(progressLineSep);
            progressCont[currentSectionIndex].appendChild(progressCircle);

        }else{

//            console.log("Current Index Else:" + currentSectionIndex);
//            if (!indexList.includes(currentSectionIndex)){

                //Assign Classes to divs
                progressCircle.classList.add("progress-incr");
                progressLineSep.classList.add("progress-line-sep");
                progressCountIncr.classList.add("progress-no");

                console.log("List Indexes: ",indexList);
                }

                // Append to parents div
                progressCircle.appendChild(progressCountIncr);
                progressCont[currentSectionIndex].appendChild(progressLineSep);
                progressCont[currentSectionIndex].appendChild(progressCircle);

                indexList.push(sect);

        }

    };


const popup = document.querySelector('.pop-up');
var quoteBtns = document.querySelectorAll('.item');
var popCont = document.querySelectorAll('.pop-cont');


quoteBtns.forEach(function(btn){
    btn.addEventListener('click', function(event){
//    console.log("Contains Poster Quote: ",event.target);
     if(event.target.id === 'logo_quote_btn'){
        var popScrnLogo = document.getElementById("logo_quote");
        popScrnLogo.classList.toggle("show-popup");
        popup.classList.toggle("show-popup");

        }else if(event.target.id === 'poster_quote_btn'){
            var popScrnPoster = document.getElementById("poster_quote");
//            console.log("Contains Poster Quote: ")
            popScrnPoster.classList.toggle("show-popup");
            popup.classList.toggle("show-popup");
        }else if(event.target.id === 'flyer_quote_btn'){
            var popScrnPoster = document.getElementById("flyer_quote");
            console.log("Contains Poster Quote: ")
            popScrnPoster.classList.toggle("show-popup");
            popup.classList.toggle("show-popup");
            }
     })
});

function openMenuFunc(){
    console.log("Test2");
}

//#Menu
//const navSlide = () => {
const burger = document.querySelector(".menu-icon");
const otherNav = document.querySelector(".other-nav");
const navlinks = document.querySelectorAll(".nav-link");
//const navLinks = document.querySelectorAll(".nav-links a");

burger.addEventListener("click", () => {

    console.log("Test1");
    otherNav.classList.toggle('menu-appear');
    // navlinks.classList.toggle('navLinkFade');
    burger.classList.toggle("toggle");

 });

//  //
//};
//}
//navSlide();

//function openPopup(event){
//     console.log("Contains Poster Quote")
//};

//    const popCont = document.querySelector('.pop-cont');
//    popup.classList.add("show-popup");

//Read Form
$(document).ready(function(){

    $('.pop-btns').click(function(){
//        console.log('Cleicked');
        $('form').serializeArray();
        $('form').submit();
    })
});


function closePopup(){
    popup.classList.remove("show-popup");
    popCont.forEach(function(div){
        div.classList.remove("show-popup");
    })
}

//function boolOptionsFunc(){

var boolOpts = document.querySelectorAll(".bool-options");

boolOpts.forEach(function(elem){

    elem.addEventListener('click', function(event){

        if (event.target.classList.contains("activate-options")){
//              console.log("Clicked: ",event.target.style.color);
              elem.classList.remove("activate-options");
              elem.classList.add("bool-options");
        }else{
//            console.log("Click: ",event.target);
            elem.classList.add("activate-options");
            elem.classList.remove("bool-options");
        }
    });

});

//}

//window.addEventListener('click', function(event){
//    if(popup){
//        if(event.target != popCont){
//           popup.classList.remove(".show");
//        }
//    }
//});

if (currentSectionIndex == 0){
    firstSection.style.display = "block";

    changeProgressColor()

    }else{
        firstSection.style.display = "none";
};


function showNextSection() {

    //Prevents Current Page From Reloading
    event.preventDefault();

    sections[currentSectionIndex].style.display = "none"; // Hide current section
    currentSectionIndex++; // Move to the next section

    if (currentSectionIndex < sections.length) {
        sections[currentSectionIndex].style.display = "block"; // Show next section
        changeProgressColor()
        };

    };



//observer.observe()

//
//function showPreviousSection() {
//
//    //Prevents Page From Reloading
//    event.preventDefault();
//
//    sections[currentSectionIndex].style.display = "none"; // Hide current section
//    currentSectionIndex--; // Move to the next section
//
//    if (currentSectionIndex >= 0) {
//        sections[currentSectionIndex].style.display = "block"; // Show next section
//        //changeProgressColor()
//        };
//
//    };

//function showPreviousSection() {
//
//    history.go(-1)
//
//
//
//    };



//If Other in web type is selected do the following...
document.querySelector("#otherType").addEventListener('change',function(e){

        if (this.selectedIndex == 5){
            var anInput = document.createElement('input');
            var otherLabel = document.createElement('label');
            var parent = this.parentNode;
            //Assign IDs
            anInput.id = 'other-opt-input';
            otherLabel.id = 'other-opt-label';
            // Label description
            otherLabel.innerHTML = '<span> Please Specify: </span> '
            //Add Class
            anInput.classList.add('form-control-other');
            parent.appendChild(otherLabel);
            this.parentNode.appendChild(anInput);

        }else{
            //If these Elements are defined/present, remove them
            if(document.querySelector("#other-opt-input") != "undefined"){
                document.querySelector("#other-opt-input").remove();
                document.querySelector("#other-opt-label").remove();
            }

        }

    });


    //If Other in web type is selected do the following...
document.querySelector("#checkbox-opt").addEventListener('change',function(){

        if (this.checked){
            var anInput = document.createElement('input');
            var otherLabel = document.createElement('label');
            var parent = this.parentNode;
            //Assign IDs
            anInput.id = 'doc-upload-id';
            anInput.type = 'file';
            otherLabel.id = 'doc-upload-label';
            // Label description
            otherLabel.innerHTML = '<br><br><span> Please Upload Document below: </span> <br><br> '
            //Add Class
            //anInput.classList.add('form-control-other');
            parent.appendChild(otherLabel);
            this.parentNode.appendChild(anInput);

        }else{
            //If these Elements are defined/present, remove them
            if(document.querySelector("#doc-upload-id") != "undefined"){
                document.querySelector("#doc-upload-id").remove();
                document.querySelector("#doc-upload-label").remove();
            }

        }

    }
    );

var $message = $('.sel-tag');

$(window).on('mousemove', function(e) {
    if(e.clientX > e.clientY) {
        $message.text('top right triangle');
    } else {
        $message.text('bottom left triangle');
    }
});

