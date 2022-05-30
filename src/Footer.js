import './Footer.css'


function Footer(){

    return (
        <div className='Footer'>
            <div className='footer-wrapper'>
                <h3>made with&nbsp;</h3>
                <img src={require('./static/react.png')} alt='react' className='react'/>
                <h3> &nbsp;+&nbsp;</h3>
                <img src={require('./static/magic.png')} alt='magic' className='magic'/>
            </div>
            <div className='icon-wrapper'>
                <img src={require('./static/facebook.png')} alt='facebook' className='facebook'/>
                <img src={require('./static/instagram.png')} alt='instagram' className='instagram'/>
                <img src={require('./static/linkedin.png')} alt='linkedin' className='linkedin'/>
                <img src={require('./static/github.png')} alt='github' className='github'/>
            </div>
        </div>
    )

}

export default Footer;
