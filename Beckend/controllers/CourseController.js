const CourseModel = require("../DBmodels/coursemodel");
const { sendResponse } = require("../helpers/helpers");

// const courses = [
//   {
//     id: 1,
//     name: "Graphic Designing",
//     shortName: "Graphic Design",
//     fee: 1500,
//   },
//   {
//     id: 2,
//     name: "MERN Stack Development",
//     shortName: "MERN Stack",
//     fee: 2500,
//   },
//   {
//     id: 3,
//     name: "Python Programming",
//     shortName: "Python",
//     fee: 1200,
//   },
//   {
//     id: 4,
//     name: "Web Development",
//     shortName: "Web Dev",
//     fee: 2000,
//   },
//   {
//     id: 5,
//     name: "Java Programming",
//     shortName: "Java",
//     fee: 1800,
//   },
//   {
//     id: 6,
//     name: "Data Science",
//     shortName: "Data Science",
//     fee: 3000,
//   },
//   {
//     id: 7,
//     name: "iOS App Development",
//     shortName: "iOS Dev",
//     fee: 2800,
//   },
//   {
//     id: 8,
//     name: "Android App Development",
//     shortName: "Android Dev",
//     fee: 2700,
//   },
//   {
//     id: 9,
//     name: "Cloud Computing",
//     shortName: "Cloud Computing",
//     fee: 2200,
//   },
//   {
//     id: 10,
//     name: "Network Security",
//     shortName: "Net Security",
//     fee: 2600,
//   },
//   {
//     id: 11,
//     name: "Full Stack Web Development",
//     shortName: "Full Stack Dev",
//     fee: 2300,
//   },
//   // Add more courses as needed
// ];

const CourseControllers = {
  add: async (req, res) => {
    try {
      const { courseName, duration, fee } = req.body;
      let obj = { courseName, duration, fee };

      let errArr = [];

      if (!courseName) {
        errArr.push("Required Course Name");
      }
      if (!duration) {
        errArr.push("Required Duration");
      }
      if (errArr.length > 0) {
        res.send(sendResponse(false, "Validation Error !", errArr));
      } else {
        let Course = new CourseModel(obj);
        let result = await Course.save();
        res
          .status(200)
          .send(sendResponse(true, "Course Added Successfully", result));
      }
    } catch (e) {
      res.status(500).send(sendResponse(true, "Interal Server Error", e));
    }
  },
  get: async (req, res) => {
    try {
      // FOR PAGINATION
      let { pageNo, pageSize } = req.query;
      console.log(pageNo, pageSize);

      let skipCount = (pageNo - 1) * pageSize;
      let result = await CourseModel.find().limit(pageSize).skip(skipCount);

      res.status(200).send(sendResponse(true, "", result));
    } catch (e) {
      res.status(400).send(sendResponse(false, "Internal Server Error ", e));
    }
  },
  getById: async (req, res) => {
    try {
      let id = req.params.id;

      let result = await CourseModel.findById(id);

      res.status(200).send(sendResponse(true, "", result));
    } catch (e) {
      res.status(500).send(sendResponse(false, "Internal Server Error", e));
    }
  },
  edit: async (req, res) => {
    try {
      let id = req.params.id;
      let result = await CourseModel.findByIdAndUpdate(id, req.body);
      res
        .status(200)
        .send(sendResponse(true, "Data updated successfully", result));
    } catch (e) {
      res.status(200).send(sendResponse(true, "Data is Not updated ", e));
    }
  },
  del: async (req, res) => {
    try {
      let id = req.params.id;

      let result = await CourseModel.findByIdAndDelete(id)
        .then(() => {
          res.status(200).send(sendResponse(true, "data deleted successfully"));
        })
        .catch((err) => {
          res
            .status(400)
            .send(sendResponse(false, "data deleted successfully", err));
        });
    } catch (e) {
      res.status(400).send(sendResponse(false, "data deleted successfully", e));
    }
  },
};

module.exports = CourseControllers;
