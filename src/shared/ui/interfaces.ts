export interface IFood {
  id: number;
  foodName: string;
  image: string;
  foodType: string;
  price: number;
  calories: number;
  carbs: number;
  description: string;
}

export interface IUser {
  id: number;
  name: string;
  password: string;
  age: number;
}

export interface IReserTable {
  id?: number;
  personId: number;
  personName: string;
  peopleQuantity: string;
  orderType: string;
  orderedDishes: { quantity: number; dish: IProduct }[];
  totalPrice: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}
