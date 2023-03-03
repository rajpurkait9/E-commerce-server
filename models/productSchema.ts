import mongoose, { Mongoose } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: [
      {
        url: {
          type: String,
        },
      },
    ],
    stocks: {
      type: Number,
      default: 1,
    },
    reviews: [
      {
        name: {
          user: mongoose.Schema.Types.ObjectId,
        },
        rating: {
          type: Number,
          default: 0,
        },
        comment: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Products = mongoose.model('products', productSchema);
export default Products;
