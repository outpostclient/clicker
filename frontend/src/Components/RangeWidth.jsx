import React, { useEffect, useState } from "react";

export const RangeWidth = () => {
    const [rangeWidth,setRangeWidth] = useState(10);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setRangeWidth((prevWidth) => {
                if(prevWidth !== 100)
                {
                    return prevWidth + 10;
                }
                else{
                    return 0;
                }
            })
        },1000)

        return() => clearInterval(interval);
    },[])
  return (
    <div className="container">
      <div style={{ height: "25px", width: "100%", backgroundColor: "black" }}>
        <div
          style={{ height: "25px", width: `${rangeWidth}%`, backgroundColor: "blue", transition: "width 0.5s linear" }}
        >
            <div className="text-light fw-bold pb-1 text-center">
            {rangeWidth}
            </div>
        </div>
      </div>
    </div>
  );
};
