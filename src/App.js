import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
      name: "Phase_1",
      description:
        "HTML, CSS, and Git, Advanced CSS, JavaScript, Web APIs, Third-Party APIs, Server-Side APIs",
    },
    { 
      name: "Phase_2", 
      description: "Node.js, OOP, Express.js, SQL, ORM, MVC" 
    },
    { 
      name: "Phase_3", 
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
            <Portfolio currentCategory={currentCategory}></Portfolio>
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
