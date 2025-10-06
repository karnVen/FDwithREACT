// Prepared by:
// Name: Karan Singh
// RId: R52376

//you can also write here, document.body because body is already present inside the body.
document.addEventListener('click',(event)=>{
    const circle = document.createElement('div');
    circle.className = "circle";
    circle.textContent = "Hi";
    //getting the position of the event
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;
    const color = [
        '#AEC6CF', '#FFDDA8', '#E6E6FA', '#FFFACD', '#F5DEB3',
        '#0A8FD8', '#F08080', '#00E6E6', '#FFD1DC', '#FFB6C1',
        '#E0FFFF', '#FADADD', '#E3F9FD', '#FBE4E8', '#D5E8D4',
        '#F7CAC9', '#92A8D1', '#8B8B95', '#C2DFFF', '#DFFBCE',
        '#F49F03', '#00D7ED', '#F8F5DC', '#FFFEFE', '#FFE4B4',
        '#FFFCB3', '#BFD888', '#FDFD96', '#C6E2FF', '#FFDEAD',
        '#07FFFF'
    ];
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000)
});