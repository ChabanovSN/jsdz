const hasLicence = true;
const age = 18;
let isDrunk = false;
const canDrive = age >= 18 && hasLicence && !isDrunk;
console.log(`Он  ${canDrive ? 'можит':' не можит'} вести машину.`);