import styled from 'styled-components';

export const Container = styled.main`
background: ${props => props.theme.background.container};
font-family: 'Roboto', sans-serif;
color: ${props => props.theme.colors.primary};
text-align: center;
width: 100%;
height: auto;
padding: 50px 0;
gap: 10px;
`

export const Body = styled.div`
align-items: center;
margin: 0 auto;

@media screen and (min-width: 600px) {
  width: 600px;
}

ul {
  list-style: none;
  align-items: center;
  margin: 30px;
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
  font-size: 14px;
  gap: 12px;
}

img {
  width: 32px;
  height: 32px;
}

ul li a:hover {
  transform: scale(1.03);
  size: 1.1;
  transition: 200ms;
}
`

export const Header = styled.div`
margin-bottom: 15px;
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

export const DivSwitch = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const SwitchButton = styled.button`
  border: transparent;
  background: transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  font-size: 18px;
  :hover {
    background: transparent;
    transition: 300ms;
    box-shadow: 0 0 1.5em ${props => props.theme.shadow};
  }
`

export const ShareSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: 600px) {
    width: 600px;
  }

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.03);
    size: 1.1;
    transition: 200ms;
  }
`