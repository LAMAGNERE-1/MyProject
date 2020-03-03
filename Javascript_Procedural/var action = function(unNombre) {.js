var action = function(unNombre) {
    var calcul = unNombre + 45;
    return calcul;
};

var lancement = function(uneFonction,leChiffre) {
    var valeurDeretour = uneFonction(leChiffre);
    alert(valeurDeretour);
};

lancement(action,19);