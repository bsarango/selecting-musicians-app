//Code for Selecting Musicians App

//Add event listener to buttons for submit
const inputBtns = document.querySelector(".submit-btn")
inputBtns.addEventListener("submit", submitMusicianInput)

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
    fetch(/*currentaplceHolderFor db.json*/,{
        method: 'POST',
        headers: {
            'Content-type: application/json'
        },
        body:JSON.stringify(musicianObj)
    })
    .then(resp => resp.json())
    .then(musicianData => renderMusician(musicianData))
} 

function renderMusician(musicianInfo){
    const musicianContainer = document.querySelector("#musician-container")
    let musician = document.createElement("div")
    musician.className("musician")
    musician.innerHTML=`
        <h2> 
    `
}