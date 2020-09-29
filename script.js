var numSort = []
var numEsco = []
let contador;
let rem;
function Sorteio(){
	let num= Math.floor(Math.random() * 60);
	let li = document.createElement("li");
    for (var i = 0; i < 6; i++) {
		numSort[i] =num;
		if(numSort[i]<=9){
			numSort[i]='0'+numSort[i];
		}else{
			numSort[i]=''+numSort[i];
		}
		num= Math.floor(Math.random() * 60);
		while(numSort.indexOf(num)!=-1){
			num= Math.floor(Math.random() * 60);
		}
    }

	for (var i = 0; i < 6; i++){
		li = document.createElement("li");
		li.innerHTML = numSort[i];
		document.getElementById("numSort").append(li);
	}
}
function addToList(num, pos){
    if(num.length == 2){
        if(numEsco.indexOf(num)!=-1){
            alert2("Erro","Número escolhido anteriormente. Digite outro número")
        }else if(parseInt(num)>60){
            alert2("Erro", "O números digitado não pode ser maior que 60")
        }else{
            numEsco[pos] = num;
        }
    }
}

function verificarAcertos(){


	var node = document.getElementsByTagName("LI")[0];
	for(var i =0;i<6;i++){
		node = document.getElementsByTagName("LI")[0];
		if (node.parentNode) {
		  node.parentNode.removeChild(node);
		}
	}
    let cont = 0;
    if(numEsco.length != 6){
        alert2("Erro", "A quantidade de números escolhidos é menor que 6.\n Digite 6 números de 01 a 60 com duas casas decimais")
    }else{
        for(var j=0; j<6; j++){
            if(numSort.indexOf(numEsco[j]) != -1){
                cont=cont+1;
            }
        }
		Sorteio();
        document.getElementById('totalAcertos').innerHTML = "O total de acertos foi " + cont;
    }

}



function alert2(title, text){
	let timerInterval
	Swal.fire({
	  title: title,
	  html: text,
	  timer: 5000,
	  timerProgressBar: true,
	  willOpen: () => {
	    Swal.showLoading()
	    timerInterval = setInterval(() => {
	      const content = Swal.getContent()
	      if (content) {
	        const b = content.querySelector('b')
	        if (b) {
	          b.textContent = Swal.getTimerLeft()
	        }
	      }
	    }, 1000)
	  },
	  onClose: () => {
	    clearInterval(timerInterval)
	  }
	}).then((result) => {
	  /* Read more about handling dismissals below */
	  if (result.dismiss === Swal.DismissReason.timer) {
	    console.log('O alerta foi fechado')
	  }
	})
}
