let arr =[]
function findSecend(arr){
    let n=arr.length;
    let secend =0;
    let min=0;
    let left=0;
    let right=n-1
    
    while(n>0){
      if(arr[left]<=arr[right]){
          min= arr[left];
          rigth--;
      }
      else{
          min=arr[right];
          left++;
      }
      if(min>secend){
          min=secend;
      }
    }
max 
    return  secend;
}