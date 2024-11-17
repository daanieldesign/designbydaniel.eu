const Header = () => {
  return (
    <header>
      <div className="overlay"></div>
      <div className="wrapper">
        <h1>
          Zdravím, mé jméno je <span style={{color: 'cornflowerblue', fontFamily: 'Manrope'}}>Daniel</span>.
          Jsem grafický designér, animátor a střihač videí.
        </h1>
      </div>

      <p className="scroll">Šoupni kolečkem!</p>
    </header>
  );
}

export default Header;