import { useState, useRef } from 'react';
import './NotesContent.css'; // Import the CSS file

export const NotesContent = ({ data }) => {
  const { title, content } = data;
  const [isSelected, setIsSelected] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li className={`content ${isSelected ? 'selected' : ''}`}>
      <h3 onClick={handleToggle}>{title}</h3>
      <ul
        ref={contentRef}
        style={{
          maxHeight: isSelected ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        {content.map((item, id) => (
          <li key={id}>
            <p>
              <strong>{item.type}</strong> {item.text}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
};