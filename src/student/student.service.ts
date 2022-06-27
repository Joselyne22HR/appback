import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './entities/student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<StudentDocument>,
  ) {}

  async create(model: Student): Promise<Student> {
    const newStudent = new this.studentModel(model);
    return await newStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async update(id: string, model: Student) {
    return await this.studentModel.findByIdAndUpdate(id, model, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.studentModel.findByIdAndRemove(id);
  }

  async findByIdentification(identification: string) {
    return await this.studentModel.findOne({ identification }).exec();
  }
}
