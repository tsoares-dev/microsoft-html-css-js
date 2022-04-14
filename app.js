'use strict'
/*Em seu javascript, talvez você queira adicionar um ponto e vírgula de fechamento no final da linha de código. Embora seja possível omitir um ponto-e-vírgula de fechamento no código JavaScript, é uma boa ideia entender quando os pontos-e-vírgulas são necessários antes de tomar decisões a esse respeito. Há um debate sobre esse tópico na Comunidade do JavaScript, mas considere o uso de ponto e vírgula uma melhor prática.*/
const switcher = document.querySelector('.btn');
/*bter a referência do botão.*/

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
/*manipulador do evento click. No código a seguir, você adiciona um ouvinte para o evento click. A função passada para o ouvinte de eventos é seu manipulador de eventos real.*/

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
