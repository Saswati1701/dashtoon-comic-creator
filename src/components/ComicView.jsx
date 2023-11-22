import React from 'react'

const ComicView = ({inputPrompts, setInputPrompts}) => {
  return (
    <div className='comic-view'>
        {inputPrompts.map((item, index)=> {
            return <img width="300px" src={item.imageUrl} alt={item.text} />
        })}
    </div>
  )
}

export default ComicView