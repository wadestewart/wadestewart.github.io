const background = document.querySelector('.container')
const people = document.querySelector('.people')

// setInterval(function changeBack() {
//     let colors = ['#fe0000', '#fffb96', '#6cff5f', '#011efe', '#fe00f6']
//     let ranColor = colors[Math.floor(Math.random()*colors.length)]

//     background.style.background = ranColor
// }, 100)


function showPics(peopleData) {
    people.innerHTML = ''
    peopleData.forEach(person => {
        const imageNode = document.createElement('img')
        imageNode.setAttribute('src', person.img)
        imageNode.classList.add('person')

        people.appendChild(imageNode)
    })
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

// setInterval(, 10000)

