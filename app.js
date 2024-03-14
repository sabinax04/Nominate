import { getAgeData, getGenderData, getNationalizeData } from "./apiFetcher.js";
import { countriesCode } from "./countries.js";
    
const button = document.querySelector("#button");
const leftPage = document.querySelector("#left");
const rightPage = document.querySelector("#right");
const values = document.querySelector("#values");
const loading = document.querySelector("#loading");
const nationa = document.querySelector("#nationa");
const gende = document.querySelector("#gende");
const inputField = document.querySelector("#input");
const agee = document.querySelector("#agee");
const probability = document.querySelector("#probability");
const probabilityOfGender = document.querySelector("#probabilityOfGender");
const countOfGender = document.querySelector("#countOfGender");



function getFullCountry(countryId){
  return countriesCode.find((country) =>  countryId === country.code).name;
}



button.addEventListener("click", async ()=> {


    loading.classList.remove('hidden');

    leftPage.style.backgroundImage = "url()";

    const input = inputField.value;

    const gender = await getGenderData(input)
    const nationalize = await getNationalizeData(input);
    const age = await getAgeData(input);

    values.classList.remove('hidden');

    loading.classList.add('hidden');

    nationa.textContent = getFullCountry(nationalize.country[0].country_id);
    probability.textContent = `${Math.ceil((nationalize.country[0].probability)*100)} %`;
    gende.textContent = gender.gender;
    probabilityOfGender.textContent = `${Math.ceil((gender.probability)*10)} %`;
    countOfGender.textContent = gender.count;
    agee.textContent = age.age;

});





