const { check, validationResult } = require('express-validator');

module.exports.validar_noticia = function () {
    return [check('titulo').notEmpty().withMessage('Titulo é obrigatório'),
        check('resumo').notEmpty().isLength({
            min: 10,
            max: 100
        }).withMessage('Resumo é obrigatório e deve conter de 10 as 100 caracteres'),
        check('autor').notEmpty().withMessage('O campo autor é obrigatório'),
        check('data_noticia').notEmpty().withMessage('A data da noticia é obrigatória')
    ]
}

module.exports.validar_colunista = function(){
    return [
        check('nome').notEmpty().withMessage('Nome é obrigatório'),
        check('email').notEmpty().withMessage('E-mail é obrigatório'),
        check('curriculo').notEmpty().withMessage('Curriculo é obrigatório'),
    ]
}