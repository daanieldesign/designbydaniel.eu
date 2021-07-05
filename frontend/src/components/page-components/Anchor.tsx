interface AnchorProps {
  name: string
}

const Anchor: React.FC<AnchorProps> = ({ name }) => {
  return (
    <a id={name} className="anchor"></a>
  );
}

export default Anchor;