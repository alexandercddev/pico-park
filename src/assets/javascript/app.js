const picoParks = document.querySelectorAll('.pico-park');
const container = document.querySelector('.pico-parks');
const moveAll = [
    'row-reverse',
    'row',
    'column-reverse',
    'column', 
]; 
let keys = {
    space: 0,
    leftTorigth: 0
}

document.addEventListener('keydown', ({code, key}) => {  
    switch(code){
        case 'ArrowUp': 
            break;
        case 'ArrowDown':
            break;
        case 'ArrowLeft':
            keys = {...keys, leftTorigth: keys.leftTorigth - 1 }
            picoParks.forEach((picoPark, index) => {  
                picoPark.style.transform = `translateX(${keys.leftTorigth}em)`;
            });
            break;
        case 'ArrowRight':
            keys = {...keys, leftTorigth: keys.leftTorigth + 1 }
            picoParks.forEach((picoPark, index) => {  
                picoPark.style.transform = `translateX(${keys.leftTorigth}em)`;
            });
            break;
        case 'Space': 
        case 'Enter': 
            picoParks.forEach((picoPark, index) => {  
                picoPark.style.transform = `translateY(-10em) translateX(${keys.leftTorigth}em)`;
                setTimeout(() => { 
                    picoPark.style.transform = `translateY(0em) translateX(${keys.leftTorigth}em)`;
                }, 300);
            });
            break;
        default:
    }    
}, false); 

picoParks.forEach((picoPark, index) => { 
    picoPark.addEventListener('click', () => {
        container.style.flexDirection = moveAll[index]
    });
});
 