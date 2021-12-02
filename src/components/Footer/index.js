import logoMeliuz from '../../assets/meliuz-logo.png'

const Footer = () => {
  return(
    <div className="footerContainer">
      <footer>
        <img src={logoMeliuz} alt="Logo Méliuz" className="logoMeliuz"/>
        <p>Feito por Felipe Neves</p>
      </footer>
    </div>
  )
}

export default Footer