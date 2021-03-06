/*------ Data ------*/
const slides = [{
    title:'Discover innovative ways to decorate',
    text:`We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`,
    image:"url('images/desktop-image-hero-1.jpg')"
},
{
    title:'We are available all across the globe',
    text:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`,
    image:"url('images/desktop-image-hero-2.jpg')"
},
{
    title:'Manufactured with the best materials',
    text:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
    image:"url('images/desktop-image-hero-3.jpg')"
},
]
/*------ Event Listener ------*/
let i = 0
const slideNav= $(".slide-nav")
const slideNavItem1 =$(".slide-nav li:nth-child(1)")
const slideNavItem2 =$(".slide-nav li:nth-child(2)")
const slideNavItem3 =$(".slide-nav li:nth-child(3)")


$(document).ready(function(){
// Navigation bar
$('.nav-hamburger').click(()=>{
    $(".nav").css('top','0px')
    $(".overlay").addClass("active")
})
$('.nav-close').click(()=>{
    $(".nav").css('top','-160px')
    $(".overlay").removeClass("active")
})

// Image-trigger
$(".slide-image").css("background-image",`${slides[i].image}`)

$('.arrow-left').click(()=>{
    if(i>0){
        i--
        imageSlide(i)
        checkSlideState(i)
    }else if(i<=0){
        i = 2 
        imageSlide(i)
        checkSlideState(i)
    }
})

$('.arrow-right').click(()=>{
    if(i<2){
        i++
        imageSlide(i)
        checkSlideState(i)
    }else if(i>=2){
        i =0
        imageSlide(i)
        checkSlideState(i)
    }
})

// Adding background color for nav-hamburger
$("body").scroll( function(){
    const scrollDistance = $("body").scrollTop();
    const wheel = $(window).off('wheel')
    if(scrollDistance>200){
        $(".nav-hamburger").css("background-color","#5e7d33b8")

    }else{
        $(".nav-hamburger").css("background-color","transparent")
    }
    })
})


/*------ Functions------*/
function imageSlide(i){
    $(".slide-image").css("background-image",`${slides[i].image}`)
    $(".slide-title").html(`${slides[i].title}`)
    $(".slide-text").html(`${slides[i].text}`)
}

function checkSlideState(i){
    if(i+1 == 1){
        slideNavItem1.addClass("selected")
        slideNavItem2.removeClass("selected")
        slideNavItem3.removeClass("selected")
    }else if(i+1 == 2){
        slideNavItem2.addClass("selected")
        slideNavItem1.removeClass("selected")
        slideNavItem3.removeClass("selected")
    }else{
        slideNavItem3.addClass("selected")
        slideNavItem2.removeClass("selected")
        slideNavItem1.removeClass("selected")
    }
}

