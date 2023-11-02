import { v4 as uuid} from "uuid" ;


let listUser = [
    {
        id: uuid(),
        name: "correo",
        email:"correo@domain.com",
        pass:"1234"
    },
];

const createNewUser = ({ name, email, pass }) => {
  if (!name) return null;
  const newLogin = { id: uuid(), name, email, pass };
  listUser.push(newLogin);
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