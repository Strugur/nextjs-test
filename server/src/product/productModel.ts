import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var ProductModelShema = new Schema({
  title: String,
  
});

export default mongoose.model('product', ProductModelShema );