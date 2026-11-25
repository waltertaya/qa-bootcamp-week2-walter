function calculateAge(dob: Date, current: Date = new Date()): number {
    let age = current.getFullYear() - dob.getFullYear();

    const hasHadBirthdayThisYear =
        current.getMonth() > dob.getMonth() ||
        (current.getMonth() === dob.getMonth() &&
            current.getDate() >= dob.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
}

const dob = new Date("2003-05-22");

console.log(calculateAge(dob));
