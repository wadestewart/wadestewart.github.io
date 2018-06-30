let pin = document.getElementsByClassName('pin')

// container.addEventListener('click', function(){
//     console.log('clicked')
// })

function updatePinPosition(){
    
    if (window.innerWidth/window.innerHeight >= 2600/1450) {
        setStyle('container', {
            'height': '100%',
            'width': container.innerHeight*(2600/1450)+'px',
            'margin-left': -container.innerWidth/2+'px',
            'margin-top': -container.innerHeight/2+'px'
        })
    } else {
        setStyle('container', {
            'height': container.innerWidth*(1450/2600)+'px',
            'width': '100%',
            'margin-left': 0,
            'left': 0,
            'top': '50%',
            'margin-top': -container.innerHeight/2+'px'
        })
    }
    
    function setStyle(objId, propertyObject){
        let elem = document.getElementById(objId)
        for(let property in propertyObject)
        elem.style[property] = propertyObject[property]
    }

    // console.log(container.style)
}

document.addEventListener('load', updatePinPosition())

window.addEventListener('load', updatePinPosition())

