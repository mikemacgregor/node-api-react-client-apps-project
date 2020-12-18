import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Header title={`Draft *Anything?*`} children={`What do you mean *Anything*?`}>
        
      </Header>

      <Container>
        <p>
          Do you know what a fantasy draft is? Fantasy football, fantasy hockey, baseball, etc.? 
          Well, what if you could draft <em>anything</em>? Like, movies. Or better yet, 1990's action movies. 
          Or, celebrities. Or, beer commercials. Or, breakfast cereal.
        </p>
        <p>
          Anything that can form a ranked list that people argue about, we can draft it. Just pick a collection, 
          invite your over-opinionated friends, and you show them what the best cereal is or ever was.
        </p>
        <p>
          It's Franken🍓Berry by the way...
        </p>
        <div className="text-center">
          <img src="/frankenberry.jpg" />
        </div>
      </Container>
    </>
  );
}
 
export default Home;