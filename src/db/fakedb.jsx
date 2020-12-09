const products = [
  { id: 1, product: 'Small Soft Towels' },
  { id: 2, product: 'Handcrafted Concrete Fish' },
  { id: 3, product: 'Ergonomic Rubber Fish' },
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    resolve(products.find((p) => p.id === Number(id)))
  })
}
