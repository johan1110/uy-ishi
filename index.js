let elForm = document.querySelector(".form")
let fristName = document.querySelector("#first__name")
let lastName = document.querySelector("#last__name")
let email = document.querySelector("#email")
let city = document.querySelector("#city")


elForm.addEventListener("submit", e =>{
    e.preventDefault()

    

    let result = "Uning ismi: " + fristName.value + "Familiya: " + lastName.value + "Email: " + email.value + "Uning viloyati: " + city.value

    console.log(result);
})

