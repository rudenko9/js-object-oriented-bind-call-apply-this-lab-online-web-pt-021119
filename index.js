function justInvoke(fn) {
  return fn();
 };
 
 function setThisWithCall(fn, thisValue, arg){
   this.fn = fn;
   this.thisValue = thisValue;
   this.arg = arg;
   
 }
