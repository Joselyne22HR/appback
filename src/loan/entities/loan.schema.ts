import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';
import { Student } from 'src/student/entities/student.schema';

export type LoanDocument = Loan & Document;

@Schema()
export class Loan {
  @Prop({ required: true })
  code: string;

  @Prop({ type: Types.ObjectId, ref: 'Student' })
  student: Student;

  @Prop({ type: Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop({ required: true })
  start: string;

  @Prop({ required: true })
  end: string;

  @Prop()
  status: boolean;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
