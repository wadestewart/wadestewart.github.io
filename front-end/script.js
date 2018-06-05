const background = document.querySelector('.container')

setInterval(function changeBack() {
    let colors = ['#fe0000', '#fffb96', '#6cff5f', '#011efe', '#fe00f6']
    let ranColor = colors[Math.floor(Math.random()*colors.length)]

    background.style.background = ranColor
}, 100)


