function findAGoodCar(cars, expectations) {

    let result = []
/* 
    cars.forEach((car) => {
       if (car.manufacturer === expectations.manufacturer && car.yearOfManufacturing >= expectations.yearOfManufacturing && car.km < expectations.km && car.price <= expectations.price) {
                    result.push(car)
                }
            }) */

    result = cars.filter((car) => car.manufacturer === expectations.manufacturer && car.yearOfManufacturing >= expectations.yearOfManufacturing && car.km < expectations.km && car.price <= expectations.price)

    if (result.length === 0) return null
        return result
}

module.exports = findAGoodCar