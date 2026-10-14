import './MiBoton.css';
function MiBoton() {
  const descargarCV = () => {
    // Ruta del PDF (puede ser una URL
    // o un archivo local en la carpeta public/)
    // Cambia por la ruta real de tu PDF
    const urlPDF = '/cv_simple-Huancahuire.pdf ';
    const enlace = document.createElement('a');
    enlace.href = urlPDF;
    // Nombre con que se guardará
    enlace.download = 'CV-Huancahuire.pdf';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };
  return (
    <button className="btn-descargar" onClick={descargarCV} style={{color: 'red'}}>
      📄 Descargar CV
    </button>
  );
}

export default MiBoton;