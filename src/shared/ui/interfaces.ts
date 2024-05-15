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

export interface IReserTable {
    id?: number,
    personId: number,
    personName: string,
    peopleQuantity: string,
    orderType: string,
    orderedDishes: {quantity: number, dish: IFood}[],
    totalPrice: number,
}