import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import harbr from './harbr.png';
import synesthetic from './synesthetic.png';
import haveYouSeenMyRecords from './haveyouseenmyrecords.png';
import stockXTicker from './stockxticker.png';
import notSub from './notsub.png';
import spryfieldUrbanFarm from './spryfieldurbanfarm.png';

const Wrapper = styled.div`
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  color: #FFFFFF;
  text-align: center;
  font-weight: 300;
  text-transform: lowercase;
  letter-spacing: 0.2rem;
`;

const IndexPage = () =>
  <Wrapper>
    <ProjectsTitle>Projects and Experience</ProjectsTitle>
    <Card
      image={harbr}
      title="Harbr - Developer Intern"
      body="Built internal tool for data tagging, implemented dashboard redesign and built new features, improved time to first paint by 270%."
      tags={['React', 'Redux', 'Apollo (GraphQL)', 'ChartJS']}
      siteLink="https://www.harbr.com"
    />
    <Card
      image={synesthetic}
      title="Synesthetic"
      body="Generate color palettes from music. See if your aesthetic and your tunes match up. Hint: Lorde is a lot of blue and purple."
      tags={['React', 'Styled Components', 'Spotify API']}
      siteLink="https://synesthetic.colsondonohue.com"
      githubLink="https://github.com/colsondonohue/synesthetic"
    />
    <Card
      image={haveYouSeenMyRecords}
      title="Have You Seen My Records"
      body="Quantify the indie-ness of your music taste. Validate yourself with Pitchfork."
      tags={['React', 'Python', 'SQLite', 'Last.fm API']}
      siteLink="http://haveyouseenmyrecords.com"
      githubLink="https://github.com/colsondonohue/have-you-seen-my-records"
    />
    <Card
      image={stockXTicker}
      title="StockX Ticker"
      body="Keep an eye on deadstock sneaker prices from your OS X desktop with this shiny Übersicht widget."
      tags={['PhantomJS', 'Übersicht', 'CoffeeScript']}
      githubLink="https://github.com/colsondonohue/stockx_ticker"
    />
    <Card
      image={notSub}
      title="NotSub (QHacks 2017)"
      body="Monitor your subscription services to make unsubscribing from unused ones a breeze. Click through for hackathon quality code."
      tags={['Chrome Extension', 'JavaScript', 'localStorage']}
      githubLink="https://github.com/lolzcatz/notsub"
    />
    <Card
      image={spryfieldUrbanFarm}
      title="Spryfield Urban Farm"
      body="The best place to garden in the HRM needed a slick site that was editable by older users, and I wasn't touching WordPress. Simpla to the rescue."
      tags={['Simpla', 'JavaScript', 'HTML', 'SCSS']}
      siteLink="https://spryfieldurbanfarm.colsondonohue.com"
      githubLink="https://github.com/colsondonohue/spryfieldurbanfarm"
    />
  </Wrapper>;

export default IndexPage;
