import React, { useEffect, useState } from "react";

const Card = () => {
  const [card, setCard] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (!response) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result.results[0]);
        setCard(result.results[0]);
        console.log(card);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);
  return (
    <>
      {card ? (
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[250px] rounded-[10px] overflow-hidden border-2">
          <div
            className="w-full h-full absolute top-0 left-0 bg-[#1E88E5]"
            style={{
              WebkitClipPath: "polygon(0 0, 14% 0, 48% 100%, 0% 100%)",
              clipPath: "polygon(0 0, 14% 0, 48% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="h-full w-full absolute top-0 left-5 bg-[rgba(0,0,0,0.12)] , -z-10"
            style={{
              WebkitClipPath: "polygon(0 0, 14% 0, 48% 100%, 0% 100%)",
              clipPath: "polygon(0 0, 14% 0, 48% 100%, 0% 100%)",
            }}
          ></div>
          <div className="absolute w-[162px] h-[161px] left-0 top-0 bg-[#ECEFF1] rounded-[50%] mt-[50.5px] ml-[35px] "></div>
          <img
            className="absolute w-[150px] h-[150px] mt-[55px] ml-[40px] rounded-full"
            src={card?.picture?.large}
          />
          <div className=" absolute right-0 mr-[48px] mt-[45px] max-w-[230px] text-center">
            <div className="text-[#263238] text-3xl font-semibold flex gap-3">
              <p> {card?.name?.first}</p>
              <p> {card?.name?.last}</p>
            </div>
            <p className="mt-[10px] text-start">
              {card?.gender?.toUpperCase()}
            </p>
            <p className="mt-[10px] text-start ">{card?.phone}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Card;
