import './styles/HeroCarousel.css'
import {useState, useEffect} from 'react'

import image1 from '../images/hero-images/football-squad.jpg'
import image2 from '../images/hero-images/image2.jpg'
import image3 from '../images/hero-images/image3.jpg'

const images = [image1, image2, image3]

export function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect( ()=> {
        const interval = setInterval(()=> {
            nextSlide()
        }, 3000)
        return ()=> clearInterval(interval)
    }, [currentIndex])

    function nextSlide() {
        setCurrentIndex(prevIndex => prevIndex===images.length-1 ? 0 : prevIndex+1)
    }
    function prevSlide() {
        setCurrentIndex(prevIndex => prevIndex===0 ? images.length-1 : prevIndex-1)
    }

    return (
        <div className='carousel-container'>
            <button className='arrow prev' onClick={prevSlide}>&#10094;</button>

            <img 
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className='hero-image'
            />

            <button className='arrow next' onClick={nextSlide}>&#10095;</button>

            <div className="indicators">
                {images.map((_, index) => (
                <span
                    key={index}
                    className={index === currentIndex ? 'active' : ''}
                    onClick={() => setCurrentIndex(index)}
                />
                ))}
            </div>

        </div>
    )
}

export default HeroCarousel