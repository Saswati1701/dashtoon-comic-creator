import React from 'react'

const ComicView = ({ inputPrompts, setInputPrompts }) => {
  const handleRemoveImage = (id) => {
    // Implement logic to remove the image at the given index
    const updatedPrompts = inputPrompts.filter((item, i) => item.id!==id);
    setInputPrompts(updatedPrompts);
  };

  const inputPrompts2 = [
    {
        id: 1,
        text: "asdfghjk",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
    },
    {
      id: 2,
      text: "asdfghjk",
      imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
  },
  {
    id: 3,
    text: "asdfghjk",
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
},
{
  id: 4,
  text: "asdfghjk",
  imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
},
{
  id: 5,
  text: "asdfghjk",
  imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
},
{
  id: 6,
  text: "asdfghjk",
  imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
},

  ]

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