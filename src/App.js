import logo from './logo.svg';
import './App.css';
import { productsList, sculptureList } from './data.js';
import { useState } from 'react';



function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>Upload Image</Button>
  );
}

function App() {
  // event hundler
  function handleClick() {
    alert("Hello")
  }
  return (
    <div className="App">

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Sumbitted!")
      }}>
        <input type='text' name='username' />
        <button type='sumbit'>Sumbit</button>
      </form>

      <div onClick={() => alert("main div")}>
        <div className="Toolbar" onClick={(e) => {
          e.stopPropagation();
          alert('You clicked on the toolbar!');
        }}>
          <Button onClick={(e) => {
            e.stopPropagation();
            alert('Playing!')
          }}
          >Play Movie</Button>
          <Button onClick={(e) => {
            e.stopPropagation();
            alert('Uploading!')
          }}
          >Upload Image</Button>
        </div>
      </div>


      {/* <PlayButton movieName={"Kiki's Delivery Service"}></PlayButton>
      <UploadButton/> */}

      {/* <button onClick={handleClick}>Hello</button>
      <button
        onClick={function handleClick() {
          alert("Hi")
        }}
      >
        Hi
      </button>
      <button onClick={() => alert("Hey")}>Hey</button>
      <AlertButton message={"Uploading.."}><h1>Upload Image</h1></AlertButton> */}
    </div>
  );
}

// 1
// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor == 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>Toggle the lights</button>
//   );
// }

// export default function ColorSwitch({
//   onChangeColor
// }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onChangeColor();
//     }}>
//       Change color
//     </button>
//   );
// }


// export default App;

// /////////////////////////////////////////////////////////////////////////////////////////////////////// 27.03.2024.

// export default function Gallery() {
//   const [index, setIndex] = useState(0); // state variable
//   const [showMore, setShowMore] = useState(false);

//   function handleBackClick() {
//     if (index > 0) {
//       setIndex(index - 1)
//     }
//   }

//   function handleNextClick() {
//     if (index < sculptureList.length - 1) {
//       setIndex(index + 1)
//     }
//   }

//   function handleShowMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleBackClick} disabled={index == 0}>
//         Previous
//       </button>
//       <button onClick={handleNextClick} disabled={index == sculptureList.length - 1}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <button onClick={handleShowMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//     </>
//   );
// }

// export function Counter() {
//   const [number, setNumber] = useState(0);

//   function plusClick() {
//     setNumber(number + 1)
//   }

//   function minusClick() {
//     setNumber(number - 1)
//   }

//   return (
//     <div>
//       <button onClick={minusClick}>-</button>
//       <p>{number}</p>
//       <button onClick={plusClick}>+</button>
//     </div>
//   )
// }

// // 2
// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }



// // 3
// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('');

//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// 4
// export default function FeedbackForm() {

//   function handleClick() {
//     const name = prompt('What is your name?');
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <button onClick={handleClick}>
//       Greet
//     </button>
//   );
// }

export default function Shopify() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleBackClick() {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  function handleNextClick() {
    if (index < product.length - 1) {
      setIndex(index + 1)
    }
  }

  function handleShowMoreClick() {
    setShowMore(!showMore);
  }

  let product = productsList[index];
  return (
    <section className='products'>
      <section className='header'>
        <h1>Shopify</h1>
      </section>

      <h2>Products</h2>
      <section className='cards'>
        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>

        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>

        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>

        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>

        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>

        <section className='card'>
          <div className='img-product'>
            <button onClick={handleBackClick} disabled={index == 0}>/</button>
            <img src={product.images} />
            <button onClick={handleNextClick} disabled={index == product.length - 1}>\</button>
          </div>
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <h6>{product.brand}</h6>
          <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'More..'}</button>
          {showMore && <p>{product.description}</p>}
        </section>
      </section>
      <section className='footer'>
        <p>2024 Shopify</p>
      </section>
    </section>
  )
}