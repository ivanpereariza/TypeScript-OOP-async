import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import ProductService from "../models/product-service.model";
import { Product } from "../models/product.model";
import axios, { AxiosInstance } from 'axios'

class ProductHttpService implements ProductService {

  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.escuelajs.co/api/v1/products'
    })
  }

  async getAll(): Promise<Product[]> {
    const { data } = await this.api.get('/')
    return data
  }
  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await this.api.put<Product>(`/${id}`, changes)
    return data
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await this.api.post('/', dto)
    return data
  }
  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await this.api.get(`/${id}`)
    return data
  }

}

const productHttpService = new ProductHttpService()

export default productHttpService
