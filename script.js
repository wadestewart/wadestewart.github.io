const flashBack = $('.flashcards-backface')

$(function() {
    flashBack.hide()
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

$('.nav-scroll').on('click', function(e) {
    e.preventDefault()
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000)
})

const projects = $('.nav-projects')

const flashcards = $('.flashcards')

flashcards.hover(function() {
    flashBack.show().css('opacity', '1')
}, function() {
    flashBack.hide().css('opacity', '0')
})
