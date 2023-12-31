//Code for Selecting Musicians App


document.addEventListener("DOMContentLoaded",(e)=> alert("Select your band!"))

function manageMusicianInput(e){
    e.preventDefault()
    alert("You're musician is being added!")
    const musicianInputInfo=document.querySelectorAll("input")
    const musicianObj = {
        name: musicianInputInfo[0].value,
        image: musicianInputInfo[1].value,
        instrument: musicianInputInfo[2].value,
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
    .then(musicianData => renderMusician(musicianData))
    .catch(error=>{
        console.log(error)
        alert("Unable to add your desired Musician")
    })
} 

function renderMusician(musicianObj){
    const musicianContainer = document.querySelector("#selection-of-musicians")
    let newMusician = document.createElement("div")
    newMusician.className = "musician"
    newMusician.innerHTML=`
        <h2> ${musicianObj.name} </h2>
        <img src= "${musicianObj.image}" class = "musician-pic"/>
        <h3> Instrument : ${musicianObj.instrument} </h3>
        <button type = "button"  class="select-btn" > x </button> 
    `
    
    newMusician.querySelector(".select-btn").addEventListener("click",selectMusician)
    
    musicianContainer.appendChild(newMusician)
}

function selectMusician(e){
    const currentMusicians = document.querySelectorAll(".musician")
    const selectedMusician = e.target.parentNode
    const bandContainer = document.querySelector("#selected-band")
    let newMember = document.createElement("div")
    newMember = selectedMusician
    bandContainer.appendChild(selectedMusician)
}

function renderAllMusicians(){
    fetch("http://localhost:3000/musicians")
    .then(resp=>resp.json())
    .then(musicians=>{
        musicians.forEach(musician=>renderMusician(musician))
    })
    .catch(error=>
        {
            console.log(error)
            alert("Could not load musicians!")
        })
}


const inputBtns = document.querySelector(".add-musician-form")
inputBtns.addEventListener("submit", manageMusicianInput)


renderAllMusicians()