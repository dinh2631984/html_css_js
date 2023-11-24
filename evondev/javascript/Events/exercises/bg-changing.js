const bg = document.querySelector('.bg-change');

bg.addEventListener('mouseover', () => {
    // bg.setAttribute('style', `background-color: rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`);
    bg.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    // alert('over');
})

bg.addEventListener('mouseout', () => {
    bg.setAttribute('style', `background-color: #ccc`);
    // alert('over');
    // bg.style.backgroundColor = "#ccc";
})