import React, {useState} from 'react'

const ComicView = ({ inputPrompts, setInputPrompts }) => {
  const handleRemoveImage = (id) => {
    // Implement logic to remove the image at the given index
    const updatedPrompts = inputPrompts.filter((item, i) => item.id!==id);
    setInputPrompts(updatedPrompts);
  };

  const [istext, setIsText] = useState(true)
  const handleImageClick = () => {
    setIsText(!istext);
  }

  const handleInputChange = (e, id) => {
    setInputPrompts(inputPrompts.map((input, index)=> {
      if(input.id === id) {
        return {
          ...input,
          image_annotation: e.target.value
        }
      } else {
        return input
      }
    }))
  }


  return (
    <div className='comic-layout'>
        {inputPrompts.length === 0 && <p>Start Creating your comics here</p>}
      <div className='comic-view'>
        {inputPrompts.map((item, index) => (
          <div key={index} className='comic-item'>
            <button className='remove-btn' onClick={() => handleRemoveImage(item.id)}>
              X
            </button>
            { istext ? (<p> 🔴 {item.image_annotation} </p>) : ( <input value={item.image_annotation} onChange={(e)=> handleInputChange(e, item.id)} /> ) }
            <img onClick={handleImageClick} className='image-size' src={item.imageUrl} alt={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicView;