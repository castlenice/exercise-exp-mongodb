import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users }); //verschicke users
    //console.log(users);
  } catch (error) {
    res.status(500).json({ error: error.message }); //verschicke error=message if error
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    //console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { first_name, last_name } = req.body; //destructure from body //request
    const newUser = await User.create({ first_name, last_name });
    //console.log(newUser);
    res.status(201).json(newUser); //response
  } catch (error) {res.status(500).json({ error: error.message });}
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    console.log(deleteUser)
    res.status(200).json(deleteUser);
  } catch (error) {res.status(500).json({ error: error.message });}
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const {first_name, last_name, age} = req.body;
    const updateUser = await User.findByIdAndUpdate(
      id,
      { first_name, last_name, age },
      { new: true });
    res.status(200).json(updateUser)
  } catch (error) {res.status(500).json({ error: error.message });}
};
