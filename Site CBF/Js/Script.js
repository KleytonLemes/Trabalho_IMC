 const form = document.querySelector('form');

 const ft_saida = document.getElementById('saida_ft');

 const nome_saida = document.getElementById('saida_nome');
 const sobrenome_saida = document.getElementById('saida_sobrenome');
 const descricao_saida = document.getElementById('saida_descricao');
 const altura_saida = document.getElementById('saida_altura');
 const peso_saida = document.getElementById('saida_peso');
 const imc_saida = document.getElementById('saida_IMC');
 const btn_saida = document.getElementById('saida_bt');

 form.onsubmit = (evento) => {

    const preencha_campos = document.getElementById('preencha'); 

     const inputs = new FormData(evento.target);


     const nome = inputs.get('nome_usuario');
     const sobrenome = inputs.get('sobrenome_usuario');
     const descricao = inputs.get('desc_usuario');

     const foto = inputs.get('url_ft');
     ft_saida.src =foto;

     const altura = inputs.get('altura');
     const peso = inputs.get('peso');

     const calcular_imc = (peso / (altura * altura)).toFixed(1);

         if (nome !=='' && sobrenome !=='' && descricao !=='' && altura!=='' && peso !=='') {
            
            if ( calcular_imc <= 18.5 ) {
                nome_saida.textContent = nome;
                sobrenome_saida.textContent = sobrenome;
                descricao_saida.textContent = descricao;
                altura_saida.textContent = 'Sua Altura: ' + altura;
                peso_saida.textContent = 'Seu Peso: ' + peso;
                imc_saida.textContent = 'Seu IMC: ' + calcular_imc;
                btn_saida.textContent = 'Magreza';
            }
            else if ( calcular_imc > 18.5 && calcular_imc <= 24.9 ) {
                nome_saida.textContent = nome;
                sobrenome_saida.textContent = sobrenome;
                descricao_saida.textContent = descricao;
                altura_saida.textContent = 'Sua Altura: ' + altura;
                peso_saida.textContent = 'Seu Peso: ' + peso;
                imc_saida.textContent = 'Seu IMC: ' + calcular_imc;
                btn_saida.textContent = 'Normal';
            }
            else if ( calcular_imc > 24.9 && calcular_imc <= 29.9 ) {
                nome_saida.textContent = nome;
                sobrenome_saida.textContent = sobrenome;
                descricao_saida.textContent = descricao;
                altura_saida.textContent = 'Sua Altura: ' + altura;
                peso_saida.textContent = 'Seu Peso: ' + peso;
                imc_saida.textContent = 'Seu IMC: ' + calcular_imc;
                btn_saida.textContent = 'Sobrepeso';
            }
            else if ( calcular_imc > 29.9 && calcular_imc <= 39.9 ) {
                nome_saida.textContent = nome;
                sobrenome_saida.textContent = sobrenome;
                descricao_saida.textContent = descricao;
                altura_saida.textContent = 'Sua Altura: ' + altura;
                peso_saida.textContent = 'Seu Peso: ' + peso;
                imc_saida.textContent = 'Seu IMC: ' + calcular_imc;
                btn_saida.textContent = 'Obesidade';
            }
            else if ( calcular_imc > 39.9 ) {
                nome_saida.textContent = nome;
                sobrenome_saida.textContent = sobrenome;
                descricao_saida.textContent = descricao;
                altura_saida.textContent = 'Sua Altura: ' + altura;
                peso_saida.textContent = 'Seu Peso: ' + peso;
                imc_saida.textContent = 'Seu IMC: ' + calcular_imc;
                btn_saida.textContent = 'Normal';
            }


         }
    return false;

}

var bt_validar = document.getElementById('validar');

 bt_validar.addEventListener('click', function() {
    var cont_escondido = document.getElementById('escondido')

    cont_escondido.classList.toggle('escondido')

 });