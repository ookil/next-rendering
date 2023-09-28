import React from "react";
import { RefreshButton } from "./RefreshButton";

const getCurrentDateTime = async (city: string): Promise<string> => {
  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Europe/${city}`,
    { next: { tags: ["dynamic"] } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};

const DynamicRender = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const { city } = searchParams;
  const data = await getCurrentDateTime(city);

  return (
    <div>
      <h1>Dynamic Render</h1>
      <p>{data}</p>
      <RefreshButton />
    </div>
  );
};

export default DynamicRender;
