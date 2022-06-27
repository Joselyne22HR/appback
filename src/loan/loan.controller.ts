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
import { LoanService } from './loan.service';
import { Loan } from './entities/loan.schema';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  async create(@Res() res, @Body() loan: Loan) {
    const newLoan = await this.loanService.create(loan);
    return res.status(HttpStatus.CREATED).json({
      newLoan,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const loan = await this.loanService.findAll();
    return res.status(HttpStatus.OK).json(loan);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const loan = await this.loanService.findOne(id);
    return res.status(HttpStatus.OK).json({ loan });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() loan: Loan) {
    const updateLoan = await this.loanService.update(id, loan);
    return res.status(HttpStatus.OK).json({ updateLoan });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeLoan = await this.loanService.remove(id);
    return res.status(HttpStatus.OK).json({ removeLoan });
  }
}
