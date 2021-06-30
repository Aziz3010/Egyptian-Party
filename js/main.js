// ////////////// Part 1

$(document).ready(function(){
    let menuWidth = $(".Menu").innerWidth()
    $(".navBar").css("left",`${-menuWidth}`)
})

$("#opn").click(function(){
    let menuWidth = $(".Menu").innerWidth()
    if($(".navBar").css("left") == "0px"){
        $(".navBar").animate({"left":-menuWidth},1500)
    } else{
        $(".navBar").animate({"left":0},1500)
    }
})

// the scrolling

$(".content ul li a").click(function(){
    let theSectionHref = $(this).attr("href");
    let sectionOffset = $(`${theSectionHref}`).offset().top;
    $("body").animate({scrollTop:sectionOffset},1500);
})

// ////////////// Part 2

// click on singer & open P
$(".singer h3").click(function(){
    $(this).next().slideToggle(500);
    $(".singer div").not($(this).next()).slideUp(500);
})

// ////////////// Part 3

function countDown(){
    let countDate = new Date(`Dec 17,2025 00:00:00`).getTime();
    let nowDate = new Date().getTime();
    let diff = countDate - nowDate
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let textDay = Math.floor(diff / day) ;
    let textHour = Math.floor((diff % day) / hour) ;
    let textMinute = Math.floor((diff % hour) / minute) ;
    let textSecond = Math.floor((diff % minute) / second) ;

    document.getElementById("Days").innerHTML = textDay + " Days";
    document.getElementById("Hours").innerHTML = textHour + " Hours";
    document.getElementById("Minutes").innerHTML = textMinute + " Minutes";
    document.getElementById("Seconds").innerHTML = textSecond + " Seconds";

    setTimeout(countDown,1000)
}
countDown()

// ////////////// Part 4

let textArea = document.getElementById("Message");
let counterLetterNum = document.getElementById("letterNum"); // 100
let alertMessage = document.getElementById("alertMs"); // 100
let letters = 100;

// Calc the letters
textArea.addEventListener("input",function(){
    let inputLettersNum = textArea.value.length;
    counterLetterNum.innerHTML = letters - inputLettersNum;

    if(inputLettersNum > 100){
        alertMessage.innerHTML = "your available character finished"
        alertMessage.style.color = "red"
        counterLetterNum.style.color = "red"
    } else{
        alertMessage.innerHTML = "Characyer Reamining"
        alertMessage.style.color = "green"
        counterLetterNum.style.color = "green"
    }
})