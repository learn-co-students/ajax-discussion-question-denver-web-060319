const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  button = document.querySelector(".btn.btn-primary")
  
  button.addEventListener("click", getData)

  function getData(){
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(json => appendData(json))
  }

  function appendData(userInfo){
    const personsArray = userInfo.results
    const personObject = personsArray[0]

    const profilePicture = personObject.picture.medium
    const firstName = personObject.name.first
    const lastName = personObject.name.last
    const fullName = `${firstName} ${lastName}`
    const email = personObject.email
    const street = personObject.location.street
    const city = personObject.location.city
    const state = personObject.location.state
    const postCode = personObject.location.postcode
    const phone = personObject.phone
    const cell = personObject.cell
    const dateOfBirth = personObject.dob.date

    const profilePictureTag = document.querySelector("#profile_picture")
    const fullNameTag = document.querySelector("#fullname")
    const emailTag = document.querySelector("#email")
    const streetTag = document.querySelector("#street")
    const cityTag = document.querySelector("#city")
    const stateTag = document.querySelector("#state")
    const postCodeTag = document.querySelector("#postcode")
    const phoneTag = document.querySelector("#phone")
    const cellTag = document.querySelector("#cell")
    const dateOfBirthTag = document.querySelector("#date_of_birth")
    
    profilePictureTag.src = profilePicture
    fullNameTag.innerText = fullName
    emailTag.innerText = email
    streetTag.innerText = street
    cityTag.innerText = city
    stateTag.innerText = state
    postCodeTag.innerText = postCode
    phoneTag.innerText = phone
    cellTag.innerText = cell
    dateOfBirthTag.innerText = dateOfBirth
  }
});
