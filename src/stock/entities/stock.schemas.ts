import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop({ type: Types.ObjectId, ref: 'Book' })
  book: Book;

  @Prop()
  current: number;

  @Prop()
  stock: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
