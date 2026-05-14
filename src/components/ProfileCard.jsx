import { useState } from "react";
import SkillBadge from "./SkillBadge";

function ProfileCard({
  user,
  currentUser,
  totalUsers,
  onNext,
  onPrev
}) {

  const [darkMode, setDarkMode] = useState(false);

  const [likes, setLikes] = useState(user.likes);

  function handleThemeToggle() {
    setDarkMode(!darkMode);
  }

  function handleContact() {
    alert(`Contacting ${user.name}`);
  }

  return (

    <div className={`card ${darkMode ? "dark" : "light"}`}>

      <div className="top-section">

        <img
          src={user.image}
          alt={user.name}
          className="profile-img"
        />

        <div className="user-info">

          <h1>{user.name}</h1>

          <h3>{user.title}</h3>

        </div>

      </div>

      <p className="bio">
        {user.bio}
      </p>

      <div className="skills-section">

        <h4>Skills</h4>

        <div className="skills-container">

          {
            user.skills.map((skill, index) => (

              <SkillBadge
                key={index}
                skill={skill}
              />

            ))
          }

        </div>

      </div>

      <div className="bottom-section">

        <div
          className="theme-toggle"
          onClick={handleThemeToggle}
        >
          🌙 {darkMode ? "Dark" : "Light"}
        </div>

        <div className="navigation">

          <button onClick={onPrev}>
            ‹
          </button>

          <span>
            {currentUser + 1}/{totalUsers}
          </span>

          <button onClick={onNext}>
            ›
          </button>

        </div>

        <div
          className="likes"
          onClick={() => setLikes(likes + 1)}
        >
          🤍 {likes}
        </div>

        <button
          className="contact-btn"
          onClick={handleContact}
        >
          ✉ Contact
        </button>

      </div>

    </div>
  );
}

export default ProfileCard;