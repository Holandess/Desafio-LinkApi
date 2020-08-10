import mongoose from "@config/db"

const orderClient = new mongoose.Schema({
  client: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  total_value: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const OrderClient = mongoose.model('orderClient', orderClient);

export default OrderClient;