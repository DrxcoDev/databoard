import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  description?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description, imageUrl }) => {
  return (
    <div>
      <h1 className='text-xl font-medium'>{title}</h1>
      <h2>{subtitle}</h2>
      {description && <p>{description}</p>}
      {imageUrl && <img src={imageUrl} alt={title} />}
    </div>
  );
};

export default Card;