interface CardProps {
    id: number; // Tento klíč se nevyužívá, ale bude dostupný přes spread {...card}
    title: string;
    description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
