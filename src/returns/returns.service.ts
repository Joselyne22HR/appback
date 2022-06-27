import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Returns, ReturnsDocument } from './entities/return.schema';
import { Model } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';
import { Student } from 'src/student/entities/student.schema';

@Injectable()
export class ReturnsService {
  constructor(
    @InjectModel(Returns.name)
    private returnsModel: Model<ReturnsDocument>,
  ) {}

  async create(model: Returns): Promise<Returns> {
    const newReturn = new this.returnsModel(model);
    return await newReturn.save();
  }

  async findAll(): Promise<Returns[]> {
    return await this.returnsModel
      .find()
      .populate('book', null, Book.name)
      .populate('student', null, Student.name)
      .exec();
  }

  async findOne(id: string): Promise<Returns> {
    return await this.returnsModel.findById(id).exec();
  }

  async update(id: string, model: Returns) {
    return await this.returnsModel.findByIdAndUpdate(id, model, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.returnsModel.findByIdAndRemove(id);
  }
}
