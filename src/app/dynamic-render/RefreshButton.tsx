"use client";
import React from "react";

const handleRefresh = async () => {
  await fetch("http://localhost:3000/api/revalidate?tag=dynamic");
};

export const RefreshButton = () => {
  return <button onClick={handleRefresh}>Refresh Button</button>;
};
