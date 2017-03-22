//declare samecolor() here
function samecolor(){
  let color = "#993300";
  const doc = document;
  let alldivs = doc.querySelectorAll("#samecolor div");
  for(let x = 0;x<alldivs.length;x++){
    alldivs[x].style.backgroundColor = color;
    alldivs[x].style.opacity = Math.random();
  }
}

//declare diffcolor() here
function diffcolor(){
  let firstcolor = "#999900";
  let secondcolor = "#990099";
  const doc = document;
    let finddivs = doc.querySelectorAll("#diffcolor div");
  for(let i = 0;i<finddivs.length;i++){
    if(i%2 == 0){
      finddivs[i].style.backgroundColor = firstcolor;
    }
    else{
      finddivs[i].style.backgroundColor = secondcolor;
    }
  }
}
