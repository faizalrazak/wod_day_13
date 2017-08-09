function roundMarks(mark){
  var result;
  
  for(var i=0; i<mark.length; i++){
    document.write(mark[i]);
    if(mark[i] <38){
      result = mark[i];
    }else{
      var a = mark[i] +  1;
      var b = mark[i] + 2;
      
      if( a % 5 == 0){
        result = a;
      }else if( b % 5 == 0){
        result = b;
      }else{
        result = mark[i];
      }
    }
    document.write(" = "+result+"<br>");
  } 
}
roundMarks([37,58,41]);