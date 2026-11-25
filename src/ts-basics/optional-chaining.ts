type Laptop = {
    make: string;
    model?: string;
    memory?: number | string;
    storage?: number | string;
    osVersion?: string;
    cpu?: string;
    kernel?: string;
};

const laptop1: Laptop = {
    make: "Dell",
    model: "Latitude 5440",
    memory: 16,
    storage: 512,
    osVersion: "Ubuntu 26.04",
    cpu: "Intel Core i7",
    kernel: "linux",
};

const laptop2: Laptop = {
    make: "HP",
};

console.log(laptop2.model?.toUpperCase());

const model = laptop2.model ?? "Model not specified";

console.log(model);

console.log(laptop2.model?.toUpperCase() ?? "Model not specified");

console.log(laptop1)
console.log(laptop2)
