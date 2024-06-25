import connectLogo from "../assets/picts/ubisoftConnectLogo.png";

const Connect = () => {
  return (
    <div className="connect">
      <img src={connectLogo} className="img-fluid w-100" />
      <div className="infoConnect">
        <p className="cheat">Tous vos jeux, amis et avantages au même endroit. PC | Console | Mobile</p>
        <button type="button" id="btnDownload"><a href="UbisoftConnectInstaller.exe" download>Télécharger</a></button>
      </div>
    </div>
  )
}

export default Connect
