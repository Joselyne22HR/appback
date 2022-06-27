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
import { Returns } from './entities/return.schema';
import { ReturnsService } from './returns.service';

@Controller('returns')
export class ReturnsController {
  constructor(private readonly returnsService: ReturnsService) {}

  @Post()
  async create(@Res() res, @Body() model: Returns) {
    const newReturn = await this.returnsService.create(model);
    return res.status(HttpStatus.CREATED).json({
      newReturn,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const returns = await this.returnsService.findAll();
    return res.status(HttpStatus.OK).json(returns);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const returns = await this.returnsService.findOne(id);
    return res.status(HttpStatus.OK).json({ returns });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() returns: Returns) {
    const updateReturn = await this.returnsService.update(id, returns);
    return res.status(HttpStatus.OK).json({ updateReturn });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeReturn = await this.returnsService.remove(id);
    return res.status(HttpStatus.OK).json({ removeReturn });
  }
}
