// Prepared by:
// Name: Karan Singh
// RId: R52376

const button=document.querySelector('#btn');

button.addEventListener('click',()=>{
    const input1=document.getElementById('nm1');
    const num1=parseInt(input1.value,10);

    const input2=document.getElementById('nm2');
    const num2=parseInt(input2.value,10);

    const sum=num1+num2;

    const result=document.getElementById('root3');
    result.innerHTML= 'Result: ' + sum;
});