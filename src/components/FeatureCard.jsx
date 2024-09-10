import React from "react";

const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div className="flex md:w-[85%] hover:scale-105 hover:transition-all duration-500 items-center mb-6 border backdrop-blur-sm bg-white/10 rounded-sm sm:p-5 p-3">
      <div className="flex-1 flex sm:pr-12">
        {/* Dynamic Icon */}
        <Icon className="h-10 w-10 mr-4" aria-hidden="true" />
        <div>
          <h3 className="sm:text-2xl text-xl font-semibold flex items-center">
            {title}
          </h3>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
