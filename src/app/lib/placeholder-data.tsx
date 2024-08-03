import { Category, Products } from "./definitions";



export const categories: Category[] = [

    {
        code: 'canned',
        name: 'Canned'
    },
    {
        code: 'gamot',
        name: 'Gamot'
    },
    {
        code: 'sabon',
        name: 'Sabon'
    },
    {
        code: 'chicherya',
        name: 'Chicherya'
    },
    {
        code: 'gcash',
        name: 'GCash'
    },

]

export const products: Products = [
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Ariel",
        price: 17,
        category_id: categories[1].code
    },
    {
        id: "d6e15727-9fe1-4966-8c5b-ea44a9bd81aa",
        name: "Amoxicilin",
        price: 17,
        category_id: categories[1].code
    },
    {
        id: "d6d15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Rexidol",
        price: 17,
        category_id: categories[1].code
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a1bd81aa",
        name: "Solmux",
        price: 32,
        category_id: categories[1].code
    },
    {
        id: "d6e15737-9ee1-4961-8c5b-ea44a9bd81aa",
        name: "Biogesic",
        price: 18,
        category_id: categories[1].code
    },
    {
        id: "d6e15727-9fe1-4961-8c3b-ea44a9bd81aa",
        name: "Century Tuna 100g",
        price: 17,
        category_id: categories[0].code
    },
    {
        id: "d6e15727-9fe1-4561-8c5b-ea44a9bd81aa",
        name: "Century Tuna 200g",
        price: 18,
        category_id: categories[0].code
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd82aa",
        name: "Argentina Corned Beef 100g",
        price: 32,
        category_id: categories[0].code
    },
    {
        id: "d6e15727-9fc1-4961-8c5b-ea44a9bd81aa",
        name: "Argentina Corned Beef 125g",
        price: 32,
        category_id: categories[0].code
    },
    {
        id: "d6e35727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Argentina Corned Beef 150g",
        price: 32,
        category_id: categories[0].code
    },
]
