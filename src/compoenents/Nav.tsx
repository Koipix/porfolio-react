import { useEffect, useRef } from 'react';
import './Nav.css';

const Nav = () => {

    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                navRef.current.classList.toggle("sticky", window.scrollY > 0);
            }
        }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    }, []);

  return (
    <nav ref={navRef} className='navbar'>
      <h1 className='logo'>koi.<span>pix</span>()</h1>

      <ul>
        <li><a href="#" className="active">.home()</a></li>
        <li><a href="#">.aboutme()</a></li>
        <li><a href="#">.projects()</a></li>
      </ul>
    </nav>
  )
}

export default Nav
