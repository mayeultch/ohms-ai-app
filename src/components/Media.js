import React, { useState, useEffect, useRef } from 'react';
import BottomAppBar from './BottomAppBar';
import Group554 from './Group554';
import Composants from './Composants';
import DraggableSvg from './DraggableSvg';

function Media() {
  const [showComposants, setShowComposants] = useState(false);
  const [droppedSvgs, setDroppedSvgs] = useState([]);
  const gridRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.code === 'KeyG') {
        event.preventDefault();
        toggleGrid();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function toggleGrid() {
    if (gridRef.current) {
      gridRef.current.classList.toggle('no-grid');
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const svg = event.dataTransfer.getData('text');
    const newSvg = {
      id: Date.now(),
      content: svg,
      x: event.clientX - 60,
      y: event.clientY - 16
    };
    setDroppedSvgs(prevSvgs => [...prevSvgs, newSvg]);
  };

  const handleSvgMove = (id, newX, newY) => {
    setDroppedSvgs(prevSvgs =>
      prevSvgs.map(svg =>
        svg.id === id ? { ...svg, x: newX, y: newY } : svg
      )
    );
  };

  const handleMouseMove = (e) => {
    // Cette fonction est nécessaire pour permettre le déplacement en dehors de la zone du SVG
  };

  const handleMouseUp = () => {
    // Cette fonction est nécessaire pour arrêter le déplacement lorsque le bouton de la souris est relâché
  };

  return (
    <section 
      className="Media" 
      id="grid" 
      ref={gridRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <BottomAppBar />
      <Group554 setShowComposants={setShowComposants} />
      {showComposants && <Composants />}
      {droppedSvgs.map(svg => (
        <DraggableSvg
          key={svg.id}
          id={svg.id}
          content={svg.content}
          initialX={svg.x}
          initialY={svg.y}
          onMove={handleSvgMove}
        />
      ))}
    </section>
  );
}

export default Media;