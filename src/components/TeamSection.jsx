import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './TeamSection.css'; // For custom animations

const TeamMember = ({ member, onClick }) => (
  <div
    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
    onClick={() => onClick(member)}
  >
    <img
      src={member.photo}
      alt={member.name}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-black bg-opacity-75 text-white">
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-sm">{member.position}</p>
    </div>
  </div>
);

const PopupModal = ({ member, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 fade-in">
    <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto hide-scrollbar">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
      >
        <FaTimes size={24} />
      </button>
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover rounded-lg mb-4 fade-in"
      />
      <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
      <p className="text-lg font-semibold mb-2">{member.position}</p>
      <p className="text-gray-600 mb-4">{member.bio}</p>
      <div className="text-sm text-gray-500">
        <p>Email: {member.email}</p>
        <p>Phone: {member.phone}</p>
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'John is a visionary leader with over 15 years of experience in the tech industry.',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'Jane is an innovative technologist with a passion for cutting-edge solutions.',
      email: 'jane@example.com',
      phone: '+1 (555) 987-6543'
    },
    {
      name: 'Mike Johnson',
      position: 'COO',
      photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'Mike excels in streamlining operations and driving business efficiency.',
      email: 'mike@example.com',
      phone: '+1 (555) 246-8135'
    },
    {
      name: 'Emily Brown',
      position: 'CMO',
      photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      bio: 'Emily is a creative marketing strategist with a keen eye for brand development.',
      email: 'emily@example.com',
      phone: '+1 (555) 369-2580'
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    // Add fade-out effect
    const popup = document.querySelector('.fade-in');
    popup.classList.add('fade-out');
    setTimeout(() => {
      setSelectedMember(null);
    }, 300); // Delay to match fade-out duration
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} onClick={handleMemberClick} />
        ))}
      </div>
      {selectedMember && (
        <PopupModal member={selectedMember} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default TeamSection;
