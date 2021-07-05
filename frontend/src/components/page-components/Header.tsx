import header from '../../assets/images/header.jpg';

const Header = () => {
  return (
    <header style={{backgroundImage: `url(${header})`}}>
      <div className="overlay"></div>
      <div className="wrapper">
        <h1>
          Zdravím, mé jméno je <span style={{color: 'cornflowerblue', fontFamily: 'Manrope'}}>Daniel</span>.
          Jsem grafický designér, animátor a střihač videí.
        </h1>
      </div>

      <p className="scroll">Scroll To Continue</p>
    </header>
  );
}

export default Header;