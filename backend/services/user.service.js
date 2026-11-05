import User from "../models/dummy.schema.js";

export const getUser = async () => {
  try {
    const res = await User.find();
    return res;
  } catch (error) {
    throw new Error("internal error");
  }
};

export const createuser = async ({ name, email, description }) => {
    
  const user = await User.create({
    name,
    email,
    description,
  });

  return user;
};
