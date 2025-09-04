function probando() {
    var coso = [
        "XD", "que te importa", "cara torta", "quieres ganar un IFON gratis 👀", "la verdad estoy puro haciendo tonteras", "1238.23214.123414 tu ip"
    ];
    var aleatorio = coso[Math.floor(Math.random() * coso.length)];
    
    console.log(aleatorio);
    document.getElementById("mensaje").innerText = aleatorio;
}