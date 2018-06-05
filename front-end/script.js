const background = document.querySelector('.container')
const img = document.querySelector('.img')

// setInterval(function changeBack() {
//     let colors = ['#fe0000', '#fffb96', '#6cff5f', '#011efe', '#fe00f6']
//     let ranColor = colors[Math.floor(Math.random()*colors.length)]

//     background.style.background = ranColor
// }, 100)


function showPics () {

    let people = img.innerHTML = ''
    
    setInterval(fetch('http://localhost:4001/home')
    .then(function(response) {
        return response.json()
            .then(function(data) {
                // console.log(data)
                data.forEach(function(person) {
                    
                })
            })
    })
    .catch(function(err) {
        console.log('Fetch error :-S', err)
    }), 10000)

}

// showPics()
