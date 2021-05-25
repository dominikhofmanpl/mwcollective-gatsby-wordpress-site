import React from 'react'
import AboutIcon from '../assets/about-icon.svg'
import LogoBackground from '../assets/bg_logo.svg'

const ContactIndex = ({address, telefonemail, open_hours}) => {
    return (
        <div id="kontakt" className="grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 px-12 lg:px-24" style={{
            backgroundImage: `url(${LogoBackground})`,
            backgroundSize: `37.5rem auto`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: `5rem`
        }}>
            <div className="flex flex-col my-auto" data-aos="fade-right">
                <img className="my-5" src={AboutIcon} alt="" srcset="" style={{
                    width: `4rem`
                }}/>
                <h3 className="my-1 mont-black" style={{
                    fontSize: `1.5rem`
                }}>Kontakt</h3>
                <div className="flex flex-col my-5 inriasans-reg">
                    <p className="my-2">{address}</p>
                    <p className="my-2">{telefonemail}</p>
                    <p className="my-2">{open_hours}</p>
                    </div>
            </div>
            <div className="flex flex-col" data-aos="fade-left">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.313567527861!2d16.205043215733028!3d51.39729287961722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f64ee73db83%3A0x48eb668761b332d2!2sMieszka%20I%2C%2059-300%20Lubin!5e0!3m2!1spl!2spl!4v1621174411085!5m2!1spl!2spl" style={{
                    width: `100%`,
                    height: `100%`
                }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactIndex