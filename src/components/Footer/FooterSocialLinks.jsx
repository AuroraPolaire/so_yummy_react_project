import {
  SocialLinks,
  SocialLink,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  InstagramIcon

} from "./FooterSocialLinks.styled";

const SocialLinksComponent = () => {
  return (
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
  );

}
export default SocialLinksComponent