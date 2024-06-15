import React from "react";

const ScrollableSection = ({ children }) => {
  return (
    <div className="overflow-auto p-4overflow-auto h-96 w-full scrollbar p-4 rounded-lg">
      {children}
    </div>
  );
};

export default ScrollableSection;
