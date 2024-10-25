import React from 'react';
// lets see

const TutorCard = ({ name, description, image }) => {
  return (
      <div className="relative bg-gray-200 rounded-xl overflow-hidden tracking-widest">
      {/* Tutor Image */}
          <div className="relative h-80">
        <img
          src={image}
          alt={name}
                  className="absolute top-0 right-0 w-4x h-full object-cover transform rounded-xl"
        />
      </div>

      {/* Tutor Info Card */}
          <div className="-translate-y-10 relative bottom-0 left-0 w-11/12 bg-white p-6 rounded-tr-3xl rounded-bl-lg -mb-6">
        <h3 className="text-orange text-lg font-bold uppercase mb-2">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default TutorCard;