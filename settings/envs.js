import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 4000,
  SECRET_KEY: process.env.SECRET_KEY,
  PASS_ADMIN: process.env.PASS_ADMIN,
  MONGO_URI: process.MONGO_URI,
};

export const secretKey = {
  
};
