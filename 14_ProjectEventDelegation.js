// Prepared by:
// Name: Karan Singh
// RId: R52376

const root = document.getElementById('root');

root.addEventListener('click',(event)=>{
    console.log(event.target);
    document.body.style.backgroundColor = event.target.id;
})