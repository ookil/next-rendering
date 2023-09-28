import React from "react";

const getCurrentDateTime = async (): Promise<string> => {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Paris");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};

const RouteRevalidation = async () => {
  const data = await getCurrentDateTime();

  return (
    <div>
      <h1>Route Revalidation</h1>
      <p>Time in Paris</p>
      <p>{data}</p>
    </div>
  );
};

export default RouteRevalidation;

export const revalidate = 3600;
