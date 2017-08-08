var palCens = ['puta', 'vadia', 'bixa'];
var palCensPers = [];

function censor(frase) {
    for(indice in palCens){
        frase = frase.replace(palCens[indice], "********")
    }
    for(indice in palCens){
         frase = frase.replace(palCensPers[indice], "********")
     }
     return frase;
}
function listarCensura() {
    return palCens.concat(palCensPers);
}
function adicionaPalCens(palavra) {
    palCens.push(palavra)
 }

exports.censor = censor;
exports.listarCensura = listarCensura;
exports.adicionaPalCens = adicionaPalCens;