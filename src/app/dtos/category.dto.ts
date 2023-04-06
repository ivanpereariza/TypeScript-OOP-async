import { AccessType, Category } from "../models/category.model";
import {
  IsUrl,
  IsNotEmpty,
  Length,
  IsEnum,
  IsOptional,
  validateOrReject,
} from 'class-validator'

interface ICreateCategoryDto extends Omit<Category, 'id'> { }
class CreateCategoryDto implements ICreateCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {

  try {
    const dto = new CreateCategoryDto()
    dto.name = 'a'
    await validateOrReject(dto)
  } catch (error) {
    console.log(error)
  }
})()
