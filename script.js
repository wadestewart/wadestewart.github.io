const flashcards = $('.flash-front')
const flashHover = $('.flash-hover')
const bank = $('.bank-front')
const bankHover = $('.card-hover')
const notflix = $('.notflix-front')
const notflixHover = $('.notflix-hover')

$(function() {
    flashHover.hide()
    bankHover.hide()
    notflixHover.hide()
})

flashcards.hover(function() {
    flashHover.show()
}, function() {
    flashHover.hide()
})

bank.hover(function() {
    bankHover.show()
}, function() {
    console.log('out')
})

notflix.hover(function() {
    console.log('in')
    notflixHover.show()
}, function() {
    console.log('out')
    notflixHover.hide()
})



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

// This scroll found here: https://stackoverflow.com/questions/15158937/jquery-jump-or-scroll-to-certain-position-div-or-target-on-the-page-from-button

$('.nav-scroll').on('click', function(e) {
    e.preventDefault()
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000)
})
