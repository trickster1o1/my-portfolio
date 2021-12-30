import './main.css';
import './mobile.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
function Front() {
    useEffect(()=>{
        document.getElementById('hm').classList.add('active');
        console.log(window.innerWidth);
    },[]);
    const fade = gsap.timeline({defaults: {duration: '1'}});
    let magic = (actLink) => {     

        if(actLink === 'about') {
            document.getElementById('hm').classList.remove('active');
            document.getElementById('cont').classList.remove('active');
            document.getElementById('ab').classList.add('active');

            fade.to('.t-1',{right:'110%',top:'-10%'});
            fade.to('.t-2',{right:'110%',delay:-1});
            fade.to('.t-3',{right:'110%',top:'70%',delay:-1});
            fade.to('.t-4',{right:'-20%',top:'-10%',delay:-1});
            fade.to('.t-5',{right:'-20%',delay:-1});
            fade.to('.t-6',{right:'-20%',top:'70%',delay:-1});
            fade.fromTo('.front-cont',{
                width: 'fit-content',
                position: 'relative',
                top:'0',
                left: '40.5%',
            },{
                width:'fit-content',
                position: 'relative',
                top:'0',
                left: '0',
                scale: 0.8,
                delay:-1
            });   
            
            if(fade.reversed()) {
                window.location.reload();
            }


            document.getElementById('abt').style.display = 'block';
            document.getElementById('abt').classList.remove('fout');
            document.getElementById('abt').classList.add('fin');

        } else if(actLink === 'home') {
            document.getElementById('ab').classList.remove('active');
            document.getElementById('cont').classList.remove('active');
            document.getElementById('hm').classList.add('active');
            
            if(!fade.reversed()){
                fade.reverse();
            }
            

            document.getElementById('abt').classList.remove('fin');
            document.getElementById('abt').classList.add('fout');
            
        } else {
            document.getElementById('ab').classList.remove('active');
            document.getElementById('hm').classList.remove('active');
            document.getElementById('cont').classList.add('active');
        }
        
    }
    
    
    return(
        <>  
            <div className="navbar">
            <div className='nav-cont-1'>
                <ul>
                    <li className='nav' onClick={()=>magic('home')} id="hm">Home</li>
                    <li className='nav' onClick={()=>magic('about')} id="ab">About</li>
                    <li className='nav' onClick={()=>magic('contact')} id='cont'>Contacts</li>
                </ul>
            </div>
            {/* <div className='dis'>
                This is it
            </div> */}
            </div>
            <div className='container-fluid element-body'>
                <div className='main-body'>
                    <div className='front-cont' id="fc">
                        <img src="/img/mainPic.png" alt="error404" />
                    </div>
                    <div className='f-about'>
                            <div  id="abt"><h2 align='center'>About</h2></div>
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
                {/* <div className='d1'>Div 1</div>
                <div className='d1'>Div 2</div>
                <div className='d1'>Div 3</div> */}
            </div> 
        </>
    );
}

export default Front;