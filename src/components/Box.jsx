import React from 'react';

export default function Box({ box }) {
  console.log({ box });
  return <button className="btn">{box.content}</button>;
}
