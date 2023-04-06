import axios from 'axios'
import { Product } from "../models/product.model"
import { Category } from '../models/category.model'
import { UpdateProductDto } from '../dtos/product.dto'

class BaseHttpService<TypeClass>{

  constructor(
    protected url: string
  ) { }

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO): Promise<TypeClass> {
    const { data } = await axios.put(`${this.url}/${id}`, changes)
    return data
  }
}

(async () => {

  const productsService = new BaseHttpService<Product>('https://api.escuelajs.co/api/v1/products')

  const rtaProducts = await productsService.getAll()
  console.log(rtaProducts)

  productsService.update<Product['id'], UpdateProductDto>(1, {
    title: 'Hola',
    description: 'Descripcion updateada'
  })

  const categoryService = new BaseHttpService<Category>('https://api.escuelajs.co/api/v1/categories')

  const rtaCategories = await categoryService.getAll()
  console.log(rtaCategories)
})()


export default BaseHttpService
