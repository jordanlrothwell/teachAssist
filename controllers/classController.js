const Class = require("../models/Class");

const classSeedData = require("../data/classSeedData");

module.exports = {
  // Get all classes
  getClasses(req, res) {
    Class.find().then(async (classes) => {
      const classObj = {
        classes,
      };
      return res.json(classObj);
    });
  },

  // Get a single class
  getSingleClass(req, res) {
    Class.findOne({ _id: req.params.classID })
      .select("-__v")
      .lean()
      .then(async (classByID) =>
        !classByID
          ? res.status(404).json({ message: "No class with that ID" })
          : res.json({ classByID })
      );
  },

  // Seed the database
  async createMultipleClasses(req, res) {
    await Class.deleteMany({});
    const seededClasses = await Class.insertMany(classSeedData);
    res.status(200).json(seededClasses);
  },
};
