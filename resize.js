//Declare tabletSize() here
function tabletSize(){
  const doc = document;
  let height = "800px*0.75";
  let width = "1440px*0.75";
  let graballdivs = doc.querySelectorAll("section");
  for(let x = 0;x<graballdivs.length;x++){
    graballdivs[x].style.height = height;
    graballdivs[x].style.width = width;
  }
}
//Declare phoneSize() here
function phoneSize(){
  const doc = document;
  let height = "800px*0.5";
  let width = "1440px*0.5";
  let graballdivs = doc.querySelectorAll("section");
  for(let i = 0;i<graballdivs.length;i++){
    graballdivs[i].style.height = height;
    graballdivs[i].style.width = width;
  }
}
