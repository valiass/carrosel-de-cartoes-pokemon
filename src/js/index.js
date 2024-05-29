
//  OBJETIVO - quando clicarmos na aba, temos que mostrar o 
//  conteúdo da aba que foi clicada pelo usuário
//  e esconder  o conteúdo da aba anterior

//  - passo 1 - dar um jeito de pegar os elementos que
//  representam as abas no HTML

//  - passo 2 - dar um jeito de identificar o clique
//  no elemento da aba

//  - passo 3 - quando o usúario clicar, desmarcar
//  a aba selecionada

//  - passo 4 - marcar a aba clicada como selecionada

//  - passo 5 - esconder o conteúdo anterior

//  - passo 6 - mostrar o conteúdo da aba selecionada



//  passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
//  console.log(document.querySelectorAll(".aba"));
 const abas = document.querySelectorAll(".aba")
//  console.log(abas);

//  - passo 2 - dar um jeito de identificar o clique no elemento da aba
 abas.forEach(aba => { 

    aba.addEventListener("click", function(){

     if (aba.classList.contains("selecionada")){
         return
     }
        //   console.log("não estava selecionada")

      //    console.log("clicou na aba", aba);

        selecionarAba(aba)
        mostrarInformacao(aba)

      })
 }) 
  
    function selecionarAba(aba){
   
     //  - passo 3 - quando o usúario clicar,desmarcar a aba selecionada
      //   
      const abaSelecionada = document.querySelector(".aba.selecionada")
      // console.log(abaSelecionada);
   abaSelecionada.classList.remove("selecionada")

      //    - passo 4 - marcar a aba clicada como 
      // selecionada 
   aba.classList.add("selecionada");
}

   function mostrarInformacao(aba){

    // - passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    //   console.log(informacaoSelecionada)
    informacaoSelecionada.classList.remove("selecionada")

    // - passo 6 - mostrar o conteúdo da aba selecionada
    
    //   console.log(aba.id)
      const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`;
    //   console.log(idDoElementoDaInformacaoDaAba)

     const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba);
     informacaoASerMostrada.classList.add("selecionada");
}


