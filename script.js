function convert() {
    let cmVal = Number(document.getElementById("inputDiv").value);
  
    let inchVal = cmVal / 2.54;
  
    let result = document.getElementById("result");
  
    result.innerText = inchVal.toFixed(2) + " inches";
  }

//   function convert() {
//     let cmVal = Number(document.getElementById("inputDiv").value);

//     let inval = cmVal * 2.54;

//     let result = document.getElementById("result");

//     result.innerText = inchVal.toFixed(2) + " cm";
//   }
  