localStorage.removeItem("token")


let forSub = document.querySelector(".forSub")
let input4 = document.querySelector(".input4")
let input3 = document.querySelector(".input3")
input4.value = localStorage.getItem("phone")

forSub.addEventListener("submit", forsubmit)

function forsubmit(e){
    e.preventDefault()
    let user = {
        firstname: document.querySelector('input[name="firstname"]').value,
        lastname: document.querySelector('input[name="lastname"]').value,
        email: document.querySelector('input[name="email"]').value,
        phonenumber: document.querySelector('input[name="phonenumber"]').value,
        password: document.querySelector('input[name="password"]').value,
    }
    console.log(user)

    fetch('https://rentcar.stepprojects.ge/api/Users/login',
        {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })


        
        .then(resp => resp.json())
        .then(resp => {
         console.log(resp)  
           localStorage.setItem("token", resp.token)
           setTimeout(()=>{
             window.location.href = "index.html"
           }, 500)
        })
        .catch(er => console.log(er))
}