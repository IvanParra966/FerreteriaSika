export const products = [
    {
        id: 1,
        name: "Escalera de mano",
        category: "Herramientas",
        price: 399000,
        stock: 10,
        featured: true,
    },
    {
        id: 2,
        name: "Pincel 911 5cm",
        category: "Accesorios",
        price: 5700,
        stock: 2,
        featured: false,
    },
    {
        id: 3,
        name: "Revestimiento Texturado Medio Quiger 25kg",
        category: "Pintura",
        price: 105000,
        stock: 0,
        featured: false,
    }
]

console.log(`
    Producto 1
    id: ${products[0].id}
    name: ${products[0].name}
    category: ${products[0].category}
    price: ${products[0].price}
    stock: ${products[0].stock}
    featured: ${products[0].featured}

    Producto 2
    id: ${products[1].id}
    name: ${products[1].name}
    category: ${products[1].category}
    price: ${products[1].price}
    stock: ${products[1].stock}
    featured: ${products[1].featured}

    Producto 3
    id: ${products[2].id}
    name: ${products[2].name}
    category: ${products[2].category}
    price: ${products[2].price}
    stock: ${products[2].stock}
    featured: ${products[2].featured}
`)