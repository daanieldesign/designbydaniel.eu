import logo from '../../assets/images/logo.png'

const NavigationBar = () => {
  return (
    <nav>
      <img className="logo center" src={logo} onClick={() => window.location.href = '#'} />
      
      <ul className="center">
        {/* @ts-ignore */}
        <li className="active" href="#home">Domov</li>
        {/* @ts-ignore */}
        <li href="#services">Služby</li>
        {/* @ts-ignore */}
        <li href="#portfolio">Portfolio</li>
        {/* @ts-ignore */}
        <li href="#about-me">O mne</li>
        {/* @ts-ignore */}
        <li href="#contact">Kontakt</li>
      </ul>

      <div className="language-change center">
        <p>Language</p>
      </div>
    </nav>
  );
}

export default NavigationBar;