

 function saveNewProduct(){
   if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont)+1;
   } else {
      localStorage.cont = 1;
   }
   
   produto= document.getElementById('productName').value + ' ; ' + document.getElementById('code').value + ' ; ' + document.getElementById('price').value;
   localStorage.setItem("Produto: "+localStorage.cont,produto);
}


function saveNewPerson(){
   if (localStorage.cont) {
      localStorage.cont = Number(localStorage.cont)+1;
   } else {
      localStorage.cont = 1;
   }
   
   pessoa= document.getElementById('name').value + ' ; ' + document.getElementById('email').value;
   localStorage.setItem("Pessoa: "+localStorage.cont,pessoa);
}