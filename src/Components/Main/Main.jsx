import React, { useEffect } from "react";
import './main.css'
import {HiOutlineLocationMarker} from "react-icons/hi"
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventures activites'
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Pichu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Machu Picchu , Ancient fortress city of the Incas in the Andes Mountains, south-central Peru. Perched near Cuzco in a narrow saddle between two sharp peaks, at an elevation of 7,710 ft (2,350 m), it escaped detection by the Spaniards, and its existence was made known only in 1911 by U.S. explorer Hiram Bingham.'
        },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: "he Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world's largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc."
        },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside. Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world's largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc."
        },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: "Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level. Guanajuato was founded in 1554 and given city status in 1741."
        },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Cinque-Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: "Cinque Terre, which means Five Lands, comprises the five small coastal villages of Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso located in the Italian region of Liguria. They are listed on the UNESCO World Heritage List."
        },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Angkor-Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$780',
        description: "Angkor Wat is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple. Spread across more than 400 acres, Angkor Wat is said to be the largest religious monument in the world. Terre, which means Five Lands, comprises the five small coastal villages of Riomaggiore, Manarola, Corniglia, Vernazza and Monterosso located in the Italian region of Liguria. They are listed on the UNESCO World Heritage List."
        },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'Taj-Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$920',
        description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal."
        },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'Bali-Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$490',
        description: "Bali Indonesia. Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!"
        },


]    
const Main = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])

    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos ='fade-right' className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {/* Here We are going to use map to fetch each destination at once from array elements.This will make sense to us. */}
                {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} data-aos='fade-up' className="singleDestination">
                            {/* Here it will return single id from array */}
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle}  />
                            </div>

                            <div className="cardInfo">
                                <h4 className="desTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{description}</p>
                                </div>
                                <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>

        </section>
    )
}

export default Main
