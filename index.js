
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] })
  }
  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto)
  } catch(erro) {
    trataErro(erro);
  }
}

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf8'
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((data) => {console.log(data)})
//     .catch((err) => trataErro(err))
// }



// function pegaArquivo(caminhoDoAquivo){
//     const encoding = 'utf8'
//     fs.readFile(caminhoDoAquivo, encoding, (err, data) => {
//         if (err){
//             trataErro(err)
//         }
//         console.log(chalk.green(data))
//     })
// }


module.exports = pegaArquivo;