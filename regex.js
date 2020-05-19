exports.identifyCnpj = (empresaCnpj) => {
    const regexCompleto = /[\S ]+- [\S ]+ - \d{2}.\d{3}.\d{3}\/\d{4}-\d{2}/i;
    const regexSimplificado = /[\S ]+- \d{2}.\d{3}.\d{3}\/\d{4}-\d{2}/i;
    const regexExcepcional = /[\S ]+ - \d..\/-/i

    const completo = empresaCnpj.match(regexCompleto);
    if(completo) return completo;

    const simplificado = empresaCnpj.match(regexSimplificado);
    if(simplificado) return simplificado;

    const excepcional = empresaCnpj.match(regexExcepcional);
    if(excepcional) return excepcional;


    return false;
}