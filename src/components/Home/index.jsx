import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['Y','u','n','u','s',' ','E','m','r','e',' ','O','R','A','L']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass} >M</span> 
                <span className={`${letterClass} _12`} >e</span>
                <span className={`${letterClass} _13`} >r</span>
                <span className={`${letterClass} _14`} >h</span>
                <span className={`${letterClass} _15`} >a</span>
                <span className={`${letterClass} _16`} >b</span>
                <span className={`${letterClass} _17`} >a</span>{' '}
                <span className={`${letterClass} _18`} >B</span>
                <span className={`${letterClass} _19`} >e</span>
                <span className={`${letterClass} _20`} >n</span>
                 <br/>
               
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>

                </h1>
                <h2>FrontEnd | React Developer</h2>
                <Link to="/contact" className='flat-button' >İLETİŞİME GEÇ</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home