// "phoneNumber": "599789789789",
// "password": "string",
// "email": "string",
// "firstName": "string",
// "lastName": "string",
// "role": "string"




// let btnSecond = document.querySelector(".btn-second")


let forSub = document.querySelector(".forSub")

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
    
    fetch('https://rentcar.stepprojects.ge/api/Users/register',
       {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
       })

       
       .then(resp => resp.json())
       .then(resp => {

        localStorage.setItem("phone", user.phonenumber)
        setTimeout(() => {
            window.location.href = "seclog.html"
        })
       })
       .catch(e => console.log(e))
}


// 480283590
// wdf123543
