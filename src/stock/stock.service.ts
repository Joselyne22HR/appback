import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from './entities/stock.schemas';
import { Model } from 'mongoose';
import { Book } from 'src/book/entities/book.schema';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name)
    private stockModel: Model<StockDocument>,
  ) {}

  async create(stock: Stock): Promise<Stock> {
    const newStock = new this.stockModel(stock);
    return await newStock.save();
  }

  async findAll(): Promise<Stock[]> {
    return await this.stockModel
      .find()
      .populate('book', null, Book.name)
      .exec();
  }

  async findOne(id: string): Promise<Stock> {
    return await this.stockModel
      .findById(id)
      .populate('book', null, Book.name)
      .exec();
  }

  async update(id: string, stock: Stock) {
    return await this.stockModel.findByIdAndUpdate(id, stock, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.stockModel.findByIdAndRemove(id);
  }
}
