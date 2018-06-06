const background = document.querySelector('.container')
const people = document.querySelector('.people')
const link = document.querySelector('.link')

let counter = 0

setInterval(function changeBack() {
    let colors = ['#fe0000', '#fffb96', '#6cff5f', '#011efe', '#fe00f6']
    let ranColor = colors[Math.floor(Math.random()*colors.length)]

    background.style.background = ranColor
}, 100)


function showPics(peopleData) {
    // console.log(counter)
    const anchorNode = document.createElement('a')
    const imageNode = document.createElement('img')

    people.innerHTML = ''

    setInterval(function() {
        // console.log(counter)
        
        const personImg = peopleData[counter].img
        const personUrl = peopleData[counter].url
        counter += 1
        
        // console.log(personImg)
        // console.log(personUrl)

        anchorNode.classList.add('link')
        imageNode.classList.add('img')

        anchorNode.setAttribute('href', personUrl)
        anchorNode.setAttribute('target', '_blank')
        imageNode.setAttribute('src', personImg)

        anchorNode.appendChild(imageNode)
        people.appendChild(anchorNode)

        if (counter >= peopleData.length) {
            counter = 0
        }        
    }, 10000)
    
    anchorNode.removeChild(imageNode)
    people.removeChild(anchorNode)

}

fetch('http://localhost:4001/home')
    .then(response => {
        return response.json()
            .then(function(data) {
                // console.log(data[0].img)
                showPics(data)
            })
    })
    .catch(function(err) {
        console.log('Fetch error :-S', err)
    })
