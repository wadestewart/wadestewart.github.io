const people = document.querySelector('.people')
const name = document.querySelector('.name')
const imageNode = document.createElement('img')
const anchorNode = document.createElement('a')

let counter = 0

people.innerHTML = ''

setInterval(function() {
    let colors = ['#fe0000', '#fffb96', '#6cff5f', '#011efe', '#fe00f6', '#000000']
    let ranColor = colors[Math.floor(Math.random()*colors.length)]
    
    name.style.color = ranColor

}, 100)

function getPics(peopleData) {
    const personImg = peopleData[counter].img

    imageNode.classList.add('img')
    imageNode.setAttribute('src', personImg)

    people.appendChild(anchorNode)
}

function getLinks(peopleData) {
    const personUrl = peopleData[counter].url

    anchorNode.classList.add('link')
    anchorNode.setAttribute('href', personUrl)
    anchorNode.setAttribute('target', '_blank')

    anchorNode.appendChild(imageNode)
}

function getName(peopleData) {
    const personName = peopleData[counter].name

    name.innerHTML = personName
}

function updatePerson(peopleData) {
    
    setInterval(function() {
        // console.log(counter)
        anchorNode.removeChild(imageNode)
        people.removeChild(anchorNode)
        
        getPics(peopleData)
        getLinks(peopleData)
        getName(peopleData)

        counter += 1
        
        if (counter >= peopleData.length) {
            counter = 0
        }
        
    }, 2000)
}

fetch('http://localhost:4001/home')
    .then(response => {
        return response.json()
            .then(function(data) {
                // console.log(data[0].img)
                getPics(data)
                getLinks(data)
                getName(data)
                updatePerson(data)
            })
    })
    .catch(function(err) {
        console.log('Fetch error :-S', err)
    })


// function showPics(peopleData) {
//     // console.log(counter)
//     const anchorNode = document.createElement('a')
//     const imageNode = document.createElement('img')
//     const nameNode = document.createElement('h1')

//     people.innerHTML = ''

//     setInterval(function() {
//         // console.log(counter)
        
//         const personImg = peopleData[counter].img
//         const personUrl = peopleData[counter].url
//         const personName = peopleData[counter].name
//         counter += 1
        
//         // console.log(personImg)
//         // console.log(personUrl)

//         anchorNode.classList.add('link')
//         imageNode.classList.add('img')
//         nameNode.classList.add('name')

//         anchorNode.setAttribute('href', personUrl)
//         anchorNode.setAttribute('target', '_blank')
//         imageNode.setAttribute('src', personImg)

//         anchorNode.appendChild(imageNode)
//         people.appendChild(anchorNode)
//         name.innerHTML = personName

//         if (counter >= peopleData.length) {
//             counter = 0
//         }        
//     }, 10000)
    
//     anchorNode.removeChild(imageNode)
//     people.removeChild(anchorNode)

// }

