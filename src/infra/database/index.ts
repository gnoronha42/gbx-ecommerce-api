// this one is inacessible by now 

// import mongoose, { ConnectOptions } from 'mongoose';

// const options: ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };

// mongoose.connect('mongodb://localhost/gbx-ecommerce-db', options)
//   .then(() => {
//     console.log('sucess connect.');
//   })
//   .catch((err) => {
//     console.error('Error connect:', err);
//   });

// const ProductSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   price: { type: Number, required: true }
// });

// export const ProductModel = mongoose.model('Product', ProductSchema);