
let cont = document.querySelector(".cont")
let inp = document.querySelector(".inp")
let cars = document.querySelector(".cars")
let btn = document.querySelector(".btn")
let inp2 = document.querySelector(".inp2")
let inp3 = document.querySelector(".inp3")
let inp4 = document.querySelector(".inp4")
let sel1 = document.querySelector(".sel1")
let btn1 = document.querySelector(".btn1")
let count = document.querySelector(".count")
let favnaxva = document.querySelector(".favnaxva")

favnaxva.addEventListener("click", function(){
    window.location.href = "./fav.html"
})

let type = []



let auth = false
if(localStorage.getItem("token")){
    auth = true
}

let logBtn = document.querySelector(".my-anc-1")

if(auth){
    logBtn.innerHTML= `<i class="fa-solid fa-door-open"></i> გასვლა`

}


// https://rentcar.stepprojects.ge/api/Car/filter?capacity=1&startYear=2000&endYear=2025&city=%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98&pageIndex=1&pageSize=10
//https://rentcar.stepprojects.ge/swagger/index.html




fetch("https://rentcar.stepprojects.ge/api/Car")
.then(pars => pars.json())
.then(pars => {
    console.log(pars)
    type = [...pars]
})
.catch(er => console.log(er))


setTimeout(function(){
    type.forEach(el => {
        if(el.capacity != 0){
            sel1.innerHTML  += `<option value="">${el.capacity}</option>`
        }  
    })
}, 500)




fetch("https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=28")
.then(cars => cars.json())
.then(cars => rander(cars.data))
.catch(er => console.log(er))





function rander(arr){
    cont.innerHTML = ""
    arr.forEach(el => {
        if(el.imageUrl1 != null || el.imageUrl2 != null || el.imageUrl3 != null || el.brand != null){

            let carBox = document.createElement("div")
            carBox.innerHTML = `
            <div  class="card">
                <img src="${el.imageUrl1}" alt="">
                <div class="card-body">
                <p class="ctyblar" >${el.city}</p>
                <p>${el.year} - ${el.brand}</p>
                <h4>${el.price} ₾ / 1 დღე - ${el.transmission}</h4>  
                </div>
            </div>
            `
            carBox.className = "carbox"
            let heart = document.createElement("div")
            heart.className = "heart"
            heart.innerHTML = `<i class="fa-regular fa-heart hert"></i>`



            carBox.appendChild(heart)
            cont.appendChild(carBox)

        
            
            heart.addEventListener("click", function(){

                heart.innerHTML = `<i class="fa-solid fa-heart he"></i>`

            })


        }  
    })

    console.log(arr)
}




btn.addEventListener("click", function(){
    //     https://rentcar.stepprojects.ge/api/Car/filter?capacity=4&startYear=2000&endYear=2025&pageIndex=1&pageSize=10
    fetch(`https://rentcar.stepprojects.ge/api/Car/filter?capacity=${sel1.value}&startYear=${inp2.value}&endYear=${inp3.value}&city=${inp4.value}&pageIndex=1&pageSize=10`)
    .then(resp => resp.json())
    .then(resp => rander(resp.data))
    .catch(er => console.log(er))
})


btn1.addEventListener("click", function(){
    sel1.value = ""
    inp2.value = ""
    inp3.value = ""
    inp4.value = ""
    fetch("https://rentcar.stepprojects.ge/api/Car/paginated?pageIndex=1&pageSize=20")
    .then(cars => cars.json())
    .then(cars => rander(cars.data))
    .catch(er => console.log(er))
})




// https://rentcar.stepprojects.ge/api/Users/480283590/favorite-cars



// wondrous-taffy-e8304e.netlify.app