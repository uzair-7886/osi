import React from 'react';
// lets see

const DeanCard = ({ name, description, image }) => {
    return (
        <div className="relative bg-white rounded-xl overflow-hidden">
            {/* Dean Image */}
            <div className="relative h-80">
                <img
                    src={image}
                    alt={name}
                    className="absolute top-0 right-0 w-4x h-full object-cover transform rounded-xl"
                />
            </div>

            {/* Dean Info Card */}
            <div className="-translate-y-10 relative bottom-0 left-0 w-5/6 bg-gray-100 p-6 rounded-tr-3xl rounded-bl-lg -mb-6">
                <h3 className="text-black text-lg font-bold uppercase mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default DeanCard;