
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
                <button onclick="getSinglePhone('${phone.slug}')"  class="btn btn-outline-secondary" type="button" id="button-addon2">See Details</button>
                </div>
              </div>
            </div>
        `;
        display.appendChild(div);
    })
}

//get phone by id
const getSinglePhone = singlePhone=>{
    const url = `https://openapi.programming-hero.com/api/phone/${singlePhone}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>singlePhoneDetails(data.data));

}

//display single phone details
const singlePhoneDetails = singleDetails=>{
    const section = document.getElementById("singledisplay");
    //clear previous data
    section.innerHTML="";
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`
                <img id="image" src="${singleDetails.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${singleDetails.name}</h4>
                      <p class="card-text">${singleDetails.releaseDate?singleDetails.releaseDate:"Release date not found"}</p>
                      <h5 class="card-title features">Main Features:</h5>
                      <p class="card-text"><b>ChipSet : </b> ${singleDetails.mainFeatures.chipSet?singleDetails.mainFeatures.chipSet:""}</p>
                      <p class="card-text"><b>Display Size :</b> ${singleDetails.mainFeatures.displaySize?singleDetails.mainFeatures.displaySize:""}</p>
                      <p class="card-text"><b>Memory :</b> ${singleDetails.mainFeatures.memory?singleDetails.mainFeatures.memory:""}</p>
                      <p class="card-text"><b>Sensors :</b> ${singleDetails.mainFeatures.sensors?singleDetails.mainFeatures.sensors:""}</p>
                      <p class="card-text"><b>Storage :</b> ${singleDetails.mainFeatures.storage?singleDetails.mainFeatures.storage:""}</p>
                      <h5 class="card-title features">Others:</h5>
                      <p class="card-text"><b>Bluetooth :</b> ${singleDetails.others.Bluetooth?singleDetails.others.Bluetooth:""}</p>
                      <p class="card-text"><b>GPS :</b> ${singleDetails.others.GPS?singleDetails.others.GPS:""}</p>
                      <p class="card-text"><b>NFC :</b> ${singleDetails.others.NFC?singleDetails.others.NFC:""}</p>
                      <p class="card-text"><b>Radio :</b> ${singleDetails.others.Radio?singleDetails.others.Radio:""}</p>
                      <p class="card-text"><b>USB :</b> ${singleDetails.others.USB?singleDetails.others.USB:""}</p>
                      <p class="card-text"><b>WLAN :</b> ${singleDetails.others.WLAN?singleDetails.others.WLAN:""}</p>
                      


                      
                    </div>
    `;
    section.appendChild(div);

}