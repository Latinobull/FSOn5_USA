import { useState } from 'react';

export default function MovieCard(props) {
  return (
    <div style={{ border: '1px solid #888', width: '400px' }}>
      {props.children}
    </div>
  );
}
