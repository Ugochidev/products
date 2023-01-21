import * as mongoose from 'mongoose';

export const ProductShema = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number,
});
