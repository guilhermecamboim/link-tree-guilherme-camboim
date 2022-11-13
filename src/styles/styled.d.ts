import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme{
    title: string,
    colors: {
      primary: string
      secondary: string
    },
    background: {
      container: string
      body: string
    }
    text: string
    shadow: string
  }
}