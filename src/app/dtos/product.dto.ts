import { Category } from '../models/category.model';
import { Product } from './../models/product.model';

interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']
}

interface UpdateProductDto extends Partial<CreateProductDto> { }

interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}

export { CreateProductDto, UpdateProductDto, FindProductDto }
