let hamburger = $('.hamburger')
let sidenav = $('#mySidenav')
let close = $('.closebtn')


hamburger.on('click', function() {
    sidenav.css({ 'width': '100%' })
})

sidenav.on('click', function () {
    sidenav.css({ 'width': '0'})
})

