import styled from 'styled-components';

export const Container = styled.main`
background: ${props => props.theme.background.container};
font-family: 'Roboto', sans-serif;
color: ${props => props.theme.colors.primary};
text-align: center;
width: 300px;
margin: 60px auto;
padding: 3.7px;

button { 
  border: transparent;
  background: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  :hover {
    background: transparent;
    transition: 300ms;
    box-shadow: 0 0 1.5em ${props => props.theme.shadow};
  }
}

.divSwitch {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
`

export const Body = styled.div`
align-items: center;

ul {
  list-style: none;
  align-items: center;
  margin: 60px 45px 60px  auto;
}

ul li a {
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${props => props.theme.background.body};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  color: ${props => props.theme.text};
  text-transform: uppercase;
  font-size: 14px
}

ul li a:hover {
  transform: scale(1.03);
  size: 1.1;
  transition: 200ms;
}
`

export const Header = styled.div`
img {
  margin-top: 10px;
  border: 0.25rem solid (var(--primary-color));
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

p {
  font-family: 'Roboto Mono', monospace;
  opacity: 0.8;
  font-weight: 400;
}

h1 {
  font-size: 32px;
  margin-top: 24px;
  margin-bottom: 8px;
}
`