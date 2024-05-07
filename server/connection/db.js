import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    const URL = `mongodb://bnmanubharadwaj:root@ac-ogvuyvx-shard-00-00.tkl5lqp.mongodb.net:27017,ac-ogvuyvx-shard-00-01.tkl5lqp.mongodb.net:27017,ac-ogvuyvx-shard-00-02.tkl5lqp.mongodb.net:27017/?ssl=true&replicaSet=atlas-10twgv-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
