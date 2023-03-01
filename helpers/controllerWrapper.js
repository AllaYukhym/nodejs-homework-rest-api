const ctrlWrapper = (controller) => {
  const func = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      // console.log("error in controllerWrapper: ", error);
      next(error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
