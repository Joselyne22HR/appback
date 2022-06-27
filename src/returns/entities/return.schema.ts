import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';
import { Student } from 'src/student/entities/student.schema';

export type ReturnsDocument = Returns & Document;

@Schema()
export class Returns {
  @Prop()
  code: string;

  @Prop()
  date: string;

  @Prop({ type: Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop({ type: Types.ObjectId, ref: 'Student' })
  student: Student;
}

export const ReturnsSchema = SchemaFactory.createForClass(Returns);
