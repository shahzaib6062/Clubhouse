import React from "react";

export default function Planlayout({ children }) {
  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
      {children}
    </div>
  );
}
