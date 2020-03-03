# Mémo JavaScript

## Bases

### Place du JavaScript


3 cas:

- sur une balise HTML
- dans une balise script
- dans un document externe appelé par une balise script

Sur une balise:

````html
<body onload="alert('Bonjour à tous');">
````

Dans une balise script:

````html
<head>
    <title>Titre de la page</title>
    <meta charset="UTF-8">
    <script>
        alert('Bonjour à tous');
    </script>
````

Dans un document externe:

````html
<head>
    <title>Titre de la page</title>
    <meta charset="UTF-8">
    <script src='script.js'></script>
````

        Puis dans script.js

``````````javascript
        alert('Bonjour à tous')
``````````

### Importance de la casse

Le JavaScript est sensible à la casse.


### Cas où le JavaScript n'est pas activé: balise <noscript>

````html
<noscript>
Veuillez activer le JavaScript
</noscript>
````

### Commentaires en JavaScript

````JavaScript
// Commentaire sur une ligne
/*
Commentaire
sur plusieurs
lignes
*/
````

## Les variables

- Une variable permet de stocker des données. 
- Une variable peut varier dans son contenu.
- Une varaible peut contenir tout type de données.

On déclare une variable puis on y stocke une donnée OU BIEN on déclare une variable en y stockant une donnée.

````javascript
// Cas 1
var boite;
boite = 'Bonjour';

// Cas 2
var sac = 'Autre message';
````

Convention: on utilise le Camel case. Il est important d'utiliser des noms explicites.


````javascript
var maVariablePourUnUsageParticulier;
````

## Deux types de données

### Les nombres

- entier
- flottant (à virgule)

````javasript
18;
-67;
1.7;

var leNombre = 18;
````

### Les chaînes de caractères

On peut utiliser des guillemets simple ou doubles: il faut juste choisir.

````javascript
'Un message';
````

Pour les guillemets simples, il faut échapper les apostrophes:

````javascript
'Aujourd\'hui il va pleuvoir';
````

## Les opérations sur les données

### Les 4 opérations habituelles:

````javascript
5 + 19;
6 - 2;
17 * 4;
21 / 3;
````

### Le modulo
Il existe également le modulo qui retourne le "reste" d'une division (en enlevant le résultat lié à un entier le plus proche).

````javascript
15 % 2; //donne 1
47 % 6; //donne 5
42 % 7; //donne 0

var leNombre = 17;
leNombre = leNombre + 1; //leNombre contiendra 18
````

### La concaténation

Pour rassembler plusieurs chaînes de caractères:

````javascript
'Bonjour' + ' tout le monde'; //donne 'Bonjour tout le monde'

var textUn = 'Bientôt';
var textDeux = 'le déjeuner';
var phrase = texteUn + ' ' + textDeux;
alert(phrase); // affichera 'Bientôt le déjeuner'
````

## Les tableaux

Les tableaux permettent de stocker plusieurs données dans un seul élément qui pourra être enregistré dans une variable.

Un tableau: [element1,element2,...]
Pour cibler un élément particulier d'un tableau, on utilise un indice: il s'agit de compter à partir de 0 les données dans le tableau.


````javascript
var unTableau = [17,'soleil',9.6,-17,'message']

unTableau[2]; // donne 9.6
````

Pour modifier une information d'un tableau:

````javascript
unTableau[1] = 'nuage'; // Le texte nuage a remplacé le texte soleil
````

Pour ajouter un indice au tableau:

````javascript
unTableau[5] = 'un ajout' 
````

Il est possible de placer un ou des tableau(x) dans un tableau:

````javascript
var prenoms = ['homme',['Pierre','Denis','Vincent'],'femmes',['Sophie','Lise','Hélène']]

prenoms[0];
prenoms[1][2];
prenoms[3][0];
````

## Les fonctions

Une fonction consiste à regrouper du code que l'on souhaite utiliser à plusieurs reprises.

Le schéma de base d'une fonction est le suivant:

function() {
    // CONTENU DE LA FONCTION
}

````javascript
var maFonction = function(){ 
    var calcul = 19 + 6;
    alert(calcul)
};
````

Pour utiliser la fonction:

````javascript
maFonction();
````

### Un ou des arguments pour la fonction

Une fonction peut avoir un ou plusieurs arguments afin de fournir à la fonction des données:

Avec un argument:

````javascript
var somme = function(unNombre) {
    var resultat = unNombre + 2;
    alert(resultat);
};

somme(10);
````

Avec plusieurs arguments:

````javascript
var multiplication = function(un,deux) {
    var total = un * deux;
    alert(total);
};
multiplication(7,94)
````

### Une valeur de retour

Une fonction ne peut retourner qu'UN SEUL ELEMENT.

````javascript
var message = function {
    var unTexte = 'Voici le message';
    return unTexte;
};

var valeurDeRetour = message();
alert(valeurDeRetour); // affichera 'Voici le message'
````

La fonction se termine à la fin de la ligne du return.

## Les booléens

### Deux états

Vrai ou faux:

- -> ````true```` ou ````1````
- -> ````false```` ou ````0````

### Opérateurs de comparaison

| Opérateur | Sens |
| :---:|:---:|
| == | égal à |
| != | différent de |
| > |strictement supérieur à|
| >= |supérieur ou égal à|
| < | stritement inférieur à|
| <= | inférieur ou égal à|
| === | égalité de type et de valeur|
| !== | différent de type et/ou de valeur|


````javascript
true == false; // donne false
true != false; // donne true
15 == 5 + 10; // donne true
8 > 4 + 5; // donne false
var le Nombre = 19
leNombre >= 12 + 7; // donne true


15 === 8 + 7; // donne true
'15' == 15; // donne true
'15' === 15; // donne false
'15' != 15; // donne false
'15' !== 15; // donne true 
````

