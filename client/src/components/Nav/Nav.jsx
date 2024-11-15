import logo from '../../assets/Found-U-Transparent.png'
import './Nav.css'

export default function Nav(){
    return(
        <nav>
            <img className='logo' src={logo} />
        </nav>
    )
}