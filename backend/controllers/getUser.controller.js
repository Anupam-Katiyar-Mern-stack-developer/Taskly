import { getUser } from "../services/user.service.js";

export const getuserController = async (req, res, next) => {
  try {
    const result = await getUser();

    return res.status(200).json({
      success: true,
      message: "succesfully fetch users",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
