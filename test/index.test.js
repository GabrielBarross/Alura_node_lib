const pegaArquivo = require ('../index')

const arrayResult = [{
    FileList: `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
}]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('Deve Retornar array com resultados', async () => {
        const resultado = await pegaArquivo('/Users/gabrielbarros/Desktop/Alura/Node/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('Deve retornar mensagem sem links', async () => {
        const resultado = await pegaArquivo('/Users/gabrielbarros/Desktop/Alura/Node/test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('Não há links')
    })
})

test('Deve ser uma função', () => {

})