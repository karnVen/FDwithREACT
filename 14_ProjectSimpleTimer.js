// Prepared by:
// Name: Karan Singh
// RId: R52376
//timer clock project

function fun(){
    const timer = document.getElementById('rootid');
    console.log(typeof(timer));
    const nowDatetime = new Date();
    const nowOnlyTime = nowDatetime.toLocaleTimeString();
    timer.innerHTML = nowOnlyTime;
    timer.style.fontSize = "200px";
    timer.style.display = "flex"; // Corrected from "flax"
    timer.style.height = "100vh";
    timer.style.justifyContent = "center";
    timer.style.alignItems = "center";
}

setInterval(fun, 1000);