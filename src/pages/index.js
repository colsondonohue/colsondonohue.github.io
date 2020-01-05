import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import facebook from './facebook.gif';
import instagram from './instagram.png';
import harbr from './harbr.png';
import synesthetic from './synesthetic.png';
import haveYouSeenMyRecords from './haveyouseenmyrecords.png';
import stockXTicker from './stockxticker.png';
import notSub from './notsub.png';
import spryfieldUrbanFarm from './spryfieldurbanfarm.png';

export const query = graphql`
  query GetPhotos {
    allPhotosJson {
      edges {
        node {
          name
          photos
        }
      }
      totalCount
    }
  }
`;

const IndexPage = ({ data }) =>
  <Wrapper>
    <Title>Experience</Title>
    <Card
      center={true}
      image={facebook}
      title="Front End Engineer"
      subtitle="Facebook"
      body="Building a 0 -> 1 internal tool for the People Products org. Despite my title, I'm working across the web stack."
      tags={['React', 'GraphQL', 'Hack']}
    />
    <Card
      image={instagram}
      title="Front End Engineer Intern"
      subtitle="Instagram"
      body="Worked on Instragram Web to approach feature parity with native clients across Profile, Creation, and Comments."
      tags={['React', 'Redux', 'GraphQL', 'Django']}
    />
    <Card
      image={harbr}
      title="Developer Intern"
      subtitle="Harbr"
      body="Built internal tool for data tagging, implemented functional and visual dashboard overhaul, improved time to first paint by 270%."
      tags={['React', 'Redux', 'GraphQL', 'ChartJS']}
    />
    <Title>Projects</Title>
    <Card
      image={synesthetic}
      title="Synesthetic"
      subtitle="Personal Project"
      body="Generate color palettes from music. See if your aesthetic and your tunes match up. Hint: Lorde is a lot of blue and purple."
      tags={['React', 'Styled Components', 'Spotify API']}
      siteLink="https://synesthetic.colsondonohue.com"
      githubLink="https://github.com/colsondonohue/synesthetic"
    />
    <Card
      image={haveYouSeenMyRecords}
      title="Have You Seen My Records"
      subtitle="Personal Project"
      body="Quantify the indie-ness of your music taste. Validate yourself with Pitchfork."
      tags={['React', 'Python', 'SQLite', 'Last.fm API']}
      siteLink="http://haveyouseenmyrecords.com"
      githubLink="https://github.com/colsondonohue/have-you-seen-my-records"
    />
    <Card
      image={stockXTicker}
      title="StockX Ticker"
      subtitle="Personal Project"
      body="Keep an eye on deadstock sneaker prices from your OS X desktop with this shiny Übersicht widget."
      tags={['PhantomJS', 'Übersicht', 'CoffeeScript']}
      githubLink="https://github.com/colsondonohue/stockx_ticker"
    />
    <Card
      image={notSub}
      title="NotSub"
      subtitle="QHacks 2017"
      body="Monitor your subscription services to make unsubscribing from unused ones a breeze. Click through for hackathon quality code."
      tags={['Chrome Extension', 'JavaScript', 'localStorage']}
      githubLink="https://github.com/lolzcatz/notsub"
    />
    <Card
      image={spryfieldUrbanFarm}
      title="Spryfield Urban Farm"
      subtitle="Community Project"
      body="The best place to garden in the HRM needed a slick site that was editable by older users, and I wasn't touching WordPress. Simpla to the rescue."
      tags={['Simpla', 'JavaScript', 'HTML', 'SCSS']}
      siteLink="https://spryfieldurbanfarm.colsondonohue.com"
      githubLink="https://github.com/colsondonohue/spryfieldurbanfarm"
    />
    <Title>photos</Title>
    {data.allPhotosJson.edges.map(edge =>
      <Link to={`/photos/${edge.node.name}`} key={edge.node.name}>
        <Card
          horizontal
          image={require(`../photos/${edge.node.photos[0]}`)}
          title={edge.node.name}
        />
      </Link>
    )}
  </Wrapper>;

export default IndexPage;
