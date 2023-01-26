import React from 'react';

export default function Box({ onClick, value }) {
  return (
    <button className="btn" onClick={onClick}>
      {value}
    </button>
  );
}
