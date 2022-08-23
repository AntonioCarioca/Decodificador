function criptografar(){

    /**
     * Iniciar variaveis:
     * 1.Botão Criptografar
     * 2.Area do texto
     * 3.Transfromar texto em um vetor
     * 4.Area de componentes 1
     * 5.Area de componentes 2
     * 6.Area do texto Criptografado
     */
     let btn1 = document.getElementById('btn1')
     let caixa = document.getElementById('caixa').value

     /**
      * split() metodo para transformar uma string em um vetor
      */
     let vetor = caixa.split('')
     let container1 = document.getElementById('container1')
     let container2 = document.getElementById('container2')
     let resultado = document.getElementById('resultado')

    /**
     * Verificar se existe algum texto
     */
    if(caixa == ''){
        alert('Sem Mensagem')
    }
    else{

        /**
         * Fazer a varredura no vetor
         */
        for(let i = 0; i <= vetor.length; i++){

            if(vetor[i] == 'a'){
                vetor[i] = 'ai'
            }

            if(vetor[i] == 'e'){
                vetor[i] = 'enter'
            }

            if(vetor[i] == 'i'){
                vetor[i] = 'imes'
            }

            if(vetor[i] == 'o'){
                vetor[i] = 'ober'
            }

            if(vetor[i] == 'u'){
                vetor[i] = 'ufat'
            }
        }

        /**
         * 1.Esconder area de componentes 1
         * 2.Mostrar area de componentes 2
         */
        container1.style.display = 'none'
        container2.style.display = 'block'

        /**
         * Exibir mensagem criptografada
         * join() metodo para unir elementos de
         * um vetor em uma String
         */
        resultado.innerHTML = vetor.join('')

        /**
         * Função para o botão de copiar texto
         */
        document.getElementById('copiar').addEventListener("click",function(){
            resultado.select()
            document.execCommand('copy')
        })
    }    

}

function descriptografar(){

    let btn2 = document.getElementById('btn2')
    let caixa = document.getElementById('caixa').value
    /*let vetor = caixa.split('')*/
    let container1 = document.getElementById('container1')
    let container2 = document.getElementById('container2')
    let resultado = document.getElementById('resultado')

    if(caixa == ''){
        alert("Sem Mensagem")
    }
    else{
        
        /**
         * O metodo replace() faz a trocar de
         * uma substring por outra.
         */
        let trocarA = caixa.replace(/ai/g,'a')
        let trocarE = trocarA.replace(/enter/g,'e') 
        let trocarI = trocarE.replace(/imes/g,'i')
        let trocarO = trocarI.replace(/ober/g,'o')
        let trocarU = trocarO.replace(/ufat/g,'u')
               
        container1.style.display = 'none'
        container2.style.display = 'block'

        resultado.innerHTML = trocarU

        document.getElementById('copiar').addEventListener("click",function(){
            resultado.select()
            document.execCommand('copy')
        })

    }

}