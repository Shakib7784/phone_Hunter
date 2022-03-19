
// getting phone from input field then fetch phones
const getphone = ()=>{
    const getphones = document.getElementById("input");
    const getphonesvalue = getphones.value;
    // clear previous data
    getphones.value="";
    // fetch data
    const url = ` https://openapi.programming-hero.com/api/phones?search=${getphonesvalue}`;
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>displayphones(data.data));
}

//display phones
const displayphones = phones=>{
    const display = document.getElementById("display");
    // clear prvious data
    display.innerHTML="";
    phones.forEach(phone=>{
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML=`
        <div class="col">
              <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.brand}</h5>
                  <p class="card-text">${phone.phone_name}</p>
                  <button  class="btn btn-outline-secondary" type="button" id="button-addon2">See Details</button>
                </div>
              </div>
            </div>
        `;
        display.appendChild(div);
    })


}