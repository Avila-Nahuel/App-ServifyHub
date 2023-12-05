import './ImagenCarousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from './imagen1.jpg'

const ImageCarousel = () => {
  return (
    <Carousel interval={4000} autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={imagen1} alt="Imagen 1" />
        <p className="legend">Descripción de la imagen 1</p>
      </div>
      <div>
        <img src={imagen1} alt="Imagen 2" />
        <p className="legend">Descripción de la imagen 2</p>
      </div>
      <div>
        <img src={imagen1} alt="Imagen 3" />
        <p className="legend">Descripción de la imagen 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;