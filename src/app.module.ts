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
import { Student, StudentSchema } from './student/entities/student.schema';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { Loan, LoanSchema } from './loan/entities/loan.schema';
import { LoanController } from './loan/loan.controller';
import { LoanService } from './loan/loan.service';
import { Returns, ReturnsSchema } from './returns/entities/return.schema';
import { ReturnsController } from './returns/returns.controller';
import { ReturnsService } from './returns/returns.service';

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
      { name: Student.name, schema: StudentSchema },
      { name: Loan.name, schema: LoanSchema },
      { name: Returns.name, schema: ReturnsSchema },
    ]),
  ],
  controllers: [
    AppController,
    AuthorController,
    CategoryController,
    EditorialController,
    BookController,
    StockController,
    StudentController,
    LoanController,
    ReturnsController,
  ],
  providers: [
    AppService,
    AuthorService,
    CategoryService,
    EditorialService,
    BookService,
    StockService,
    StudentService,
    LoanService,
    ReturnsService,
  ],
})
export class AppModule {}