### Opérateurs logiques

| Opérateur | Sens |
| :---: | :---: |
| ! | non |
| \|\| | ou |
| && | et |

````javascript
!false; // donne true
!true; // donne false
!true == false; // donne true

true && true; // donne true
true && false // donne false

true || true; // donne true
false || false; // donne false
true || false; // donne true
````

````javascript
15 > 12 && 3 > -2; //donne true
5 == 3 + 2 && 6 > 4 + 2; // donne false

var leNombre = 17;
leNombre <= 30 && leNombre >= 15; // donne true

3 > 1 || 5 < 2; // donne true

var autreNombre = 9;
autreNombre == 3 && autreNombre == 9; // donne true
````

## Les conditions

### Principe

Deux posibilités :

- Cas 1: si
- Cas 2: si / sinon

#### Cas 1:

if (TEST) {
    // CODE EXÉCUTÉ SI TEST VAUT TRUE
}

#### Cas 2:

if (TEST) {
    // CODE EXÉCUTÉ SI TEST VAUT TRUE
} else {
    // CODE EXÉCUTÉ SI TEST VAUT FALSE
}

### En pratique

````javascript
var boite = 'coucou'

if (boite == 'coucou') {
    alert('Vous avez dit coucou')
}


var resultat = 18 + 9;

if (result > 10 && resultat < 50) {
    alert('Vous avez un nombre supérieur à 10 et inférieur à 50');
} else {
    alert('Vous n\'avez pas un nombre conforme');
}


var unAutreNombre = 89;
if (unAutreNombre > 18) {
    // on entre ici unAutreNombre est supérieur à 89
}

if ((!unAutreNombre % 2) ) {
    // on entre ici unAutreNombre est pair, ce nombre modulo 2 donne 0.
    // -> or 0 équivaut à false. Pour "entrer" dans le if, il faut inverser la condition avec !
    alert('Nombre pair');
} else {
    // on entrte ici si unAutreNombre est impair
    alert('Nombre impair');
}


var uneInformation = 'matin';
if (typeof(uneInformation)) == 'string' && uneInformation =='matin' {

}

var fruits = ['fraise','abricot','orange'];

if (fruits[0] == 'fraise' && fruits[2]) {
    // On entre si le tableau contient 'fraise' au premier indice et contient au minimum trosi informations différentes
}

if (fruits[0] == 'fraise' || fruits[9]) {
    // On entre si le tableau contient 'fraise' au premier indice OU / ET contient au-minimum dix informations différentes
}


````


## Boucle WHILE

### Principe

Répetition d'un code en fonction d'une condition. Tant que la condition est vraie, on continue à parcourir la boucle.

Conséquences:
- il faut que la condition soit vraie pour entrer dans la boucle
- il faut que la condition devienne fausse à un moment donné pour pouvoir sortir de la boucle (sinon, on se trouve dans une boucle infinie)

### En pratique

while (CONDITION {
    // CODE EXECUTE TANT QUE LA CONDITION EST VRAIE
})

````javascript
var prenom = '';
while (prenom != 'Marc') {
    prenom = prompt('Donnez votre prénom');
}
alert('Vous vous appelez Marc.');
````

## Boucle FOR

### Principe

Il est utile de pouvoir fixer à l'avance le nombre d'itérations d'une boucle. Cela peut se faire avec une boucle while de la façon suivante:

var compteur = VALEUR_DE_DEPART;
while (compteur < LIMITE>) {
    //actions à réaliser
    compteur = compteur + 1;
}

Mais il existe une autre boucle plus adaptée, la boucle FOR:

for (var i = 0; i < LIMITE; i = i + 1 ) {
    //actions à réaliser
}

### En pratique

````javascript
for (var i=0; i < 5; i = i + 1) {
    alert('Tour numéro ' + (i + 1));
}
````

Remarque: 
- on préfère écrire ``i++`` plutôt que ``i=i+1``
- on peut aussi écrire des choses comme:

````javascript
for (var i=14; i>7; i--){
    alert(i);
}

//ou encore

for (var i=3; i<24; i*2) {
    alert(i);
}
````

## La récursion

La récursion consiste à mettre en place le comportement suivant:
- une fonction va se répéter
- cette répétition repose sur l'appel de la fonction à l'intérieur d'elle-même
- cet appel est conditionné (sinon la fonction se relancerait sans fin)

````javascript
var compteur = 0;
var uneFonction = function() {
    compteur++;
    alert(compteur);
    if (compteur < 4) {
        uneFonction();
};
uneFonction();
````

## Action après un temps d'attente ou à intervalle régulier

### Après un temps d'attente

On utilise ````setTimeout() ```` en indiquant le nom de la fonction et la durée souhaitée (en millisecondes).

````javascript
var affichage = function() {
    alert('Bonjour');
};

setTimeout(affichage,2000); // lancement après 2 secondes
````

Pour que la fonction ne se lance pas, on utilise la fonction en indiquant en argument l'identifiant du ````clearTimeout()````.

````javascript
var affichage = function() {
    alert('Bonjour');
};

var referenceTo = setTimeout(affichage,2000); // lancement après 2 secondes

clearTimeout(referenceTo);
````

### A intervalle régulier

On utilise ````setInterval()```` qui a un mode de focntionnement très proche du ````setTimeout()````.

````javascript
var repetition = function() {
    alert('Bonjour');
};

setInterval(repetition,2000);
````

Pour que la fonction ne se lance pas, on utilise la fonction en indiquant en argument l'identifiant du ````clearTimeout()````.


````javascript
var repetition = function() {
    alert('Un message avec répétition');
};

var identity = setInterval(repetition,2000); // lancement après 2 secondes

clearInterval(identity);
````