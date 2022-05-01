import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const ContactMePage = () => {
    return (
        <div className="contact_me">
            <div className='contact_me__container'>
                <div className='contact_me__container-half contact_me__container-half--first'>
                    <h1 className='contact_me__title'>Let's chat</h1>
                    <div className='contact_me__cta-email'>
                        <div className='contact_me__cta-email--icon_container'>
                            <AiOutlineMail className='contact_me__cta-email--icon'/>
                        </div>
                        <div>
                            <div style={{fontSize:'2rem'}}>
                                Contact me at
                                <br/>
                                <label className='contact_me__cta-email--email'>xcadencunningham@gmail.com</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width:'50%', height:'100%', backgroundColor:'blue', display:'flex', justifyContent:'center'}}>

                </div>
            </div>
        </div>
    );
};

export default ContactMePage;
