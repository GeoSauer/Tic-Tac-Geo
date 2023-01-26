import React from 'react';
import Box from './Box';

export default function Board({ boxes, onClick }) {
  return (
    <div className="board">
      <div>
        <Box
          value={boxes[0]}
          onClick={() => {
            onClick(0);
          }}
        />
        <Box
          value={boxes[1]}
          onClick={() => {
            onClick(1);
          }}
        />
        <Box
          value={boxes[2]}
          onClick={() => {
            onClick(2);
          }}
        />
      </div>
      <div>
        <Box
          value={boxes[3]}
          onClick={() => {
            onClick(3);
          }}
        />
        <Box
          value={boxes[4]}
          onClick={() => {
            onClick(4);
          }}
        />
        <Box
          value={boxes[5]}
          onClick={() => {
            onClick(5);
          }}
        />
      </div>
      <div>
        <Box
          value={boxes[6]}
          onClick={() => {
            onClick(6);
          }}
        />
        <Box
          value={boxes[7]}
          onClick={() => {
            onClick(7);
          }}
        />
        <Box
          value={boxes[8]}
          onClick={() => {
            onClick(8);
          }}
        />
      </div>
    </div>
  );
}
