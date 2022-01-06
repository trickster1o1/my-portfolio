import './main.css';
import './mobile.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';
function Front() {
    useEffect(()=>{
        document.getElementById('hm').classList.add('active');
        const showtxt = gsap.timeline({defaults: {duration: '.1'}});
        showtxt.from('.txt-appear', {
            y: '52%',
            stagger:.2
        });
        showtxt.to('.welcome-wipe', {
                bottom: '200%',
                duration: '1.5',
                delay: .2
        });
        showtxt.to('.welcome-screen',{ 
            display:'none',
            delay:-1.2
        })
    },[]);

    const navigate = useNavigate();
    function submitEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_l75k0zr', 'template_sutqezz', e.target, 'user_n516TXiTaLINT6nf1PZHU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }
    const fade = gsap.timeline({defaults: {duration: '1'}});
    let magic = (actLink) => {     
            if(actLink === 'about') {
                
                    document.getElementById('hm').classList.remove('active');
                    document.getElementById('cont').classList.remove('active');
                    document.getElementById('ab').classList.add('active');

                    let abt = document.querySelectorAll('.abt-cont');
                    let cont = document.querySelectorAll('.contact-cont');

                    abt.forEach(a => {
                        a.style.display = 'block';
                    });

                    cont.forEach(c => {
                        c.style.display = 'none';
                    })
                
                if(window.innerWidth > 450) {
                    fade.to('.t-1',{right:'110%',top:'-10%'});
                    fade.to('.t-2',{right:'110%',delay:-1});
                    fade.to('.t-3',{right:'110%',top:'90%',delay:-1});
                    fade.to('.t-4',{right:'-20%',top:'-10%',delay:-1});
                    fade.to('.t-5',{right:'-20%',delay:-1});
                    fade.to('.t-6',{right:'-20%',top:'90%',delay:-1});
                    fade.to('.front-cont',{
                        top:'0',
                        left: '8%',
                        scale: 0.8,
                        delay:-1
                    });   
                    
                    if(fade.reversed()) {
                        fade.play();
                    }
                }
            document.getElementById('abt').style.display = 'block';
            document.getElementById('abt').classList.remove('fout');
            document.getElementById('abt').classList.add('fin');

        } else if(actLink === 'home') {
            document.getElementById('ab').classList.remove('active');
            document.getElementById('cont').classList.remove('active');
            document.getElementById('hm').classList.add('active');
            
            if(!fade.reversed()){
                fade.reverse(1);
            }
            

            document.getElementById('abt').classList.remove('fin');
            document.getElementById('abt').classList.add('fout');
            
        } else {
            document.getElementById('ab').classList.remove('active');
            document.getElementById('hm').classList.remove('active');
            document.getElementById('cont').classList.add('active');
            
            let abt = document.querySelectorAll('.abt-cont');
            let cont = document.querySelectorAll('.contact-cont')

            abt.forEach(a => {
                a.style.display = 'none';
            });

            cont.forEach(c => {
                c.style.display = 'block';
            })

            if(window.innerWidth > 450) {
                fade.to('.t-1',{right:'110%',top:'-10%'});
                fade.to('.t-2',{right:'110%',delay:-1});
                fade.to('.t-3',{right:'110%',top:'90%',delay:-1});
                fade.to('.t-4',{right:'-20%',top:'-10%',delay:-1});
                fade.to('.t-5',{right:'-20%',delay:-1});
                fade.to('.t-6',{right:'-20%',top:'90%',delay:-1});
                fade.to('.front-cont',{
                    top:'0',
                    left: '8%',
                    scale: 0.8,
                    delay:-1
                });   
                
                if(fade.reversed()) {
                    fade.play();
                }
            }

            document.getElementById('abt').style.display = 'block';
            document.getElementById('abt').classList.remove('fout');
            document.getElementById('abt').classList.add('fin');
        }
        
    }
    function returnApi() {
        navigate('/apiTest');
    }
    return(
        <>  
            <div className='welcome-screen'>
                <div>
                    <span className='txt-appear'>W</span><span className='txt-appear'>E</span><span className='txt-appear'>L</span><span className='txt-appear'>C</span><span className='txt-appear'>O</span><span className='txt-appear'>M</span><span className='txt-appear'>E</span> <span className='txt-appear'>T</span><span className='txt-appear'>O</span> <span className='txt-appear'>M</span><span className='txt-appear'>Y</span> <span className='txt-appear'>P</span><span className='txt-appear'>O</span><span className='txt-appear'>R</span><span className='txt-appear'>T</span><span className='txt-appear'>F</span><span className='txt-appear'>O</span><span className='txt-appear'>L</span><span className='txt-appear'>I</span><span className='txt-appear'>O</span> 
                    <div className='txt-block'></div>
                </div>
            </div>
            <div className='welcome-wipe'>
            </div>
            <div className="navbar">
            <div className='nav-cont-1'>
                <ul>
                    <li className='nav' onClick={()=>magic('home')} id="hm">Home</li>
                    <li className='nav' onClick={()=>magic('about')} id="ab">About</li>
                    <li className='nav' onClick={()=>magic('contact')} id='cont'>Contacts</li>
                </ul>
                <nav className='api-link' onClick={returnApi}><Link to='/apiTest'>APItest</Link></nav>
            </div>
            </div>
            <div className='container-fluid element-body'>
                <div className='main-body'>
                    <div className='front-cont' id="fc">
                        <img src="/img/mainPic.png" alt="error404" />
                    </div>
                    <div className='f-about'>
                            <div  id="abt"><h2 align='center' className='abt-cont'>About</h2><h2 className='contact-cont' align='center'>Contact</h2>
                                <p className='abt-cont'>
                                    <span className='leftSpace'>A</span> web developer enthusiast trying to bring ideas into life. Designing the web UI is not my 
                                    strong suit but I'm able to bring any idea you may have to vurtuality.<br /><br />
                                    <span className='leftSpace'>T</span>hings i'm good with: ReactJS , Laravel, and raw HTML/CSS/JS. Some add on specialities: Photoshop and 
                                    Illustrator.
                                </p>
                                <p align='center' className='contact-cont'>
                                    <form onSubmit={submitEmail}>
                                        <input type="text" placeholder='Name' name='name' /> <br />
                                        <input type="text" placeholder='Subject' name='subject' /> <br />
                                        <input type="text" placeholder='Email' name='email' /> <br />
                                        <textarea placeholder='Message' name='message' /> <br />
                                        <div align='right'>
                                        <input type="submit" />
                                        </div>
                                    </form>
                                </p>
                            </div>
                    </div>

                   <div className='talent t-1' id='t1'>
                    </div>

                    <div className='talent  t-2'  id='t2'>
                    </div>

                    <div className='talent  t-3'  id='t3'>
                    </div>

                    <div className='talent t-4'  id='t4'>
                    </div>

                    <div className='talent  t-5'  id='t5'>
                    </div>

                    <div className='talent  t-6'  id='t6'>
                    </div>
                    
                </div>

            </div> 
        </>
    );
}

export default Front;