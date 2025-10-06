// Prepared by:
// Name: Karan Singh
// RId: R52376

document.querySelector('button').addEventListener('click',()=>{
    const inputLocation = document.getElementById('location').value;

    // Note: For a real application, keep your API key secure on a server!
const promiseOb = fetch(`https://api.weatherapi.com/v1/current.json?
key=000a3974ef8a49018f940210251809 &q=${inputLocation}&aqi=yes`)
    promiseOb
    .then(response=>response.json())
    .then(data=> updateTemp(data)); //function call
})

function updateTemp(dataValue){
    const element = document.getElementById('weatherInfo');
    element.innerHTML = `Today's Temperature: ${dataValue.current.temp_c}°C`;
}