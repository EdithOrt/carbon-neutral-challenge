import React from 'react';
import { Link } from 'react-router-dom';
import TypeWriter from '../../TypeWriter'

import arrow from '../../../assets/images/arrow.png'

const WelcomeSection = () => {
    return ( 
        <div className='intro'>
            <div>
                <div className='typewriter-intro-container'>
                    <TypeWriter 
                    string1 = {"¿Sabías que como empresa puedes neutralizar tu huella de carbono?"}
                    string2 = {"Una tonelada de CO2 equivale a un bono de carbono."}
                    />
                </div>
                <div className="to-projects-container">
                    <div className="phrase-button">
                        <div>
                            <h2>Quiero neutralizar mi huella de carbono</h2>
                        </div>
                        <div>
                        <Link> Proyectos </Link>
                        </div>
                    </div>
                    <div className="arrow">
                        <img alt='arrow' src={arrow}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomeSection;