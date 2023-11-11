import React, { useEffect, useState } from "react";
import { Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ABButton from "../components/ABButton";
import ABTable from "../components/ABTable";
import { Get } from "../router/ApiMethods";

function Courses() {
  const [courseData, setCourseData] = useState([]);
  const navigate = useNavigate();

  const Add = () => {
    navigate("/Add");
  };

  const courses = [
    {
      s_no: 1,
      course_name: "Web Development",
      fee: "$500 - $5,000",
      duration: "2-6 months",
    },
    {
      s_no: 2,
      course_name: "Data Science",
      fee: "$1,000 - $10,000",
      duration: "3-12 months",
    },
    {
      s_no: 3,
      course_name: "Machine Learning",
      fee: "$1,500 - $12,000",
      duration: "4-14 months",
    },
    {
      s_no: 4,
      course_name: "Cybersecurity",
      fee: "$800 - $8,000",
      duration: "2-9 months",
    },
    {
      s_no: 5,
      course_name: "Programming Fundamentals",
      fee: "$300 - $2,500",
      duration: "1-4 months",
    },
    {
      s_no: 6,
      course_name: "Database Management",
      fee: "$600 - $5,000",
      duration: "2-6 months",
    },
    {
      s_no: 7,
      course_name: "Network Administration",
      fee: "$700 - $6,000",
      duration: "2-7 months",
    },
    {
      s_no: 8,
      course_name: "Software Engineering",
      fee: "$1,000 - $9,000",
      duration: "3-12 months",
    },
  ];

  const getData = () => {
    Get("courses")
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="main-bg-div">
        <Container>
          <div className="main-div ">
            <div className="main-heading py-4 text-center">
              <h1 className="text-white fw-bold display-3">Available Courses</h1>
            </div>
          </div>
          <div className="table-main">
            <div className="border border-5 p-4 m-3 bg-white">
              <h1 className="text-center">Courses</h1>
              <div className="btn-main text-end py-2z">
                <ABButton
                  variant="contained"
                  className="fw-bold"
                  label="Add Course"
                  onClick={Add}
                />
              </div>
              <ABTable
                label=""
                dataSource={courseData}
                cols={[

                  {
                    displayName: "Course Name",
                    key: "courseName",
                  },
                  {
                    displayName: "Duration",
                    key: "duration",
                  },
                  {
                    displayName: "Fee",
                    key: "fee",
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Courses;