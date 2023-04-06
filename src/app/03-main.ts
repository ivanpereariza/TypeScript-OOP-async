import { Product } from "./models/product.model";
import productHttpService from "./services/product-http.service";

(async () => {


  try {

    const products: Product[] = await productHttpService.getAll()

    console.log(products.length)

    const productId = products[0].id
    await productHttpService.update(productId, {
      price: 777,
      title: 'Cambiando el titulo pimpam',
      description: 'Una descripcion de pro de typescript'
    })

    const product = await productHttpService.findOne(productId)
    console.log(product)
  } catch (error) {
    console.error(error)
  }
})()
