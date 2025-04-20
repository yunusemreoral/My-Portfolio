import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser"
import {toast} from 'react-toastify'

const Contact = () => {

    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef()

     useEffect(() => {
            const timeout = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
            return () => clearTimeout(timeout)
        }, [])


const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
        'service_z1fz2gi',
        'template_bvgpmlw',
        refForm.current,
        'qvHH8t8zY0EcpFNYu'
    )
    .then(
        () => {
          toast.success('Mesajınız iletildi.')
          refForm.current.reset()
        },
        () => {
            toast.error('Mesajınız iletilemedi,tekrar deneyiniz.')  
        }
    )
}

    return (
        <>
        <div className='container contact-page'>
<div className='text-zone'>
<h1>
<AnimatedLetters 
letterClass={letterClass}
strArray={['İ','l','e','t','i','ş','i','m','e', ' ','G','e','ç']}
idx={15}
/>

</h1>
<p>
İletişim için aşağıdaki formu doldurabilirsiniz. Mesajınız tarafıma ulaştığında en kısa sürede dönüş sağlayacağım. İlginiz için teşekkür ederim.   
</p>

<div className='contact-form'>
<form ref={refForm} onSubmit={sendEmail}>
    <ul>
        <li className='half'>
            <input type="text" name='name' placeholder='İsim' required />
        </li>
        <li className='half'>
            <input type="email" name='email' placeholder='Email' required />
        </li>
        <li>
            <input placeholder="Konu" type="text" name="subject" required/>
        </li>
        <li>
            <textarea placeholder='Mesajınız' name='message' required></textarea>
        </li>
        <li>
            <input type='submit' className='flat-button' value="GÖNDER" />
        </li>
    </ul>
</form>
</div>
</div>
<div className='contact-details-right'>
    <div className='info-card'>
        <i className='fas fa-phone-alt'></i>
        <h4>Telefon</h4>
        <p>0542 398 79 80</p>
    </div>

    <div className='info-card'>
        <i className='fas fa-envelope'></i>
        <h4>Email</h4>
        <p>yunusemreoral@hotmail.com.tr</p>
    </div>

</div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact