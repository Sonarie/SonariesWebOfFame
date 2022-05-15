import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: "Phase 1",
      description:
        "HTML, CSS, and Git, Advanced CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs",
    },
    { 
      name: "Phase 2", 
      description: "Node.js, OOP, Express.js, SQL, ORM, MVC" 
    },
    { 
      name: "Phase 3", 
      description: "Computer Science, NoSQL, PWAs, React, MERN, State" 
    },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
