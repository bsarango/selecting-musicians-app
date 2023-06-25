//Code for Selecting Musicians App

//Add event listener to buttons for submit
const inputBtns = document.querySelector(".submit-btn")
inputBtns.addEventListener("submit", submitMusicianInput)

document.addEventListener("DOMContentLoaded",renderAllMusicians)

function manageMusicianInput(e){
    e.preventDefault()
    console.log(e.target.value)
    const musicianInputInfo=document.querySelectorAll(".input")
    const musicianObj = {
        name: musicianInputInfo[0],
        image: musicianInputInfo[1],
        instrument: musicianInputInfo[2],
    }
    addNewMusician(musicianObj)
}

function addNewMusician(musicianObj){
    fetch("http://localhost:3000/musicians",{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(musicianObj)
    })
    .then(resp => resp.json())
    .then(musicianData => console.log(musicianData)/*renderMusician(musicianData)*/)
} 

function renderMusician(musicianInfo){
    const musicianContainer = document.querySelector("#musician-container")
    let musician = document.createElement("div")
    musician.className("musician")
    musician.innerHTML=`
        <h2> ${musicianInfo.name} </h2>
        <img src= "${musicianInfo.img}">
        <h3> Instrument : ${musicianInfo.instrument} </h3>
        <button type = "button"  class="select-btn" > x </button> 
    `
    musician.querySelector(".select-btn").addEventListener("click",selectMusician)
}

function selectMusician(e){
    
}
function renderAllMusicians(){
    fetch("http://localhost:3000/musicians")
    .then(resp=>resp.json())
    .then(musicians=>{
        console.log(musicians)/*musicians.forEach(musician=>renderMusician(musician))*/
    })
}

//renderAllMusicians()