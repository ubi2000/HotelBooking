import Hotel from "../models/hotel.js";

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const { name } = req.body;
    const hotelName = await Hotel.findOne({ name });
    if (hotelName) {
      return res.status(400).json({ message: "Hotel Name  already Exists" });
    }
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
    
  }
};

export const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel has been deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getHotel = async (req, res) => {
  try {
    const singleHotel = await Hotel.findById(req.params.id);
    res.status(200).json(singleHotel);
  } catch (error) {
    res.json(error);
  }
};
export const getAllHotels = async (req, res) => {
  try {
    const getAllHotels = await Hotel.find();
    res.status(200).json(getAllHotels);
  } catch (error) {
    res.json(error);
  }
};
