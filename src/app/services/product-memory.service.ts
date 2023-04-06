import { faker } from "@faker-js/faker"
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"
import { Product } from "../models/product.model"
import ProductService from "../models/product-service.model"


class ProductMemoryService implements ProductService {

  private products: Product[] = []

  getAll() {
    return this.products
  }

  create(data: CreateProductDto): Product {

    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      }
    }

    return this.add(newProduct)
  }

  add(product: Product) {
    this.products.push(product)

    return product
  }

  update(id: Product['id'], changes: UpdateProductDto): Product {

    const productIdx = this.products.findIndex(item => item.id === id)

    const prevData = this.products[productIdx]

    this.products[productIdx] = {
      ...prevData,
      ...changes,
    }

    return this.products[productIdx]
  }

  findOne(id: Product['id']) {
    return this.products.find(elm => elm.id === id)
  }

}

const productService = new ProductMemoryService()

export default productService
