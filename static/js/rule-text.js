
const form = document.getElementById('some-form')
form.addEventListener('submit', e => {
    e.preventDefault()
   // console.log('Deu certo')
})

//function pegarTexto() {
//  let inputElement = document.getElementById("meuInput");
//    let texto = inputElement.value;

//    escreverTexto()
//}

function removerDuplicatas(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}


function pegarTexto(){
  let inputElement = document.getElementById("meuInput");
  let inputElement2 = document.getElementById("meuInput-2");
  let inputElement3 = document.getElementById("meuInput-3");
  let textareaElement = document.getElementById("meuTextarea");
  let tag_num = inputElement.value.split(inputElement2.value, 1000);
  console.log(tag_num);
  //console.log('--->', inputElement2.value);
  
  let listaSemDuplicatas;

  let read_code = [];

  for (let k = 0; k < tag_num.length; k++) {
    read_code.unshift(tag_num[k])
    listaSemDuplicatas = removerDuplicatas(read_code);

    console.log(listaSemDuplicatas);

    textareaElement.innerHTML = '';

  }

  //listaSemDuplicatas = removerDuplicatas(read_code);

  for (let a = 0; a < listaSemDuplicatas.length; a++) {
    console.log('>>>>>>>>>>>> ',listaSemDuplicatas[a])
    //textareaElement.innerHTML += `${listaSemDuplicatas[a]}, `;
    //if (inputElement2.substring(0, 3) == listaSemDuplicatas[a].substring(0, 2)){
      textareaElement.innerHTML += `${listaSemDuplicatas[a]}\n`;
   // }
    
  }
  
}
