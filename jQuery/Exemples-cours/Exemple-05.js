// Traitement différencié de paragraphes en JavaScript pur
var mesParagraphes = document.querySelectorAll('p');

for (var i = 0; mesParagraphes[i]; i++) {
    mesParagraphes[i].innerHTML = mesParagraphes[i].innerHTML + ' - Ce paragraphe comporte ' + mesParagraphes[i].innerHTML.length + ' caractères.';
}

// Le même traitement en utilisant each() avec jQuery
$('p').each(function () {
    var texte = $(this).html() + ' - Ce paragraphe comporte ' + $(this).html().length + ' caractères.';
    $(this).html(texte);
});