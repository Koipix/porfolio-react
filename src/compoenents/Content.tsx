import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faSquareXTwitter, faItchIo  } from '@fortawesome/free-brands-svg-icons'

import Typed from 'typed.js';
import './Content.css';
import rika from '../assets/mashiro.png';

const Content = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['"full_stack"', '"game_dev"'],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true
    };
    const typed = new Typed('.auto-type', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main">
        <div className='content'>
            <h1>Hello! My name is</h1>
            <h2>Koi</h2>
            <h3>
                I'm pursuing for:
                <br/>
                .goals(
                <span ref={typedRef} className="auto-type"></span>
                )
            </h3>
        </div>

        <div className="socials">
            <a href="https://github.com/Koipix" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} className='icon'/>
            </a>
            <a href='https://koipix.itch.io/' target='_blank'>
                <FontAwesomeIcon icon={faItchIo} className='icon'/>
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faSquareXTwitter} className='icon'/>
            </a>
        </div>

        <div className="img-box">
            <img src={rika} alt="rika" className="hook"/>
        </div>
    </div>
  );
};

export default Content;
