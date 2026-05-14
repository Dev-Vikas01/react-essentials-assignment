import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {

  const users = [

    {
      id: 1,
      name: "John doe",
      title: "Product Designer & Frontend Engineer",
      bio:
        "I design and build calm, focused product experiences for fast-moving teams. Currently exploring AI-assisted interfaces, design systems, and high-performance UI engineering.",
      image: "https://i.pravatar.cc/300?img=12",
      skills: ["Design Systems", "React", "TypeScript", "Figma","Accessibility"],
      likes: 128
    },

    {
      id: 2,
      name: "John Carter",
      title: "Full Stack Developer",
      bio:"Passionate about building scalable applications with React, Node.js and cloud technologies.",
      image: "https://i.pravatar.cc/300?img=15",
      skills: ["React","Node.js","MongoDB","Express","AWS"],
      likes: 94
    },

    {
      id: 3,
      name: "Sophia Lee",
      title: "UI/UX Designer",
      bio: "Creating elegant user experiences with modern design principles and interactive interfaces.",
      image: "https://i.pravatar.cc/300?img=32",
      skills: ["UI Design", "Figma", "Prototyping", "Animation", "Branding"],
      likes: 156
    }
  ];

  const [currentUser, setCurrentUser] = useState(0);
  function handleNextUser() {
    setCurrentUser(
      (prev) => (prev + 1) % users.length
    );
  }
  function handlePrevUser() {
    setCurrentUser(
      (prev) => (prev - 1 + users.length) % users.length
    );
  }
  return (
    <div className="app-container">
      <ProfileCard
        user={users[currentUser]}
        currentUser={currentUser}
        totalUsers={users.length}
        onNext={handleNextUser}
        onPrev={handlePrevUser}
      />
    </div>
  );
}

export default App;