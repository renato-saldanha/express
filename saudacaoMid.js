function saudacao(nome) {
  return function(res, req, next) { //retorno de função midleware, param de respsota, requisição e next são encapsulados
    console.log(`Olá ${nome}`);
    next();
  }
}

module.exports= saudacao;