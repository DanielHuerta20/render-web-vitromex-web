import React from "react";

export const CardSeries = ({ data }) => {
  return (
    <div className="col-span-2 medium:col-span-3 flex justify-center items-center">
      <div className="h-full w-full flex flex-col gap-y-2 xsmall:px-2 small:px-2 medium:px-3">
        <div className="rounded-xl overflow-hidden imgCardSeries">
          <img src={data.img} alt="serie" className="h-full w-full object-cover" />
        </div>
        <div className="">
          <div>
            <h1>{data.name}</h1>
          </div>
          <div>texto</div>
        </div>
      </div>
    </div>
  );
};