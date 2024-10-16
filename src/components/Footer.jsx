import ashesiLogo from '../images/ashesi-logo.png'
import '../components/styles/Footer.css'
export function Footer() {
    return (
        <div className='footer oswald-regular'>
            <img src={ashesiLogo} className='ashesi-logo'/>
            <h4>Ashesi University Athletics</h4>
            <h5>1 University Ave, Berekuso</h5>
            <div className='footer-creatives'>
                <h4>Built by CREATIVES</h4>
                <h4>Suport: creatives@gmail.com</h4>
            </div>
            
        </div>
    )
}

export default Footer