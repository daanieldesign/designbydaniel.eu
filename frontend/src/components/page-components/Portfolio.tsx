import Card from '../portfolio/Card';
import PlaceholderCard from '../portfolio/PlaceholderCard';
import { useState, useEffect } from 'react';

const Portfolio = () => {
    const [cards, setCards] = useState<Array<{ id: number; title: string; description: string; image: string }> | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setCards([
                { id: 1, title: "FBM logo", description: "Moderní logo pro Filharmonii Bohuslava Martinů.", image: "/images/Mockup.png" },
                { id: 2, title: "MINT", description: "Návrh webu pro Crypto/NFT společnost MINT.", image: "/images/mahdak_web2.jpg" },
                { id: 3, title: "Lamborghini Countach", description: "Plakát pro Lamborghini a jejich Countach.", image: "/images/mahdak_carbanner2.jpg" },
                { id: 1, title: "FBM logo", description: "Moderní logo pro Filharmonii Bohuslava Martinů.", image: "/images/Mockup.png" },
                { id: 2, title: "MINT", description: "Návrh webu pro Crypto/NFT společnost MINT.", image: "/images/mahdak_web2.jpg" },
                { id: 3, title: "Lamborghini Countach", description: "Plakát pro Lamborghini a jejich Countach.", image: "/images/mahdak_carbanner2.jpg" },
            ]);
        }, 10 * 1000);
    }, []);

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <p className="subtitle">Moje kvalitní práce.</p>

            <div className="projects">
                {cards === null ? (
                    <>
                        <div className="projects-wrapper">
                            <PlaceholderCard/>
                            <PlaceholderCard/>
                            <PlaceholderCard/>
                        </div>

                        <div className="placeholder-button skeleton-anim-light"/>
                    </>

                ) : (
                    <div className="projects-wrapper">
                        {cards.map((card) => (
                            <Card key={card.id} {...card} />
                        ))}
                    </div>
                )}
                <a href="https://www.behance.net/designbydaniel0" target="_blank" rel="noopener noreferrer">
                    <button className="instagram-button">Zobrazit více</button>
                </a>
            </div>
        </section>
    );
};

export default Portfolio;
