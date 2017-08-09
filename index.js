function studentMark(markArrays){
  var results = [];
  for(var i=0; i<markArrays.length; i++){
    var mark;
    if(markArrays[i] < 38){
      mark = markArrays[i];
    }else{ 
      if( markArrays[i] % 5 == 3){
        mark = markArrays[i] + 2;
      }else if( markArrays[i] % 5 == 4){
        mark = markArrays[i] + 1;
      }else{
        mark = markArrays[i];
      }
    }
    results.push(mark);
  }
 return results; 
}
document.write(studentMark([33,58,69]));