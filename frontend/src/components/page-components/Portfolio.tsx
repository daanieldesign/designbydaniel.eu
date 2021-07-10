import Card from '../portfolio/Card';
import PlaceholderCard from '../portfolio/PlaceholderCard';
import {  useState, useEffect } from 'react';
import { fetch } from '../../services';

const Portfolio = () => {
  const [ cards, setCards ] = useState<string | null>(null);
  useEffect(() => {
    setTimeout(() => {
    }, 10 * 1000);
  }, []);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet.</p>

      <div className="projects">
        {cards === null ?
          <>
            <div className="projects-wrapper">
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
            </div>
            <div className="placeholder-button skeleton-anim-light" />
          </> :
          <Card />
        }
      </div>
    </section>
  );
}

export default Portfolio;