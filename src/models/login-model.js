import { v4 as uuid} from "uuid" ;
import bcrypt from "bcrypt";
import { env } from "../../settings/envs.js";

const hashedPass_Admin = await bcrypt.hash(env.PASS_ADMIN, 10);

let listUser = [
    {
        id: uuid(),
        name: "admin",
        email:"correo_admin@domain.com",
        pass: hashedPass_Admin,
    },
];

const createNewUser =async ({ name, email, pass }) => {
  if (!name || !email || !pass) return null;
  const hashedPassword = await bcrypt.hash(pass, 10); 
  const newLogin = {
    id: uuid(),
    name,
    email,
    pass: hashedPassword,
  };
  listUser.push(newLogin);
  console.log(newLogin);
  return newLogin;
};

const GetAllUsers = () => {
  return [...listUser];
};

const getUserById = ({ id }) => {
  const user = listUser.find((user) => user.id == id);

  return user;
};

const getUserByEmail = (email) => {
  const user = listUser.find((user) => user.email === email);

  return user;
};

export const userModel = {
  create: createNewUser,
  findAll: GetAllUsers,
  findOne: getUserById,
  findByEmail: getUserByEmail,
};