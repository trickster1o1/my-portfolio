import './ApiTest.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
function ApiTest() {

    const [weather,setWeather] = useState([]);
    const [data,setData] = useState([]);
    useEffect(() => {
        document.getElementById('wth').classList.add('api-nav-active');
        let fetchIp = async () => {
            await fetch('https://api.ipify.org/?format=json')
            .then(res=>res.json())
            .then((r)=>{
                fetch("https://weatherapi-com.p.rapidapi.com/current.json?q="+r.ip, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                        "x-rapidapi-key": "a5bb063c13msh224ca114d820861p125720jsn3e6cc3d310c1"
                    }
                }).then((res)=>res.json())
                .then((r)=>{
                    setWeather(r);
                })
                .catch((error)=>console.log(error));
            })
            .catch((error)=>console.log(error));
        }
        fetchIp();
    }, []);

    let showNews = async () => {
        document.getElementById('wth').classList.remove('api-nav-active');
        document.getElementById('gam').classList.add('api-nav-active');
        document.getElementById('weather').style.display = 'none';
        document.getElementById('gameNews').style.display = 'flex';
        document.getElementById('news-load').style.display = 'block';


        await fetch("https://gaming-news.p.rapidapi.com/news", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "gaming-news.p.rapidapi.com",
                "x-rapidapi-key": "a5bb063c13msh224ca114d820861p125720jsn3e6cc3d310c1"
            }
        }).then((res)=>res.json())
        .then((r)=>{
            setData(r);
            
        }).catch((error)=>console.log(error));
        
    }

    let showWeather = async () => {
        document.getElementById('wth').classList.add('api-nav-active');
        document.getElementById('gam').classList.remove('api-nav-active');
        document.getElementById('weather').style.display = 'block';
        document.getElementById('gameNews').style.display = 'none';

        await fetch('https://api.ipify.org/?format=json')
            .then(res=>res.json())
            .then((r)=>{
                fetch("https://weatherapi-com.p.rapidapi.com/current.json?q="+r.ip, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                        "x-rapidapi-key": "a5bb063c13msh224ca114d820861p125720jsn3e6cc3d310c1"
                    }
                }).then((res)=>res.json())
                .then((r)=>{
                    setWeather(r);
                })
                .catch((error)=>console.log(error));
            })
            .catch((error)=>console.log(error));
    }

    let [pageNumber, setPageNumber] = useState(0);
    let perPage = 5;
    let pagesVisited = pageNumber * perPage;
       
        
        
    
    let  displayProd;
    let pageCount;

    if(data && data[0]) {
         displayProd =  data.slice(pagesVisited, pagesVisited+perPage).map((news)=>
            { return(
                <div className='news'>
                                <div className='news-title'>{news.title}</div>
                                <div className='news-src'>@{news.source}</div>
                                <div className='news-url'><a href={news.url} target='_black'>{news.url}</a></div>
                </div>
                )
            });
        pageCount = Math.ceil(data.length/perPage);
    } else {
        pageCount = 0;
        displayProd = "Nothing here";
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return(
        <>
        
            <nav id="back"><Link to='/'><span>Back</span></Link></nav>
            <div className="api-nav">
                <nav id='wth' onClick={showWeather} >Weather</nav>
                <nav id='gam' onClick={showNews}>Game News</nav>
                <nav>another 1</nav>
            </div>
            <div id='weather'>
            { weather && weather.location ?
                <div className='api-body'>
                    <div> <h2>{weather.location.country + ", " + weather.location.name}</h2> </div>
                    <div  className='we-span'><img alt="error404" src={weather.current.condition.icon} />
                        <div>{weather.current.temp_c}&deg;C</div>
                        <span style={{'color':'rgba(0,0,0,0.5)','fontSize':'10pt','display':'block'}}>{weather.current.condition.text}</span>
                    </div>
                    <div className='we-calc'>
                        <div>Humidity: {weather.current.humidity}</div>
                        <div>Wind: {weather.current.wind_mph+"mph"}</div>
                        <div>Gust: {weather.current.gust_mph+"mph"}</div>
                    </div>
                </div> 
                : <div className='load-symb'><img src="/img/loadin.svg"  alt="error404" /></div>
            }
            </div>
            <div id='gameNews'>
            { data ?
                <div className='api-body'>
                    { displayProd && displayProd === 'Nothing here' ? <div className='load-symb' id='news-load' ><img src="/img/loadin.svg"  alt="error404" /></div> : displayProd}
                <div style={{'display':'flex','justifyContent':'center','alignItems':'center','minHeight':'7em'}}>
                {  pageCount > 1 ?
                    <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel = {"Next"}
                    pageCount = {pageCount}
                    onPageChange = {changePage}
                    containerClassName = {"pagi-div"}
                    previousLinkClassName = {"page-link"}
                    nextLinkClassName = {"page-link"}
                    disabledClassName = {"page-item dissabled"}
                    disabledLinkClassName = {"page-link"}
                    activeClassName = {"page-item active"}
                    pageClassName = {"page-item"}
                    pageLinkClassName = {"page-link"}
                    /> : null
                }
                </div>
                </div> 
                : "LOADING..."
            }
            </div>
        </>
    )
}

export default ApiTest;