export interface IMilk {
    id: string,
    name: string,
    storage: number,
    type: string
}

export interface IHome {
    AllProducts: IMilk[]
}

export interface ICard {
    milk: IMilk
}

