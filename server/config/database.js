import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://palakshi19_db_user:123@portfolio-showcase.rpcgqdu.mongodb.net/?appName=portfolio-showcase';
    
   await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB connected successfully');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit the application if database connection fails
  }
};

export default connectDB;