function clickked() {
  const textArea = document.getElementById("text-area");
  const textValue = textArea.value;
  const btn = document.getElementById("btn");
  const errorTag = document.getElementById("error");

  
  

  try {
    const textno = parseInt(textValue);
    if(isNaN(textno)){
        throw "Please enter a number boss"
    }
    else if(textno<18){
        throw "Bacca cacca not allowed"
    }
    errorTag.innerHTML = '';
    
  } 

  catch (err) {
    
    errorTag.innerHTML = 'ERROR:' + err;
  } 

  finally {
    console.log("all done sir");
  }
}
