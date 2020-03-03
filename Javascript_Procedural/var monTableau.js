var monTableau = ['un','deux',6,'terre']

for (var i=0;monTableau[i];i++) {   // on peut mettre monTableau, car il s'agit d'un test true or false, à condition que monTableau ne contienne ni 0, ni null, ni undefined, ni rien qui puisse être false
alert(monTableau[i]);
}

// ou mieux

for (var i=0;monTableau[i] || typeof(monTableau[i] == 'number');i++) {   
alert(monTableau[i]);
}