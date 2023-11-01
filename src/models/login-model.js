let listUser = [
    {
        id: 123,
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
  console.log(id);
  console.log(listUser);
  console.log(listUser.id);
  const user = listUser.find((user) => user.id == id);
  console.log(user);
  console.log(user.id)
  return user;
};

export const userModel = {
  create: createNewUser,
  findAll: GetAllUsers,
  findOne: getUserById,
};