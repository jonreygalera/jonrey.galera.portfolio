import React from 'react';

const Chip = ({ label }) => {
  return (
    <div class="inline-block bg-blue-500 text-white rounded-full px-4 py-2">
      {label}
    </div>
  );
}

export default Chip;
