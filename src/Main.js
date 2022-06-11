import './Main.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'



function Main({page}){
    console.log(page);
return(
    <div className='Main'>

        <div className='profile'>
            <div className='image'></div>
        </div>
        <div className='content'>
        {page === 'Home' ? <Home></Home> : page === 'About' ? <About></About> : <Contact></Contact>}
        </div>
    </div>
)


}


export default Main;