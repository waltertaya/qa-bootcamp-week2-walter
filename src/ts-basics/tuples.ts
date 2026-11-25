type Car = [string, string, number];

function getCarDetails(car: Car): void {
    console.log("Car make:", car[0]);
    console.log("Car model:", car[1]);
    console.log("Price:", car[2]);
}

let car: Car = ["Audi", "Q3", 30_000]
getCarDetails(car)
