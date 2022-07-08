import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
//
@Schema()
export class Student {
  @Prop()
  identification: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
