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
            duration: 1500,
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

// This scroll code (and amazing explanation) is from https://codepen.io/Javarome/post/full-page-sliding

// Scroll handler attached to each div, for modularity - instead of handling the scroll in one process
// function scrollHandler(pageId) {
//     let page = document.getElementById(pageId)
//     let pageStart = page.offsetTop
//     let pageJump = false
//     let viewStart 
//     let duration = 1500
//     let scrolled = document.getElementById('scroll')

//     function scrollToPage() {
//         pageJump = true

//         let startLocation = viewStart
//         let endLocation = pageStart
//         let distance = endLocation - startLocation

//         let runAnimation

//         let timeLapsed = 0
//         let percentage 
//         let position

//         // This is accelerating the scroll animation until halfway, then slowing down
//         let easing = function(progress) {
//             return progress < 0.5
//                 ? 4 * progress * progress * progress
//                 : (progress -1) * (2 * progress - 2) * (2 * progress - 2) + 1
//         }

//         function stopAnimationIfRequired(pos) {
//             if (pos == endLocation) {
//                 cancelAnimationFrame(runAnimation)
//                 setTimeout(function() {
//                     pageJump = false
//                 }, 500)
//             }
//         }

//         let animate = function() {
//             timeLapsed += 16
//             percentage = timeLapsed / duration
//             if (percentage > 1) {
//                 percentage = 1
//                 position = endLocation
//             } else {
//                 position = startLocation + distance * easing(percentage)
//             }
//             scrolled.scrollTop = position
//             runAnimation = requestAnimationFrame(animate)
//             stopAnimationIfRequired(position)
//             // console.log('position=' + scrolled.scrollTop + '(' + percentage + ')')
//         }
    
//         runAnimation = requestAnimationFrame(animate)
//     }

//     window.addEventListener('wheel', function(e) {
//         viewStart = scrolled.scrollTop
//         if (!pageJump) {
//             let pageHeight = page.scrollHeight
//             let pageStopPortion = pageHeight / 2
//             let viewHeight = window.innerHeight
    
//             let viewEnd = viewStart + viewHeight
//             let pageStartPart = viewEnd - pageStart
//             let pageEndPart = pageStart + pageHeight - viewStart
    
//             let canJumpDown = pageStartPart >= 0
//             let stopJumpDown = pageStartPart > pageStopPortion
    
//             let canJumpUp = pageEndPart >= 0
//             let stopJumpUp = pageEndPart > pageStopPortion
    
//             let scrollingForward = event.deltaY > 0
//             if (
//                 (scrollingForward && canJumpDown && !stopJumpDown)
//                 || (!scrollingForward && canJumpUp && !stopJumpUp)
//                 ) {
//                     e.preventDefault()
//                     scrollToPage()
//                 }
//                 false
//             } else {
//                 e.preventDefault()
//             }
//     })
// }

// new scrollHandler('landing-page')
// new scrollHandler('about')
// new scrollHandler('projects')


