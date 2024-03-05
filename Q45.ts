function createCar(manufacturer: string, model: string, options: Record<string, unknown>): Record<string, unknown> {
    const carInfo: Record<string, unknown> = {
        Manufacturer: manufacturer,
        Model: model,
        ...options,
    };
    return carInfo;
}

const myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022 });
console.log(myCar);