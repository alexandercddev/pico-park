const picoParks = document.querySelectorAll('.pico-park');
const container = document.querySelector('.pico-parks');
const moveAll = [
    'row-reverse',
    'row',
    'column-reverse',
    'column', 
];
picoParks.forEach((picoPark, index) => { 
    picoPark.addEventListener('click', () => {
        container.style.flexDirection = moveAll[index]
    });
});