import { v4 as uuid} from "uuid" ;
import bcrypt from "bcrypt";


let listUser = [
    {
        id: uuid(),
        name: "correo",
        email:"correo@domain.com",
        pass:"1234"
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