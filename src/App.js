import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}



// function App() {
//   const [categories] = useState([
//     {
//       name: "About Me",
//     },
//     { 
//       name: "Portfolio", 
//     },
//     { 
//       name: "Resume", 
//     },
//     { 
//       name: "Contact", 
//     },
//   ]);
  
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Portfolio currentCategory={currentCategory}></Portfolio>
//             <About></About>
//             <Resume></Resume>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

//export default App;



