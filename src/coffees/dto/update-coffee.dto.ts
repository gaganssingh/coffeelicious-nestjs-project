import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// export class UpdateCoffeeDto {
//   @IsString()
//   readonly name: string;
//   @IsString()
//   readonly brand: string;
//   @IsString({ each: true })
//   readonly flavors: string[];
// }

// PartialType sets all properties of the CreateCoffeeDto to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
