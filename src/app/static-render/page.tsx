import React from "react";

const getCurrentDateTime = async (): Promise<string> => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};

const StaticRender = async () => {
  const data = await getCurrentDateTime();

  return (
    <div>
      <h1>Static Render</h1>
      <p>Time in London</p>
      <p>{data}</p>
    </div>
  );
};

export default StaticRender;
