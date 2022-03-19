
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
    .then(data=>console.log(data));

}