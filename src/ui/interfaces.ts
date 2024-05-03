export interface IFood {
    id: number,
    foodName: string,
    image: string,
    foodType: string,
    price: number,
    calories: number,
    carbs: number
}

export interface IUser {
    id: number,
    name: string,
    password: string,
    age: number
}

// const reservTable = {
//   id: Date.now(),
//   personId: user.user == null ? Date.now() : user.user.id,
//   personName: user.user == null ? "Person" : user.user.name,
//   peopleQuantity: table.orderedTable.numberOfPeople,
//   orderType: table.orderedTable.dishesOrder,
//   orderedDishes: table.orderedFood,
//   totalPrice: table.totalOrderPrice
// }

export interface IReserTable {
    id: number,
    personId: number,
    personName: string,
    peopleQuantity: string,
    orderType: string,
    orderedDishes: {quantity: number, dish: IFood}[],
    totalPrice: number,
}