const PlaceholderCard = () => {
    return (
        <>
            <div style={{ position: "relative" }}>
                <div className="placeholder-card skeleton-anim-light">
                    <div className="placeholder-image skeleton-anim-light" />
                </div>
                <div className="placeholder-card-text">
                    <div className="headline skeleton-anim-dark" />
                    <div className="paragraph skeleton-anim-dark" />
                </div>
            </div>
        </>
    );
};

export default PlaceholderCard;
