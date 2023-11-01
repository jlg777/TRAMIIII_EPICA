import { v4 as uuid} from "uuid" ;


let listUser = [
    {
        id: uuid(),
        name: "correo@domain.com",
        email:"",
        pass:""
    },
];

const createNewUser = ({ name, email, pass }) => {
  if (!name) return null;
  const newLogin = { id: Date.now(), name, email, pass };
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

export const userModel = {
  create: createNewUser,
  findAll: GetAllUsers,
  findOne: getUserById,
};