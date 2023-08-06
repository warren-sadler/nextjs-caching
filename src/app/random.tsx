"use client";

import React from "react";

export function Random() {
  const [state] = React.useState(Math.random());
  return <h1 className="text-2xl mb-2 text-green-300">{state}</h1>;
}
