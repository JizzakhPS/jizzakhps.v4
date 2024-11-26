import React from 'react';
import './StudentProfile.css';
import { FaBirthdayCake, FaBook, FaStar, FaAward } from 'react-icons/fa';

const StudentProfile = ({ student }) => {
  return (
    <div className="student-profile">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={student.picture} alt={`${student.name}'s portrait`} />
        </div>
        {/* Profile Content */}
        <div className="profile-content">
          <h1 className="student-name">{student.name}</h1>
          <div className="birth-date">
            <FaBirthdayCake className="icon" />
            <span>{student.birthDate}</span>
          </div>
          <p className="description">{student.description}</p>
          {/* Statistics Section */}
          <div className="statistics">
            <div className="stat-item">
              <FaBook className="stat-icon" />
              <div className="stat-text">
                <h3>{student.coursesEnrolled}</h3>
                <p>Courses Enrolled</p>
              </div>
            </div>
            <div className="stat-item">
              <FaStar className="stat-icon" />
              <div className="stat-text">
                <h3>{student.gpa}</h3>
                <p>GPA</p>
              </div>
            </div>
            <div className="stat-item">
              <FaAward className="stat-icon" />
              <div className="stat-text">
                <h3>{student.awards}</h3>
                <p>Awards</p>
              </div>
            </div>
          </div>
          {/* End of Statistics Section */}
        </div>
        {/* End of Profile Content */}
      </div>
    </div>
  );
};

export default StudentProfile;