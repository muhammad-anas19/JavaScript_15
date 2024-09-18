// function changeText(event) {
//     console.log(event); //ab jese hi event click hoga tou console me eventListener ko wo event miljaiga
//   let fpara = document.querySelector("#fpara");
//   fpara.textContent = "Hello Fraaandz";
// }
// let fpara = document.querySelector("#fpara");
// fpara.addEventListener("click", changeText);


// Changing default behavior of element


// function behaviorChange() {
//     let anchorElement = document.querySelector("#fanchor");
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bhai";
// }
// let anchorElement = document.querySelector("#fanchor");
// anchorElement.addEventListener('click', behaviorChange);


// let paras = document.querySelectorAll('p');
function alertPara() {
    if(event.target.nodeName === 'SPAN') {
        alert("You have clicked on: " + event.target.textContent);
    }   
}

// for(let i =0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

//let mydiv = document.querySelector("#wrapper");
document.addEventListener('click', alertPara);
