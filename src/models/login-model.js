
let listUser = [];

export const loginUser =  [
    {
        id: Date.now(),
        name: "correo@domain.com",
        email:"",
        pass:""
    },
    {
        name: "correo@domain.com",
        email:"",
        pass:""
    }
 ];

 const createNewUser = ({ name, email, pass }) => {
    if (!name) return null;
  
    const newLogin = { id: Date.now(), name, email, pass };
  
    loginUser.push(newLogin);
  
    return newLogin;
  };


  export const emailModel = {
    create: createNewUser,
  };