function frez (obj){
  for(var i=0;i<obj.length;i++){
      if(obj[i] instanceof Object){
          frez(obj[i])
      }
      else{
          Object.freeze(obj[i])
      }
  }
}