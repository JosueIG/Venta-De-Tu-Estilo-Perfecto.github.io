document.addEventListener("DOMContentLoaded", function () {
   
    const muebles = document.querySelectorAll(".mueble");

    
    const modal = document.createElement("div");
    modal.id = "modalDescripcion";
    modal.innerHTML = `
        <div id="modalContent">
            <span id="cerrarModal">&times;</span>
            <h2 id="tituloMueble"></h2>
            <img id="imagenMueble" src="" alt="">
            <p id="precioMueble"></p>
        </div>
    `;
    document.body.appendChild(modal);


    const tituloMueble = document.getElementById("tituloMueble");
    const imagenMueble = document.getElementById("imagenMueble");
    const precioMueble = document.getElementById("precioMueble");
    const cerrarModal = document.getElementById("cerrarModal");

    muebles.forEach((mueble) => {
        mueble.addEventListener("click", function () {
            
            const figcaptionText = this.querySelector("figcaption").textContent;
            const imagenSrc = this.querySelector("img").src;

           
            let titulo = figcaptionText.replace(/-\s*\$\d{1,3}(?:,\d{3})*/, "").trim(); 
            let precio = figcaptionText.match(/\$\d{1,3}(?:,\d{3})*/); 

            
            precio = precio ? precio[0] : "Precio no disponible";

            tituloMueble.textContent = titulo;
            imagenMueble.src = imagenSrc;
            precioMueble.textContent = precio;

            modal.style.display = "block";
        });
    });

  
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
