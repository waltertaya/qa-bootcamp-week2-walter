
type Phone = {
    make: string;
    model: string | null | undefined;
    memory: number | string;
    storage: number | string;
    osVersion: string | null | undefined;
    cpu: string | null | undefined;
};

const phone1: Phone = {
    make: "Samsung",
    model: "Galaxy S25",
    memory: 12,
    storage: 256,
    osVersion: "Android 15",
    cpu: "Snapdragon 8 Elite",
};

const phone2: Phone = {
    make: "Apple",
    model: "iPhone 16",
    memory: "8GB",
    storage: "128GB",
    osVersion: "iOS 18",
    cpu: "A18",
};

const phone3: Phone = {
    make: "Google",
    model: null,
    memory: "12GB",
    storage: 512,
    osVersion: undefined,
    cpu: null,
};

console.log(phone1);
console.log(phone2);
console.log(phone3);
