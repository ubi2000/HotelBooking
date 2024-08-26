import User from "../models/user.js";

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(err);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(500).json(err);
  }
};
export const getUser = async (req, res) => {
  try {
    const getSingleUser = await User.findById(req.params.id);
    res.status(200).json({ getSingleUser });
  } catch (error) {
    res.status(500).json(err);
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const getAll = await User.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json(err);
  }
};
