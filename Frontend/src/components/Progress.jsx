import React from "react";

const Progress = ({ progres = 0, total = 5, color, bgcolor }) => {
  return (
    <div className="flex gap-1.5">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded transition-all ${
            index < progres ? "bg-green-700" : "bg-green-100"
          } `}
          style={{
            backgroundColor:
              index < progres
                ? color || "rgba(1,1,1,1)"
                : bgcolor || "rgba(1,1,1,0.1",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Progress;
