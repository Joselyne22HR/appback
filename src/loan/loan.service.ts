import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Loan, LoanDocument } from './entities/loan.schema';
import { Model } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';
import { Student } from 'src/student/entities/student.schema';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan.name)
    private loanModel: Model<LoanDocument>,
  ) {}

  async create(model: Loan): Promise<Loan> {
    const newLoan = new this.loanModel(model);
    return await newLoan.save();
  }

  async findAll(): Promise<Loan[]> {
    return await this.loanModel
      .find()
      .populate('book', null, Book.name)
      .populate('student', null, Student.name)
      .exec();
  }

  async findOne(id: string): Promise<Loan> {
    return await this.loanModel.findById(id).exec();
  }

  async update(id: string, model: Loan) {
    return await this.loanModel.findByIdAndUpdate(id, model, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.loanModel.findByIdAndRemove(id);
  }
}
