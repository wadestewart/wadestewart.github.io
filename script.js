let container = $('#container')
let button = $('.button')
let hamburger = $('.hamburger')
let sidenav = $('#mySidenav')
let close = $('.closebtn')

$(document).ready(function(){
    updatePinPosition()
})

$(window).resize(function(){
    updatePinPosition()
})

// This is keep the button pinned to the surge protector
// https://stackoverflow.com/questions/30996097/divs-placed-relative-to-image-on-window-resize-almost-works
function updatePinPosition() {
    if ($(window).width()/$(window).height() >= (2600/1450)) {
        container.css({
            'height': '100%',
            'width': $(window).height()*(2600/1450)+'px',
            'margin-left': -container.width()/2+'px',
            'left': '50%',
            'top': '0',
            'margin-top': '0'
        })
    } else {
        container.css({
            'height': $(window).width()*(1450/2600)+'px',
            'width': '100%',
            'margin-left': '0',
            'left': '0',
            'top': '50%',
            'margin-top': container.height()/2+'px'
        })
    }
}

// function resizeDiv() {

// }

hamburger.on('click', function() {
    sidenav.css({ 'width': '100%' })
})

sidenav.on('click', function () {
    sidenav.css({ 'width': '0'})
})

let button = $('.button')

button.on('click', function() {
    container.toggleClass('night day')
})
