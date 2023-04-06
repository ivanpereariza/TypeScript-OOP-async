import { Product } from "../models/product.model";
import BaseHttpService from "./base-http.service";

class ProductHttpService extends BaseHttpService<Product>{
  otherReques() {
    this.url
  }
}

export default ProductHttpService
