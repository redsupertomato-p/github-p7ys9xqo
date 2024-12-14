import mongoose from 'mongoose';

const AgentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  prompt: { type: String, required: true },
  voice: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  language: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  state: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Agent || mongoose.model('Agent', AgentSchema);