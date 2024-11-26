import React from 'react';
import './StudentProfile.css';
import { FaBirthdayCake, FaBook, FaStar, FaAward, FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaSnapchat } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StudentProfile = ({ student }) => {
  const navigate = useNavigate();

  return (
    <div className="student-profile">
      <div className="profile-card">
        {/* Profile Image */}
        <div className="profile-image">
          <img src={student.picture} alt={`${student.name}'s portrait`} />
          {/* Social Media Links */}
          <div className="social-media">
            <a href={student.telegram} target="_blank" rel="noopener noreferrer">
              <FaTelegram className="social-icon telegram" />
            </a>
            <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href={student.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href={student.snapchat} target="_blank" rel="noopener noreferrer">
              <FaSnapchat className="social-icon snapchat" />
            </a>
          </div>
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
          {/* Back to Main Button */}
          <button
            className="back-to-main"
            onClick={() => navigate('/')}
          >
            Back to Main
          </button>
        </div>
        {/* End of Profile Content */}
      </div>
    </div>
  );
};

export default StudentProfile;