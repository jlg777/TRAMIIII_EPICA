import { connect } from "mongoose";
import { env } from "./envs.js";

export const startConnection = async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/test");
    console.log(`DB is connected to ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};