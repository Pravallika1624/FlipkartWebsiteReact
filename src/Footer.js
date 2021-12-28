import LocalMallIcon from '@material-ui/icons/LocalMall';
import StarsIcon from '@material-ui/icons/Stars';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HelpIcon from '@material-ui/icons/Help';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css';
const Footer=()=>{
    return(
        <div className="container5">
            <div className="container6">
            <LocalMallIcon/>
            <h1 className='head'>Sell on Flipkart</h1>
            </div>
            <div className="container6">
            <StarsIcon/>
            <h1 className='head'>Advertise</h1>
            </div>
            <div className="container6">
            <CardGiftcardIcon/>
            <h1 className='head'>Gift Cards</h1>
            </div>
            <div className="container6">
            <HelpIcon/>
            <h1 className='head'>Help Center</h1>
            </div>
            <div className="container6">
            <CopyrightIcon/>
            <h1 className='head'>2007-2021 Flipkart.com</h1>
            </div>
        </div>
    )
}
export default Footer