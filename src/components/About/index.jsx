import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass,setLetterClass] = useState('text-animate')

     useEffect(() => {
            const timeout = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
            return () => clearTimeout(timeout)
        }, [])

    return (
       <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['H','a','k','k','ı','m','d','a']}
                    idx={15}
                    />
                </h1>
                <p>Merhaba
Bilgisayar ile uğraşmayı seven biri olarak, yeni şeyler öğrenmek için 2024 yılında yazılımla tanıştım.
Yazılımın temel mantığını öğrendikçe kendimi geliştirmeye başladım.Amacım, teknolojik gelişmeleri takip etmek ve dokümanları okuyarak yazılım alanında elimden gelenin en iyisini yapmaktır.
Şimdilik Frontend, React alanlarında geliştirmeye devam ediyorum. Bireysel veya ekip olarak uyumlu bir şekilde kullanıcı dostu projeler üretmek hedefimdir.Projelerime Github adresimden ulaşabilirsiniz.</p>
                
<h1>
                    <AnimatedLetters
                    strArray={['Y','e','t','e','n','e','k','l','e','r']}
                    idx={15}
                    />
                </h1>
                <p>HTML, CSS, SCSS, Bootstrap,JavaScript,React,Redux, Redux Toolkit ve Firebase ile modern ve responsive web uygulamaları geliştirmek.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                   <FontAwesomeIcon icon={faHtml5} color='#DD0031'/>
                    </div>
                    <div className='face2'>
                   <FontAwesomeIcon icon={faCss3} color='#F06529'/>
                    </div>
                    <div className='face3'>
                   <FontAwesomeIcon icon={faBootstrap} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                   <FontAwesomeIcon icon={faJs} color='#EFD81D'/>
                    </div>
                    <div className='face5'>
                   <FontAwesomeIcon icon={faReact} color='#28A4D9'/>
                    </div>
                    <div className='face6'>
                   <FontAwesomeIcon icon={faGitAlt} color='#DD0031'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About