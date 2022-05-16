import React, { useState } from 'react';
import Modal from '../Modal';

const Portfolio = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'Phase 1',
      description:
        'This was the first website I built. Building spanned over many of our Phase 1 learning modules',
      link: "https://Sonarie.github.io/run-buddy/"  
    },
    {
      name: 'DateLime',
      category: 'Phase 1',
      description:
        'This was our Project for Phase 1. This website allowed users to chose a movie and a recipe to create date night'
    },
    {
      name: 'Festival of Nations',
      category: 'Phase 2',
      description:
        'This was our Project for Phase 2. This website allowed users to sign up for a cultural celebration by representing a country and chosing how they were going to showcase'
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {photos.map((image, i) => ( 
          <img
            src={require(`../../assets/small/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

//import Webpages from '../Webpages';
//import { capitalizeFirstLetter } from '../../utils/helpers';

// function Portfolio(props) {
//   //const { currentCategory } = props;
//   return (
//     <section>
//         <h1>Hello World</h1>
//     </section>
//   );
// }
// export default Portfolio;

{/* <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
<p>{currentCategory.description}</p>
<Webpages category={currentCategory.name} /> */}