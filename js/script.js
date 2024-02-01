

//Google translate---------------------
  
 function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }


// <!-- ------------------------loading spinner -->




window.addEventListener("load", ()=>{
    const loader=document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    
    loader.addEventListener("transitionend", ()=>{
      document.body.removeChild("loader");
    })
    })


// ------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------


//    <!-- Back to top button -->



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

