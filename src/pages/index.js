import React from "react"
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    color: white;
    font-family: '';
  }
*, *::before, *::after {
  box-sizing: border-box;
}
`;

const W = styled.div`

`

const Wrapper = styled.div`
  display: grid;
  grid-row-gape: 10px;
  grid-template-rows:
    [row-header-menu] auto
    [row-header] auto
    [row-about-me] auto
    [row-services] auto
    [row-portfolio] auto
    [row-footer] auto
`

const StyledGrid = styled.div`
  grid-column: 2;
  grid-row: 2;
  display:grid;
  justify-content: center;
  align-content: center;
  gap: 1em;
`
const StyledGridBottom = styled.div`
  grid-column: 2;
  grid-row: 3;
  display:grid;
  height:0.2em;
  gap: 0.7em;
  justify-content: center;
  align-content: start;
`

const Name = styled.h2`
  letter-spacing: .2em;
  font-size:6vw;
  margin:0;
  padding-top:10vw;
  place-self: start left;
  
`
const SpanWrap = styled.div`
  padding-top:4vw;
  display:flex;
  justify-content: space-evenly;
`
const Media = styled.div`
  background: pink;
  width: 14vw;
  height: 14vw;
`

const Contact = styled.p`
  letter-spacing: .02em;
  font-size: 5vw;
  margin:0;
  place-self: end left;
`

const MenuHeader=styled.div`
  grid-row: row-header-menu;
  height:100vh;
  display: grid;
  grid-template-columns: .3fr 4fr .3fr;
  grid-template-rows: 10vw auto 75vw;
  background: gray;
`;

const Header = styled.div`
  grid-row: row-header;
  height: 90vh;
  display: grid;
  grid-template-columns: .3fr 4fr .3fr;
  grid-template-rows: 0.5fr auto 3.5fr;
  background: white;
`;

const About = styled.div`
  grid-row: row-about-me;
  height:160vh;
  display:grid;
  background:gray;
  grid-template-columns: .3fr 4fr .3fr;
  grid-template-rows: 2fr auto 4fr;
`

const AboutH2 = styled.h2`
  grid-row:1/2;
  grid-column:2/3;
  place-self:end left;
`
const AboutPara = styled.p`
  grid-row:2/3;
  grid-column:2/3;
`

const AboutImg = styled.div`
  grid-row:3/4;
  grid-column:1/3;
  background:pink;
  width:60vw;
  height:60vw;
  place-self:end left;
`

const Services = styled.div`
  grid-row: row-services;
  height: 440vh;
  background: white;
  display:grid;
  grid-template-columns: .3fr 4fr .3fr;
  grid-template-rows: 0.5fr auto auto auto 3.5fr;
`;

const BgFrame = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  background: pink;
  height:130vh;
`

const BgFrame1 = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  background: gray;
  height:130vh;
`

const BgFrame2 = styled.div`
  grid-row: 4/5;
  grid-column: 2/3;
  background: red;
  height:130vh;
`

const Logo = styled.h1`
margin:0;
padding-top:6%;
font-size: 10vw;
text-align:center;
color: ${({isDark}) => isDark? 'black' : 'white'};
`

const Button=styled.button`
  background:transparent;
  padding-left:.7em;
  width: 5em;
  height: 1em;
  border: none;
  color: white;
  font-size: 14vw;
  font-weight: 500;
  text-align:${({ end }) => end ? 'center' : 'left'};
  transition: box-shadow .9s ease;

  :hover {
    box-shadow: 0 10px 20px -15px darkpink;
    color: black;
  }
`;

const FirstImg = styled.div`
  grid-row: 3;
  grid-column: 2/4;
  background: red;
  height: 100vw;
  width:  80vw;
  place-self: end right;
`

const Portfolio = styled.div`
  grid-row: row-portfolio;
  height: 130vh;
  background: green;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
`;

const Contain = styled.div`
  grid-column: 2 / -2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, calc(50% - 40px));
  grid-template-rows: minmax(150px, 1fr);
`

const Imag = styled.div`
  height: 90px;
  width: 60px;
  background:red;
`
const MenuFooter = styled.div`
  grid-row: row-footer;
  height:130vh;
  display: grid;
  grid-template-columns: .3fr 4fr .3fr;
  grid-template-rows: 10vw auto 75vw;
  background: gray;
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <MenuHeader>
        <StyledGrid>
          <Logo>Obiektywny Jakub</Logo>
          <Button>o mnie</Button>
          <Button>usługi</Button>
          <Button>portfolio</Button>
          <Button end>blog</Button>
        </StyledGrid>
        <StyledGridBottom>
          <Name>Jakub Sułkowski</Name>
          <Contact>T. 123456789</Contact>
          <Contact>M. foto@obiektywnyjakub.pl</Contact>
          <SpanWrap>
            <Media isLeft>Cze</Media>
            <Media>Ść</Media>
          </SpanWrap>
        </StyledGridBottom>
      </MenuHeader>
      <Header>
        <StyledGrid>
          <Logo isDark>Obiektywny Jakub</Logo>
        </StyledGrid>
        <FirstImg>
        </FirstImg>
      </Header>
      <About>
          <AboutH2>o mnie</AboutH2>
          <AboutPara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.
          </AboutPara>
          <FirstImg></FirstImg>
          <AboutImg></AboutImg>
      </About>
      <Services>
        <BgFrame>
          <h4>lifestyle</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor scelerisque porta. Morbi feugiat lobortis sodales. Praesent molestie, tellus et suscipit efficitur, erat erat commodo elit, quis varius arcu augue in nulla. Proin eu sagittis lacus. Maecenas ac pharetra velit.</p>
          <h4>zobacz więcej</h4>
        </BgFrame>
        <BgFrame1>
          elo
        </BgFrame1>
        <BgFrame2>
          chuj
        </BgFrame2>
      </Services>
      <Portfolio>
        <Contain>
          <Imag></Imag>
          <Imag></Imag>
          <Imag></Imag>
          <Imag></Imag>
          <Imag></Imag>
          <Imag></Imag>
        </Contain>
      </Portfolio>
      <MenuFooter>
        <StyledGrid>
          <Logo>Obiektywny Jakub</Logo>
          <Button>o mnie</Button>
          <Button>usługi</Button>
          <Button>portfolio</Button>
          <Button end>blog</Button>
        </StyledGrid>
        <StyledGridBottom>
          <Name>Jakub Sułkowski</Name>
          <Contact>T. 123456789</Contact>
          <Contact>M. foto@obiektywnyjakub.pl</Contact>
          <SpanWrap>
            <Media isLeft>Cze</Media>
            <Media>Ść</Media>
          </SpanWrap>
        </StyledGridBottom>
      </MenuFooter>
    </Wrapper>  
  </>
)

export default IndexPage
