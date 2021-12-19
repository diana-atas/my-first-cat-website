// Code to calculate cat's age in human years

let catAgeButton = document.getElementById('catage');
let catAgeResult = document.getElementById('yourcatage');
let catLifeStage = document.getElementById('lifestage');
let theImage = document.getElementById('lifestageimage');

function calculateAge() {
    // return (ageYears * 12) + ageMonths;
    let yearsInput = +document.getElementById("ageyears").value;
    let monthsInput = +document.getElementById("agemonths").value;
    let ageInMonths = (yearsInput * 12) + monthsInput;
    let ageInHuman = 0;
    let lifeStage = '';

    if (ageInMonths > 47) {
        ageInHuman = Math.round(((ageInMonths - 48) / 12 * 4) + 32);
        if (ageInMonths > 131) {
            lifeStage = 'Senior';
        } else {
            lifeStage = 'Adult';
        }

    } else if (ageInMonths > 35) {
        ageInHuman = 28;
        lifeStage = 'Adult';
    } else if (ageInMonths > 23) {
        ageInHuman = 24;
        lifeStage = 'Junior';
    } else if (ageInMonths > 17) {
        ageInHuman = 21;
        lifeStage = 'Junior';
    } else if (ageInMonths > 11) {
        ageInHuman = 15;
        lifeStage = 'Junior';
    } else if (ageInMonths > 5) {
        ageInHuman = 10;
        lifeStage = 'Kitten';
    } else if (ageInMonths > 2) {
        ageInHuman = 4;
        lifeStage = 'Kitten';
    } else if (ageInMonths >= 1) {
        ageInHuman = 1;
        lifeStage = 'Kitten';
    } else {
        ageInHuman = 0;
    }

    catAgeResult.innerHTML = "Your cat's age in human years is approximately " + ageInHuman + ".";
    catAgeResult.style.backgroundColor = 'rgba(250, 235, 215, .3)';
    catLifeStage.innerHTML = "Life Stage: " + lifeStage;
    catLifeStage.style.backgroundColor = 'rgba(250, 235, 215, .3)';

    switch (lifeStage) {
        case 'Kitten':
            theImage.src = 'images/kittens.jpg';
            theImage.style.visibility = 'visible';
            theImage.classList.toggle('animateimage');
            break;
        case 'Junior':
            theImage.src = 'images/juniorcat.jpg';
            theImage.style.visibility = 'visible';
            theImage.classList.toggle('animateimage');
            break;
        case 'Adult':
            theImage.src = 'images/adultcat.jpg';
            theImage.style.visibility = 'visible';
            theImage.classList.toggle('animateimage');
            break;
        case 'Senior':
            theImage.src = 'images/seniorcat.jpg';
            theImage.style.visibility = 'visible';
            theImage.classList.toggle('animateimage');
            break;

    }

}

catAgeButton.onclick = function () {
    calculateAge();
}
