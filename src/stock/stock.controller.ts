import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { Stock } from './entities/stock.schemas';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  async create(@Res() res, @Body() stock: Stock) {
    const newStock = await this.stockService.create(stock);
    return res.status(HttpStatus.CREATED).json({
      newStock,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const stock = await this.stockService.findAll();
    return res.status(HttpStatus.OK).json(stock);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const stock = await this.stockService.findOne(id);
    return res.status(HttpStatus.OK).json({ stock });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() stock: Stock) {
    const updateStock = await this.stockService.update(id, stock);
    return res.status(HttpStatus.OK).json({ updateStock });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeStock = await this.stockService.remove(id);
    return res.status(HttpStatus.OK).json({ removeStock });
  }
}
