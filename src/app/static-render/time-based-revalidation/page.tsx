import React from "react";

const getCurrentDateTime = async (): Promise<string> => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Warsaw",
    { next: { revalidate: 3 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};

const TimeBasedRevalidation = async () => {
  const data = await getCurrentDateTime();

  return (
    <div>
      <h1>Time Bassed Revalidation</h1>
      <p>Time in Warsaw</p>
      <p>{data}</p>
    </div>
  );
};

export default TimeBasedRevalidation;
