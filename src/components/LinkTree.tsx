import { ThemeProvider } from 'styled-components';
import { Container, Header, Body } from './styles';
import light from '../styles/light';
import dark from '../styles/dark';
import { usePersistedState } from '../utils/usePersistedState';

export const LinkTree = () => {
  const [theme, setTheme] = usePersistedState('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <img
            src="https://avatars.githubusercontent.com/u/105326604?v=4"
            alt="Imagem do Guilherme"
          />
          <h1>Guilherme Camboim</h1>
          <p>@camboimgui</p>
        </Header>
        <div className="divSwitch">
        {theme === light ?         
        <button onClick={toggleTheme}>☀️</button> 
        : <button onClick={toggleTheme}>🌙</button>
        }
        </div>
        <Body>
          <ul>
            <li>
              <a href="https://www.instagram.com/lerabrecaminhos/" target="_blank">
                📚 LerAbreCaminhos
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camboim-guilherme/" target="_blank">
                👔 LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/guilhermecamboim" target="_blank">
                🐱 Github
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/camboimgui/" target="_blank">
                📷 Instagram
              </a>
            </li>
          </ul>
        </Body>
      </Container>
    </ThemeProvider>
  )
}
