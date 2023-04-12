import React from "react";
import eidImg from "../../../assets/images/eidImg.png";
import poilaBaishakImg from "../../../assets/images/poilaBaishakImg.png";

const Event = () => {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-center pt-10">Specials Events</h1>
      <div className="divider bg-primary h-[2px]  mx-auto w-60"></div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={poilaBaishakImg} className="max-w-md start-0 w-3/6 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Pohela Boishakh</h1>
            <p className="py-6">
              The Bengali New Year celebrations is known as ‘Poila Baisakh.’ in the vernacular language. It’s the first
              day of the Bengali New Year, which usually falls in mid-April every year. The occasion calls for
              celebrations and what better way to celebrate with great food.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={eidImg} className="max-w-md w-3/6 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">Eid-ul-Fitr</h1>
            <p className="py-6">
              This marks the celebration at the end of the fasting month of Ramadan. Bangladeshis mark this day by
              taking part in a morning prayer with fellow Muslims and breaking their fast with sumptuous food.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
