import React, { Component } from "react";

import UserService from "../services/user.service";
import CourseService from "../services/course.service";
import { Link } from "react-router-dom";
import { retrieveTutorials } from "../actions/courses";
class Home extends Component {
  constructor(props) {
    super(props);

    this.getCourse = this.getCourse.bind(this);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    this.getCourse();
  }

  getCourse() {
    CourseService.getAllCourse()
      .then((response) => {
        this.setState({
          courses: response.data.Course,
        });
        console.log(response.data.Course);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { courses } = this.state;
    return (
      <div>
        <div className="edit-form">
          <h4>Tutorial</h4>

          <ul className="list-group">
            <div className="row">
              {courses.map((course, index) => (
                <div className="col-4" key={index}>
                  <div className="card text-white bg-primary">
                    <div className="card-body">
                      <h4 className="card-title">{course.title}</h4>
                      <p className="card-text">{course.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export default function DemoApiFunction(props) {
//   const [course, setCourse] = useState([]);

//   useEffect(() => {
//     // function run after data render
//     async function fetchAPI() {
//       try {
//         const result = await axios({
//           url: "http://localhost:8080/api/course",
//           method: "GET",
//         });
//         //setState mangPhim
//         setCourse(result.data.Course);
//         console.log(result.data);
//       } catch (errors) {
//         console.log(errors);
//       }
//     }
//     fetchAPI();
//   }, []);

//   const renderCourse = () => {
//     return course.map((co, index) => {
//       return (
//         <div className="col-4" key={index}>
//           <div className="card text-white bg-primary">
//             <div className="card-body">
//               <h4 className="card-title">{co.title}</h4>
//               <p className="card-text">{co.description}</p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <h3 className="text-center"> List Course</h3>
//       <div className="row">{renderCourse()}</div>
//     </div>
//   );
// }
