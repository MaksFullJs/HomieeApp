import Logo from '../../assets/images/copy.png';
import React from 'react';
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__main'>
                    <div className='footer__stuff'>
                        <h2 className='footer__title'>FindHomiie</h2>
                        <div className='footer__text'>Cumque maiores minus placeat itaque, iusto,eaque qui soluta officia eius illum molestiae fugit</div>
                    </div>
                    <div className="footer__logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='footer__social'>
                        <Icon component={YoutubeOutlined} color='#FF0000' />
                        <Icon component={TwitterOutlined} color='#03A9F4' />
                        <Icon component={LinkedinOutlined} color='#007AB9' />
                        <Icon component={InstagramOutlined} color='#3A9F4' />
                    </div>
                </div>
                <div className='footer__side'>
                    FindHomiie! Find your new family member right here!
                </div>
            </div>
        </footer>
    )
}

export default Footer;