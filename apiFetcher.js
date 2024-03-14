export async function getGenderData(input){

    const genderLink = await fetch(`https://api.genderize.io?name=${input}`);
    const gender = await genderLink.json();
    return gender;

}

export async function getNationalizeData(input){

    const nationalizeLink = await fetch(`https://api.nationalize.io?name=${input}`);
    const nationalize = await nationalizeLink.json();
    return nationalize; 
}

export async function getAgeData(input){

    const ageLink = await fetch(`https://api.agify.io?name=${input}`);
    const age = await ageLink.json();
    return age;
}
