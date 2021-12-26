import './main.css';
function Front() {

    let magic = () => {
        const t1 = document.getElementById('t1');
        const t2 = document.getElementById('t2');
        const t3 = document.getElementById('t3');
        const t4 = document.getElementById('t4');
        const t5 = document.getElementById('t5');
        const t6 = document.getElementById('t6');
        const fc = document.getElementById('fc');
        t1.classList.add('ta-1');
        t2.classList.add('ta-2');
        t3.classList.add('ta-3');
        t4.classList.add('ta-4');
        t5.classList.add('ta-5');
        t6.classList.add('ta-6');
        fc.classList.add('fcc');

        document.getElementById('abt').style.display = 'block';
    }
    return(
        <>  
            <div className="navbar">
            <div className='nav-cont-1'>
                <ul>
                    <li className='nav'>Home</li>
                    <li className='nav' onClick={magic}>About</li>
                    <li className='nav'>Contacts</li>
                </ul>
            </div>
            </div>
            <div className='container-fluid element-body'>
                <div className='main-body'>
                    <div className='front-cont' id="fc">
                        <img src="/img/mainPic.jpg" alt="error404" />
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

            </div>
        </>
    );
}

export default Front;