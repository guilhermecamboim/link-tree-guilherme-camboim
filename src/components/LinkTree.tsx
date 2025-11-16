import { ThemeProvider } from 'styled-components';
import { Container, Header, Body, DivSwitch, SwitchButton, ShareSection } from './styles';
import light from '../styles/light';
import dark from '../styles/dark';
import { usePersistedState } from '../utils/usePersistedState';
import instagramIcon from "../public/images/instagram.png"
import mediumIcon from "../public/images/medium.png"
import linkedinIcon from "../public/images/linkedin.png"
import githubIcon from "../public/images/github.png"
import profileIcon from "../public/images/profile.jpeg"
import shareIcon from "../public/images/share.png"
import ShareModal from './ShareModal';
import { useState } from 'react';


export const LinkTree = () => {
  const [theme, setTheme] = usePersistedState('theme', light);
  const [openShare, setOpenShare] = useState(false);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ShareSection>
          <img src={shareIcon} onClick={() => setOpenShare(true)}/>
        </ShareSection>
        <Header>
          <img
            src={profileIcon}
            alt="Imagem do Guilherme"
          />
          <h1>Guilherme Camboim</h1>
          <p>M.Sc. in Computer Science </p>
        </Header>
        <DivSwitch>
        {theme === light ?         
        <SwitchButton onClick={toggleTheme}>☀️</SwitchButton> 
        : <SwitchButton onClick={toggleTheme}>🌙</SwitchButton>
        }
        </DivSwitch>
        <Body>
          <ul>
            <li>
              <a href="https://medium.com/@camboimguilherme" target="_blank">
                <img src={mediumIcon} /> <span>Medium</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camboim-guilherme/" target="_blank">
                <img src={linkedinIcon}/> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/guilhermecamboim" target="_blank">
                <img src={githubIcon}/> <span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/camboimgui/" target="_blank">
                <img src={instagramIcon} /> <span>Instagram</span>
              </a>
            </li>
          </ul>
        </Body>
      </Container>
      <ShareModal
        open={openShare}
        onClose={() => setOpenShare(false)}
        link={"https://link-tree-guilherme-camboim.vercel.app/"}
      />
    </ThemeProvider>
  )
}
