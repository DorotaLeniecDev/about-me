import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Dorota Leniec</GradientText> 👋
        </>
      }
      description={
        <>
          I am a strong, confident individual with excellent communication
          skills. I develop user friendly, responsive frontend applications with
          passion.
        </>
      }
      avatar={
        <img
          className="h-80 rounded-lg"
          src="/assets/images/profile-photo.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/dorotaleniec/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/DorotaLeniecDev">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
