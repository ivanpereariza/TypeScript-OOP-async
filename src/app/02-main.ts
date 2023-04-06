import productService from "./services/product-memory.service";

productService.create({
  title: 'product1',
  description: 'ajhdbiasjdiojasn',
  price: 100,
  categoryId: 12,
  images: []
})


const products = productService.allProducts

const productId = products[0].id

productService.updateProduct(productId, {
  title: 'Nombre cambiado'
})

const findProduct = productService.findOne(productId)

console.log(findProduct)
