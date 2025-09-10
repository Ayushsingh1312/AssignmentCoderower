import mongoose from 'mongoose';

const myConfigSchema = new mongoose.Schema({
  configId: { type: String, required: true, unique: true },
  data: { type: [[String]], required: true },
  remark: { type: String, default: "" }
});

const MyConfig = mongoose.model("MyConfig", myConfigSchema);

export default MyConfig;