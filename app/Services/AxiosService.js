
// @ts-ignore
const sandboxApit = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})
// after this, any get() method takes only an extension

// notes 
// first input is where you want to post, second is what
// const res = await sandboxApi.post('cars', formData)

//deletes only take one argument... the collection/id
// const res = await sandboxApi.delete('cars/'+id)

// a car in a database has an id, a new car doesn't
// if you want to edit an item in a database, you need to find it by its id.

//mark changed addCar to handleSubmit
//in CarsController.js
//if(id == 'undefined') {
  //await carsService.addCar(formData)
  // } else {
    //formData.id = id
    // await carsService.addCar(formData)
  // }

//editCar(formData){
  //const res = await sandboxApi.put('cars/'+formData.id, formData)
  //const car = new Car(res.data)
  //const index = ProxyState.cars.findIndex(c => c.id == car.id)
  //NOTE use splice to grab a car at index, remove one item, and replace it with car.
  //ProxyState.cars.splice(index, 1, car)
  //ProxyState.cars = ProxyState.cars
// }

//async getAllCars(params ={}){
  // reassign cars to only the ones with the quality(s) you searched as a param
// }