// This scroll code (and amazing explanation) is from https://stackoverflow.com/questions/21450095/how-to-make-mouse-wheel-scroll-to-section-like-in-mediafire-com

$('section').height($(window).height)
$('section').first().addClass('active')

$(document).on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault()
    let active = $('section.active')
    let delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1

    if (delta < 0) {
        let next = active.next()
        console.log(next)

        if (next.length) {
            let timer = setTimeout(function() {
                $('html, body').animate({
                    scrollTop: next.offset().top
                }, 'slow')

            next.addClass('active')
                .siblings().removeClass('active')

            clearTimeout(timer)
            }, 800)
        }
    } 
    // else {
    //     prev = active.prev()

    //     if (prev.length) {

    //     }
    // }
})

