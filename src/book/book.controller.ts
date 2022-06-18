import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entities/book.schema';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Res() res, @Body() book: Book) {
    const newBook = await this.bookService.create(book);
    return res.status(HttpStatus.CREATED).json({
      newBook,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const book = await this.bookService.findAll();
    return res.status(HttpStatus.OK).json(book);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const book = await this.bookService.findOne(id);
    return res.status(HttpStatus.OK).json({ book });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() book: Book) {
    const updateBook = await this.bookService.update(id, book);
    return res.status(HttpStatus.OK).json({ updateBook });
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const removeBook = await this.bookService.remove(id);
    return res.status(HttpStatus.OK).json({ removeBook });
  }
}
