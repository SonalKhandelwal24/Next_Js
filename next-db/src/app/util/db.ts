const {USERNAME, PASSWORD } = process.env;
export const connectionStr = `mongodb+srv://sonalkhandelwal:mongodb@cluster0.7taeczq.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`
   
// Function to handle connecting to MongoDB
// export const connectToDatabase = async () => {
//     if (mongoose.connection.readyState === 0) {
//       try {
//         await mongoose.connect(connectionStr, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           connectTimeoutMS: 30000 // 30 seconds
//         });
//         console.log('Connected to MongoDB');
//       } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//         throw new Error('Could not connect to the database');
//       }
//     }
//   };