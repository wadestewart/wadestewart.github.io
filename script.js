// This scroll code (and amazing explanation) is from https://codepen.io/Javarome/post/full-page-sliding

function ScrollHandler(pageId) {
    let page = $('#' + pageId)
    let pageStart = page.offset().top
    let pageJump = false
    
    function scrollToPage() {
        pageJump = true
        
        $('html, body').animate({
            scrollTop: pageStart
        }, {
            duration: 1000,
            complete: function() {
                pageJump = false
            }
        })
    }
    
    window.addEventListener('wheel', function(e) {
        let viewStart = $(window).scrollTop()
        
        if (!pageJump) {
            let pageHeight = page.height()
            let pageStopPortion = pageHeight / 2
            let viewHeight = $(window).height()
            
            let viewEnd = viewStart + viewHeight
            let pageStartPart = viewEnd - pageStart
            let pageEndPart = (pageStart + pageHeight) - viewStart
            
            let canJumpDown = pageStartPart >= 0
            let stopJumpDown = pageStartPart > pageStopPortion
            
            let canJumpUp = pageEndPart >= 0
            let stopJumpUp = pageEndPart > pageStopPortion
            
            let scrollingForward = e.deltaY > 0
            
            if (
                (scrollingForward && canJumpDown && !stopJumpDown)
                || (!scrollingForward && canJumpUp && !stopJumpUp)
            ) {
                e.preventDefault()
                scrollToPage()
            } 
        } else {
            e.preventDefault()
        }
    })
}

new ScrollHandler('landing-page')
new ScrollHandler('about')
new ScrollHandler('projects')
new ScrollHandler('contact')

// This scroll found here: https://stackoverflow.com/questions/15158937/jquery-jump-or-scroll-to-certain-position-div-or-target-on-the-page-from-button

$('.nav-scroll').on('click', function(e) {
    e.preventDefault()
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000)
})

// This slider mixture of these 2: http://jsfiddle.net/uctr94ve/ https://codepen.io/derwinsadiwa/pen/emPgwQ?editors=0100

const width = 100
const animationSpeed = 1000
let slideIndex = 1

const $slideContainer = $('.slides')
const $slides = $('.slide')
    
$slides.each(function(index) {
    $(this).css('left',(index*100)+'%')
})

// function slide() {
//     $slideContainer.animate({
//         'left': '-='+(width+'%')
//     }, animationSpeed, function() {
//         if (++slideIndex === $slides.length) {
//             slideIndex = 1
//             $slideContainer.css('left', 0)
//         }
//     })
// }

// This functionality found here: https://codepen.io/theabuitendyk/pen/yJbpBw?editors=0010

const $maxDotIndex = $('.dot:last-child').attr('dot-index')

$('.dot').click(function(){
    const currentDot = $('.activeDot')
    const currentDotIndex = currentDot.attr('dot-index')
    const targetDot = $(this)
    const targetDotIndex = targetDot.attr('dot-index')

    if (currentDotIndex == targetDotIndex) {
        return
    } else {
        currentDot.removeClass('activeDot')
        targetDot.addClass('activeDot')
        let margin = ((targetDotIndex - 1) * -100) + '%'
        $slideContainer.animate({
            'left': margin
        }, animationSpeed)
    }
})

$('.next').click(function() {
    const currentDot = $('.activeDot')
    const currentDotIndex = currentDot.attr('dot-index')

    if (currentDotIndex == $maxDotIndex) {
        return
    } else {
        let targetDotIndex = (parseInt(currentDotIndex) + 1)
        let dotSelector = ".dot[dot-index='"+ targetDotIndex + "']"
        let targetDot = $(dotSelector)
        currentDot.removeClass('activeDot')
        targetDot.addClass('activeDot')
    }

    $slideContainer.animate({
        'left': '-='+(width+'%')
    }, animationSpeed, function() {
        if (++slideIndex === $slides.length) {
            slideIndex = 1
            $slideContainer.css('left', 0)
        }
    })
})

