import {
  SocialLinks,
  SocialLink,
  FacebookIconStyled,
  YoutubeIconStyled,
  TwitterIconStyled,
  InstagramIconStyled

} from "./FooterSocialLinks.styled";

const SocialLinksComponent = () => {
  return (
    <SocialLinks>

      <SocialLink to='https://www.facebook.com/' target='_blank'>
        <FacebookIconStyled />
      </SocialLink>


      <SocialLink to='https://www.youtube.com/' target='_blank'>
        <YoutubeIconStyled />
      </SocialLink>


      <SocialLink to='https://twitter.com/' target='_blank'>
        <TwitterIconStyled />
      </SocialLink>

      <SocialLink to='https://www.instagram.com/' target='_blank'>
        <InstagramIconStyled />
      </SocialLink>

    </SocialLinks>
  );

}
export default SocialLinksComponent