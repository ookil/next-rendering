import React from "react";

const getCurrentDateTime = async (): Promise<string> => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Brussels",
    { next: { tags: ["datetime"] } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};

const OnDemandTagRevalidation = async () => {
  const data = await getCurrentDateTime();

  return (
    <div>
      <h1>Tag Revalidation</h1>
      <p>Time in Brussels</p>
      <p>{data}</p>
    </div>
  );
};

export default OnDemandTagRevalidation;
