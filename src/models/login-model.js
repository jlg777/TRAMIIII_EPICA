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

const createNewUser = async ({ name, email, pass }) => {
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

const getUserById = ( id ) => {
  console.log(id); //e901ef6e-3c8c-4dc9-aea1-89ed647979c9
  const user = listUser.find((user) => user.id == id);
  console.log(listUser[0].id);//undefined
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