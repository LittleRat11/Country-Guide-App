const countryName = document.querySelector("#user-input");
const search = document.querySelector(".search-btn");
const resultCountry = document.querySelector("#result");
search.addEventListener("click", getCountry);
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getCountry();
    }
})
// *function getData
async function getCountry() {

    let country = countryName.value;
    let result = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    let data = await result.json();
    // console.log(data);
    check(country);
    countryName.value = "";
    console.log(data[0].name.common);
    console.log(data[0].capital[0]);
    console.log(data[0].region);
    console.log(data[0].subregion);
    console.log(data[0].population);
    console.log(data[0].flags.svg)
    console.log(data[0].area)
    console.log(Object.keys(data[0].currencies)[0]);
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(Object.values(data[0].languages).toString().split(",").join(","));
    resultCountry.innerHTML = `
    <img src="${data[0].flags.svg}" class="flag-img">
    <h2 class="flag-name">${data[0].name.common}</h2>
    <div class="data-collection">
        <div class="data-info">
            <h4>Capital : 
                <span class="capital">${data[0].capital[0]}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Continent : 
                <span>${data[0].region}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Subregion : 
                <span>${data[0].subregion}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Population : 
                <span>${data[0].population}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Area : 
                <span>${data[0].area}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Currency : 
                <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
            </h4>
        </div>
    </div>
    <div class="data-collection">
        <div class="data-info">
            <h4>Common Languages : 
                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
            </h4>
        </div>
    </div>
    `;

}


function check(country) {
    if (country.length === 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`
    } else {
        result.innerHTML = `<h3>Please Enter a valid country name</h3>`
    }
}
