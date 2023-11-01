
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
  const post = listUser.find((post) => post.id == id);
  return post;
};

export const userModel = {
  create: createNewUser,
  findAll: GetAllUsers,
  findOne: getUserById,
};