import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  language: { type: String, required: true },
  state: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Address || mongoose.model('Address', AddressSchema);