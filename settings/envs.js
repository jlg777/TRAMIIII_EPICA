import { config } from "dotenv";

config();

export const env = {
  PORT: process.env.PORT || 4000,
  SECRET_KEY: process.env.SECRET_KEY,
};

export const secretKey = {
  
};
