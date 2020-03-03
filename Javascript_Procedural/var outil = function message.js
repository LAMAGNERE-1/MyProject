var outil = function(message) {
    alert(message);
};

var action = function(element) {
    var texte = 'coucou';
    element(texte);
};

action(outil);



(function () {
    alert('Bonjour');
})();

(function (message) {
    alert(message);
}('Bonjour')