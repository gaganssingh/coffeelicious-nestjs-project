import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'Returning all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Returning id: ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(`:id`)
  update(@Param(`id`) id: string, @Body() body) {
    return `Updating coffee with id: ${id}`;
  }

  @Delete(`:id`)
  remove(@Param(`id`) id: string) {
    return `Deleting coffee with id: ${id}`;
  }
}
