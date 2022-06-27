import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author } from 'src/author/entities/author.schema';
import { Category } from 'src/category/entities/category.schema';
import { Editorial } from 'src/editorial/entities/editorial.schema';
import { Book, BookDocument } from './entities/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>,
  ) {}

  async create(book: Book): Promise<Book> {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async findbyIsbn(isbn: string): Promise<Book[]> {
    return await this.bookModel.find({ isbn }).exec();
  }

  async findAll(): Promise<Book[]> {
    return await this.bookModel
      .find()
      .populate('author', null, Author.name)
      .populate('category', null, Category.name)
      .populate('editorial', null, Editorial.name)
      .exec();
  }

  async findOne(id: string): Promise<Book> {
    return await this.bookModel
      .findById(id)
      .populate('author', null, Author.name)
      .populate('category', null, Category.name)
      .populate('editorial', null, Editorial.name)
      .exec();
  }

  async update(id: string, book: Book) {
    return await this.bookModel.findByIdAndUpdate(id, book, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.bookModel.findByIdAndRemove(id);
  }
}
