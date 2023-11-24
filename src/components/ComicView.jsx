import React from 'react'

const ComicView = ({ inputPrompts, setInputPrompts }) => {
  const handleRemoveImage = (id) => {
    // Implement logic to remove the image at the given index
    const updatedPrompts = inputPrompts.filter((item, i) => item.id!==id);
    setInputPrompts(updatedPrompts);
  };

  return (
    <div className='comic-layout'>
        {inputPrompts.length === 0 && <p>Start Creating your comics here</p>}
      <div className='comic-view'>
        {inputPrompts.map((item, index) => (
          <div key={index} className='comic-item'>
            <button className='remove-btn' onClick={() => handleRemoveImage(item.id)}>
              X
            </button>
            <img className='image-size' src={item.imageUrl} alt={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicView;