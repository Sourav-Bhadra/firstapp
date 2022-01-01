import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import {books} from './books'; // export similar name e.g: books
import Book from './Book'; // default export
// function Greeting(){
//   return <h1>This is sourav</h1>;
// }
// ReactDOM.render(<Greeting/>, document.getElementById('root'));
// ------------------------------------------------------------------------------- //
// function Greeting(){
//   return(
//     <div>
//       <Person />
//       <Message />
//     </div>  
//   ); 
// }
// const Person = () => <h1>Sourav</h1>
// const Message = () => <p>this is my name</p>

 //-------------------------------------------------Book Project----------------------------------------------------------------//

//  function BookProject(){
//   return(
//     <section className='booklist'>
//       <Book job='developer' />
//       <Book title='random title' number={22} />
//     </section>  
//   ); 
// }

// Book Component Create [
// const title = 'How to Read a Book'
// const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cVt3VvA7eoZSDxlnI2GjWyoC4OfItpvn5Q&usqp=CAU';
// const Book = (props) => {
//   console.log(props);
//   return(
//     <article className='book'>
//       <Image />
//       <Title />
//       <Auth />
//      inline css --->
//       <p style={{color:'#617d98',marginTop:'0.25rem'}}>Price:{9+9}$</p>
//       <p>{props.title}</p>
//       <p>{props.job}</p>
//       <p>{props.number}</p>
//     </article>
//   );
// }
// const Image = () => (
// <img 
// src={img} alt={title} 
// />
// );

// jsx javascript
// const Title = () => <h1>{title.toUpperCase()}</h1>

// inline jsx CSS applied
// const Auth = () => <h4 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'0.25rem' }}> Mortimer J.Adler(Author), Charles Van Doren(Author)</h4>

// ]
// ------------------------------------------------------------------------------------------------------------------------ //
// ReactDOM.render(<BookProject />, document.getElementById('root'));



// simple list------>
// const names = ['john','peter','susan']
// const newNames = names.map((name)=>{
//   return <h1>{name}</h1>
// });
// console.log(newNames)

 function BookProject(){
  return(
    <section className='booklist'>
      {
        /* here book is any random name parameter */
        books.map((book)=>{
        /* we also can use {...book} then we just use props not props.boook */
        return <Book key={book.id} boook={book}></Book>
      })
      };
    </section>  
  ); 
}




ReactDOM.render(<BookProject />, document.getElementById('root'));