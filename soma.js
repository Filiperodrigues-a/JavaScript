const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => a / b;

const mostraResultado = (a, b) => {
    console.log("Soma entre ${a} e ${b}", soma(a, b));
    console.log("Subtração de ${a} e ${b}", subtrai(a, b));
    console.log("Produto de ${a} e ${b}", multiplica(a, b));
    console.log("Quonciente de ${a} e ${b}", divide(a, b))


}
mostraResultado(10, 2);

