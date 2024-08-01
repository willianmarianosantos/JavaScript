
/* 
alert('Telefone: 9 99 99999999\n 1 11 1111111111') 
<button onclick="alert('Contatos uteis');">Contatos uteis </button>

 */  


function numerosImpares() {
    let impares = [];
    for (let i = 1; i <= 10; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      }
    }
    console.log(impares);
    return impares; 
  }
  console.log(numerosImpares());



  function soma(){
  var soma = 0;
  for(var i = 1; i <= 100; i++){
      soma += i;
      console.log(soma);
  }
  console.log(soma);
}



function exibirMensagem() {
  var nome = document.getElementById('nome').value;
  var idade = document.getElementById('idade').value;
  
  var mensagem = nome + ' tem ' + idade + ' anos.';
  alert(mensagem)
}


function exibirMensagem2() {

  var valor1 = parseInt(document.getElementById('valor1').value);
  var valor2 = parseInt(document.getElementById('valor2').value);
  var valor3 = valor1 + valor2;


  // valor3.style.backgroundcolor ="#033421";

  // quando soma com string o int vira string
  
   alert( "A soma dos valores é: " + valor3) 

  
  if(valor3 % 2 === 0){ console.log( 'é par') 

  document.getElementById('botaoCor').style.backgroundColor = 'red'; } 

  else{ console.log('é impar')

    document.getElementById('botaoCor').style.backgroundColor = 'blue';
  }

}




 function changeColor(color) {
  document.body.style.backgroundColor = color;
}


function changeColorOnMouseOver(color) {
  document.body.style.backgroundColor = color;
}


function changeColorFromSelect() {
  var select = document.getElementById("colorSelect");
  var selectedColor = select.value;
  if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
  }
}


function toggleText() {
  const texto = document.getElementById('texto');
  texto.style.display = texto.style.display === 'none' ? 'block' : 'none';
}


function checkCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkedCount = 0;


  checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
          checkedCount++;
      }
  });


  var submitButton = document.getElementById('submitButton');
  submitButton.disabled = checkedCount < 2;
}


function changeTextColor(color) {
  document.getElementById('paragrafo').style.color = color;
}

function changeBgColor(color) {
  document.getElementById('paragrafo').style.backgroundColor = color;
}


function increaseFontSize() {
  const paragrafo = document.getElementById('paragrafo2');
  const style = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  paragrafo.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
  const paragrafo = document.getElementById('paragrafo2');
  const style = window.getComputedStyle(paragrafo, null).getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  paragrafo.style.fontSize = (currentSize - 2) + 'px';
}


function toUpperCase() {
  document.getElementById('paragrafo2').style.textTransform = 'uppercase';
}

function toLowerCase() {
  document.getElementById('paragrafo2').style.textTransform = 'lowercase';
}



function validateForm() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (!login || !senha || !confirmarSenha) {
      alert('Todos os campos devem ser preenchidos.');
      return false;
  }

  if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return false;
  }

  if (senha.length < 6 || senha.length > 10) {
      alert('A senha deve ter entre 6 e 10 caracteres.');
      return false;
  }

  return true;
}


function toggleFields() {
  const pessoaFisica = document.getElementById('fisica').checked;
  const cpfField = document.getElementById('cpf');
  const cnpjField = document.getElementById('cnpj');
  const dataNascimentoField = document.getElementById('dataNascimento');

  cpfField.disabled = !pessoaFisica;
  cnpjField.disabled = pessoaFisica;
  dataNascimentoField.disabled = !pessoaFisica;

  if (pessoaFisica) {
      cnpjField.value = '';
  } else {
      cpfField.value = '';
      dataNascimentoField.value = '';
  }
}


document.getElementById('cep').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

document.getElementById('cpf').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

document.getElementById('cnpj').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});

document.getElementById('dataNascimento').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^0-9-]/g, '');
});