$('.prev').click(function() {
    const currentDot = $('.activeDot')
    const currentDotIndex = currentDot.attr('dot-index')

    if (currentDotIndex == 1) {
        return
    } else {
        let targetDotIndex = (parseInt(currentDotIndex) - 1)
        let dotSelector = ".dot[dot-index='"+ targetDotIndex + "']"
        let targetDot = $(dotSelector)
        currentDot.removeClass('activeDot')
        targetDot.addClass('activeDot')
    }

    $slideContainer.animate({
        'left': '+='+(width+'%')
    }, animationSpeed, function() {
        if (--slideIndex === 1) {
            slideIndex = -1
            $slideContainer.css('left', 0)
        }
    })
})

const flashcards = $('.flashcards')
const flashHover = $('.flash-hover')
const flashTitle = $('.flash-title')
const flashStack = $('.flash-stack')
const bank = $('.bank')
const bankHover = $('.bank-hover')
const bankTitle = $('.bank-title')
const bankStack = $('.bank-stack')
const notflix = $('.notflix')
const notflixHover = $('.notflix-hover')
const notflixTitle = $('.notflix-title')
const notflixStack = $('.notflix-stack')

$(function() {
    flashHover.hide()
    bankHover.hide()
    notflixHover.hide()
})

flashcards.hover(function() {
    flashHover.show()
    flashcards.css('border', '1px solid #000')
    flashTitle.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
    flashStack.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
}, function() {
    flashHover.hide()
    flashcards.css('border', 'none')
    flashTitle.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
    flashStack.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
})

bank.hover(function() {
    bankHover.show()
    bank.css('border', '1px solid #000')
    bankTitle.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
    bankStack.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
}, function() {
    bankHover.hide()
    bank.css('border', 'none')
    bankTitle.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
    bankStack.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
})

notflix.hover(function() {
    notflixHover.show()
    notflix.css('border', '1px solid #000')
    notflixTitle.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
    notflixStack.css({"-webkit-transform": "scale(1)", "transform": "scale(1)"})
}, function() {
    notflixHover.hide()
    notflix.css('border', 'none')
    notflixTitle.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
    notflixStack.css({"-webkit-transform": "scale(0)", "transform": "scale(0)"})
})

const contact = $('.contact-front')
const contactBack = $('.contact-back')
const flipper = $('.flipper')
const linkedin = $('.contact-linkedin')
const resume = $('.contact-resume')
const email = $('.contact-email')

$('.contact-github').hover(function() {
    contactBack.html('GITHUB')
    flipper.css({'transform': 'rotateX(-180deg)', '-webkit-transform': 'rotateX(-180deg)'})
}, function() {
    flipper.css({'transform': 'rotateX(0deg)', '-webkit-transform': 'rotateX(0deg)'})
    contactBack.html('GITHUB')
})

linkedin.hover(function() {
    contactBack.html('LINKEDIN')
    flipper.css({'transform': 'rotateX(-180deg)', '-webkit-transform': 'rotateX(-180deg)'})
}, function() {
    flipper.css({'transform': 'rotateX(0deg)', '-webkit-transform': 'rotateX(0deg)'})
    contactBack.html('LINKEDIN')
})

resume.hover(function() {
    contactBack.html('RESUME')
    flipper.css({'transform': 'rotateX(-180deg)', '-webkit-transform': 'rotateX(-180deg)'})
}, function() {
    flipper.css({'transform': 'rotateX(0deg)', '-webkit-transform': 'rotateX(0deg)'})
    contactBack.html('RESUME')
})

email.hover(function() {
    contactBack.html('EMAIL')
    flipper.css({'transform': 'rotateX(-180deg)', '-webkit-transform': 'rotateX(-180deg)'})
}, function() {
    flipper.css({'transform': 'rotateX(0deg)', '-webkit-transform': 'rotateX(0deg)'})
    contactBack.html('EMAIL')
})
