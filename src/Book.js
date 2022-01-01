import React from 'react'

// create book object get props value from BookProject function
const Book = (props) => {
  const {img,title,author,price} = props.boook
  // attribute, eventhandler
  // onClick, onMouseOver
  const complexExample = (author) => {
    alert(author);
  }
  const clickHandler = (e) =>{
    console.log(e);
    console.log(e.target)
    alert('hello world');
  }
  return(
    <article className='book' onMouseOver={()=>{
      console.log(title)
    }}>
      <img src ={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <h4>price: {price}</h4>
      <button type='button' onClick={clickHandler}>
        event
      </button>
      <button type='button' onClick={()=>complexExample(author)}> author </button>
    </article>
  );
}

export default Book
