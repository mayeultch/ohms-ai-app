import React, { useState, useCallback, useEffect } from 'react';

function DraggableSvg({ id, content, initialX, initialY, onMove }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    const element = e.currentTarget;
    const bbox = element.getBoundingClientRect();
    const offsetX = e.clientX - bbox.left;
    const offsetY = e.clientY - bbox.top;
    setOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      setPosition({ x: newX, y: newY });
      onMove(id, newX, newY);
    }
  }, [id, isDragging, offset, onMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default DraggableSvg;