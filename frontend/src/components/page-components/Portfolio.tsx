import Card from '../portfolio/Card';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet.</p>

      <div className="projects">
        <Card />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis minima dignissimos harum a quam ea fugit, quas ducimus quo, veritatis hic vel eum? Consectetur hic earum, nesciunt aliquam adipisci doloribus maiores. Nobis, ipsam quam. Vitae doloremque perferendis aperiam culpa totam velit recusandae ad blanditiis excepturi, sed laudantium beatae nostrum voluptatibus cumque doloribus? Necessitatibus temporibus adipisci reprehenderit voluptatem quidem, laboriosam facere magnam molestiae voluptates quam quaerat error autem id suscipit quisquam dignissimos iste nostrum consequuntur consectetur sunt. Provident accusamus adipisci repellat nesciunt consequatur natus corporis fugiat tempora, sed ex nostrum autem dolorem laboriosam soluta aliquam commodi culpa voluptate quod eum minus!
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Portfolio;