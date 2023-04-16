import React from 'react';
import {
  SocialLinks,
  SocialLink,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon,
  // TitleSocial,
} from "./FollowUs.styled";

export const FollowUs = () => {
  return (
    <>
    {/* <TitleSocial>Follow us</TitleSocial> */}
    <SocialLinks>

      <SocialLink to='https://www.facebook.com/' target='_blank'>
        <FacebookIcon />
      </SocialLink>


      <SocialLink to='https://www.youtube.com/' target='_blank'>
        <YoutubeIcon />
      </SocialLink>


      <SocialLink to='https://twitter.com/' target='_blank'>
        <TwitterIcon />
      </SocialLink>

      <SocialLink to='https://www.instagram.com/' target='_blank'>
        <InstagramIcon />
      </SocialLink>
      </SocialLinks>
      </>
  );

}