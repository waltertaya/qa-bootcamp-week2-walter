
function calculateAge(dob: Date, current: Date = new Date()): number {
    const difference = current.getTime() - dob.getTime();

    const age = difference / (1000 * 60 * 60 * 24 * 365.25);

    return Math.floor(age);
}

const dob = new Date("2003-05-22");

console.log(calculateAge(dob));
