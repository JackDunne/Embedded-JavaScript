//declare samecolor() here
function samecolor(hex){
  const doc = document;
  let alldivs = doc.querySelectorAll("#samecolor div");
  for(let x = 0;x<alldivs.length;x++){
    alldivs[x].style.background-color = hex;
    alldivs[x].style.opacity = Math.Random();
  }
}

//declare diffcolor() here
function diffcolor(hex){
  const doc = document;
  let finddivs = doc.getElementById("diffcolor > div");
  for(let i = 0;i<finddivs.length;i++){

  }
}
