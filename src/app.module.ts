import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './author/entities/author.schema';
import { AuthorController } from './author/author.controller';
import { AuthorService } from './author/author.service';
import { ConfigModule } from '@nestjs/config';
import { Category, CategorySchema } from './category/entities/category.schema';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import {
  Editorial,
  EditorialSchema,
} from './editorial/entities/editorial.schema';
import { EditorialController } from './editorial/editorial.controller';
import { EditorialService } from './editorial/editorial.service';
import { Book, BookSchema } from './book/entities/book.schema';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { Stock, StockSchema } from './stock/entities/stock.schemas';
import { StockController } from './stock/stock.controller';
import { StockService } from './stock/stock.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.DB}`),
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Editorial.name, schema: EditorialSchema },
      { name: Book.name, schema: BookSchema },
      { name: Stock.name, schema: StockSchema },
    ]),
  ],
  controllers: [
    AppController,
    AuthorController,
    CategoryController,
    EditorialController,
    BookController,
    StockController,
  ],
  providers: [
    AppService,
    AuthorService,
    CategoryService,
    EditorialService,
    BookService,
    StockService,
  ],
})
export class AppModule {}
