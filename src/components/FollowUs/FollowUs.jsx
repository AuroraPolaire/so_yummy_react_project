import React from 'react';
import {
  SocialLinks,
  SocialLink,
  LogoIcon,
} from "./FollowUs.styled";
import SVG from '../../images/icons/sprite.svg';

export const FollowUs = () => {
  return (
    <>
    <SocialLinks>

      <SocialLink to='https://www.facebook.com/' target='_blank'>
        <LogoIcon color="#FAFAFA"><use href={`${SVG}#icon-facebook-logo`}></use> 
            </LogoIcon>
      </SocialLink>


      <SocialLink to='https://www.youtube.com/' target='_blank'>
          <LogoIcon color="#FAFAFA"><use href={`${SVG}#icon-youtube-logo`}></use> 
            </LogoIcon> 
      </SocialLink>


      <SocialLink to='https://twitter.com/' target='_blank'>
          <LogoIcon color="#FAFAFA"><use href={`${SVG}#icon-twitter-logo`}></use> 
            </LogoIcon>
      </SocialLink>

      <SocialLink to='https://www.instagram.com/' target='_blank'>
          <LogoIcon color="#FAFAFA"><use href={`${SVG}#icon-instagram-logo`}></use> 
            </LogoIcon> 
      </SocialLink>
      </SocialLinks>
      </>
  );

}