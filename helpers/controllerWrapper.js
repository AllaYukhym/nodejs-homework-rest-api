const controllerWrapper = (controller) => {
  const func = async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      //   next(error)
      res.status(500).json({ message: "Server error" });
    }
  };

  return func;
};

module.exports = controllerWrapper;
