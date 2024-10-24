import React from 'react';

const generateRandomStars = (count: number) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 1; // Random size between 1 and 5
    const color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`; // Random opacity between 0.2 and 1
    const top = Math.random() * 100; // Random position top (percentage)
    const left = Math.random() * 100; // Random position left (percentage)

    stars.push({
      size,
      color,
      top: `${top}%`,
      left: `${left}%`,
    });
  }

  return stars;
};

const Stars = ({ count }:{count: number}) => {
  const stars = generateRandomStars(count);

  return (
    <>
      {stars.map((star, index) => (
        <svg key={index} className='absolute w-full h-full'>
            <circle
              cx={star.left}
              cy={star.top}
              r={star.size}
              fill={star.color}
            />
        </svg>
      ))}
    </>
  );
};

export default Stars;
