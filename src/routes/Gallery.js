import { useState } from 'react';
import kasia from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/kasia.png';
import food from '/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/food.png';

export default function Gallery(){
const [ modalOpen, setModalOpen ] = useState(false);
const [selectedImage, setSelectedImage ] = useState('');
const [ modalDisplay, setModalDisplay ] = useState('none');

function handleImage(imageSrc){
    setSelectedImage(imageSrc);
    setModalOpen(true);
    setModalDisplay('block')
}

function closeModal(){
    setModalOpen(false);
    setModalDisplay('none');
}

    return(
        <div id="gallery">
            <h1>GALLERY</h1>
            <div className="image-container">
            <img src={kasia} onClick={() => handleImage(kasia)}/>
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            <img src={kasia} />
            <img src={food} />
            </div>
  { modalOpen && (
    <div className="image-modal">
        <span className="close-imge" onClick= {closeModal}>&times;</span>
    <img className= "modal-content" src= { selectedImage }></img>
    </div>
  )}
        </div>
        
    )
};
