import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" ara-label="Facebook" rel="noopener noreferrer"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" ara-label="Intagram" rel="noopener noreferrer"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" ara-label="Youtube" rel="noopener noreferrer"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" ara-label="Twitter" rel="noopener noreferrer"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" ara-label="Linkedin" rel="noopener noreferrer"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;