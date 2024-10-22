const ProgramCard = ({ title, ageRange, imageUrl }) => {
    return (
      <div className="flex flex-col">
        <div className="rounded-tr-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-6">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-[280px] object-cover"
          />
        </div>
                <h3 className="text-orange text-[28px] font-medium mb-2">
          {title}
        </h3>
        <p className="text-black text-base">
          For ages {ageRange}
        </p>
      </div>
    );
  };

export default ProgramCard;