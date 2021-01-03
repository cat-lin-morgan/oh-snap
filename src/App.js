
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
// import CoolComponent from './components/CoolComponent'

function App() {
  const [categories] = useState([
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects'},
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? ( //ternary operator
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About> 
          </>
        ) : (
          <ContactForm></ContactForm> 

        )}
      </main>
      {/* <CoolComponent>
        <p>Child 1</p>
        <p>Child 2</p>
        <h1>Child 2</h1>
      </CoolComponent> */}
    </>
  );
}

export default App;
