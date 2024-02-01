

var x = document.getElementById("searchfocus");

x.addEventListener("focusout", focusOutFun);
x.addEventListener("focus", focusFun);

function focusFun() {
    document.getElementById("focusColor").style.border = "4px solid orange";
    document.getElementById("focusColor").style.borderRadius = "12px";
    
}

function focusOutFun() {
    
    document.querySelector("#focusColor").style.border = "none";
}

// ///////////


function openWindow() {
    document.querySelector(".dropdown-menushow").style.display = "flex";

    document.querySelector(".dropdown-menushow").style.overflow = "hidden";

}

function closeWindow() {
    document.querySelector(".dropdown-menushow").style.display = "none";
}

function openWindow1() {
    document.querySelector(".dropdown-menushowprime").style.display = "flex";

    document.querySelector(".dropdown-menushowprime").style.overflow = "hidden";

}

function closeWindow1() {
    document.querySelector(".dropdown-menushowprime").style.display = "none";
}

// ////////////////////////////


function showBordernext() {
    document.getElementsByClassName("carousel-control-next")[0].style.border = "3px groove #2b2e2b";
    document.getElementsByClassName("carousel-control-next")[0].style.outline = "2px solid white";
    document.getElementsByClassName("carousel-control-next")[0].style.borderRadius = "5px";
    document.getElementsByClassName("carousel-control-prev")[0].style.border = "none";
    document.getElementsByClassName("carousel-control-prev")[0].style.outline = "none";

}
function showBorderprev() {
    document.getElementsByClassName("carousel-control-prev")[0].style.border = "3px solid #2b2e2b";
    document.getElementsByClassName("carousel-control-prev")[0].style.outline = "2px solid white";
    document.getElementsByClassName("carousel-control-prev")[0].style.borderRadius = "5px";
    document.getElementsByClassName("carousel-control-next")[0].style.border = "none";
    document.getElementsByClassName("carousel-control-next")[0].style.outline = "none";
}



//////////////////////////////////////////
var countDownDate = new Date("Dec 5, 2024 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    document.getElementById("timer1").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        document.getElementById("timer1").innerHTML = "EXPIRED";
    }
}, 1000);

///////////////////////



    
    var totalItems = $('.item').length;

    var currentIndex = $('div.active').index() + 1;


    $('.num').html(totalItems);
    $('.num').html(currentIndex + '/' + totalItems);

    $('#next').click(function () {

      //currentIndex++;
      //$('.num').html(function(i, val) { return val*1+1 });
      
     
      if (currentIndex < totalItems) {
        currentIndex++;

        $('.num').html(currentIndex + '/' + totalItems);
      }
      
      else {
        currentIndex--;
        $('.num').html(currentIndex + '/' + totalItems);
      }

      //  $('.slideshow').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      //     $(".slick-slide").removeClass('works');
      //     $('.slick-current').addClass('works');        
      //  });

    });
    $('#prev').click(function () {

      //currentIndex++;
      //$('.num').html(function(i, val) { return val*1+1 });
      if (currentIndex <totalItems) {

        
        $('.num').html(currentIndex + '/' + totalItems);
      }
      else {
        currentIndex--;
        $('.num').html(currentIndex + '/' + totalItems);
      }



    });





 

