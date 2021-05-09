function palindrome(palabra) {
    //Se valida que solo sean caracteres alfanuméricos con la expresión y en caso contrario los elimina
    let frase_lower = palabra.toLowerCase().replace(/[^0-9a-z]/gi, "");

    // Creo otra frase y la convierto en array, seguidamente la paso a string
    let frase_reversa = frase_lower.split("").reverse().toString();

    for (var i = 0; i < ((frase_reversa.length) - 1); i++) {
        frase_reversa = frase_reversa.replace(",", "");
    };

    if (frase_lower == frase_reversa) {
        console.log(palabra + " Es un palíndromo");
        return true;
    } else {
        console.log(palabra + " No Es un palíndromo");
        return false;
    }

}
