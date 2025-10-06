// Prepared by:
// Name: Karan Singh
// RId: R52376

const root = document.getElementById('root');

root.addEventListener('click',(event)=>{
    if(event.target.tagName === 'BUTTON'){
        document.body.style.backgroundColor = event.target.id;
    }
})