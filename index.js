function marks(x){
  
  //Rename your x variable to be something meaningful.. eg: numArray
  var result;
  
  for(var i=0; i<x.length; i++){
    document.write(x[i]);
    if(x[i] <38){
      result = x[i];
    }else{
      var a = x[i] +  1;
      var b = x[i] + 2;
      
      if( a % 5 == 0){
        result = a;
      }else if( b % 5 == 0){
        result = b;
      }else{
        result = x[i];
      }
    }
    document.write(" = "+result+"<br>");
  }
  
}
marks([37,58,41]);
