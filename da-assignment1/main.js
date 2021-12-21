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

    // Why does a cat older than 47 months get a special formula but younger cats do not?
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
        // 'Junior' and 'Kitten' is duplicated quite a bit, maybe this function should be split in two halves.
        // The first half should determine the life stage of the cat, and second half can be the formula to convert years to cat years.
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

    // JavaScript feature you may not know about! - This is called: string interpolation
    catAgeResult.innerHTML = `Your cat's age in human years is approximately ${ageInHuman}.`;
    catAgeResult.innerHTML = "Your cat's age in human years is approximately " + ageInHuman + ".";
    catAgeResult.style.backgroundColor = 'rgba(250, 235, 215, .3)';
    catLifeStage.innerHTML = "Life Stage: " + lifeStage;
    catLifeStage.style.backgroundColor = 'rgba(250, 235, 215, .3)';

    switch (lifeStage) {
        case 'Kitten':
            theImage.src = 'images/kittens.jpg';
            break;
        case 'Junior':
            theImage.src = 'images/juniorcat.jpg';
            break;
        case 'Adult':
            theImage.src = 'images/adultcat.jpg';
            break;
        case 'Senior':
            theImage.src = 'images/seniorcat.jpg';
            break;

    }
    // 👍 for the switch. It makes code easy to read. However, the following lines of code should run regardless of the lifestage so I suggest moving them outside of the switch.
    theImage.classList.toggle('animateimage');
    theImage.style.visibility = 'visible';

}

catAgeButton.onclick = function () {
    calculateAge();
}
