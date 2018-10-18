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

// This slider found here http://jsfiddle.net/uctr94ve/

$(function() {
    const width = 800
    const animationSpeed = 1000
    const pause = 7000
    let currentSlide =1
    const $slider = $('.slider')
    const $slideContainer = $('.q-a-slides', $slider)
    const $slides = $('.slide', $slider)

    function startSlider() {
        interval = setInterval(slide, pause)
    }

    function slide() {
        $slideContainer.animate({
            'margin-left': '-=' + width
        }, animationSpeed, function() {
            if(++currentSlide === $slides.length) {
                currentSlide = 1
                $slideContainer.css('margin-left', 0)
            }
        })
    }

    function pauseSlider() {
        clearInterval(interval)
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider)
        .on('click', slide)

    startSlider()
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

const contact = $('.contact-title')
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
