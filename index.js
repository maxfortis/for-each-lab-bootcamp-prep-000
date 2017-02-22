var array = []

function iterativeLog(array){
  //array = ['cat', 'key', 'bat', 'mouse']
  array.forEach((element, index) =>{
  console.log(`${index}: ${element}`)});
}

function iterate(callback){
  array = ['cat', 'key', 'bat', 'mouse'];
  array.forEach(callback);
  return array;


}
function doToArray(array, callback){
  array.forEach(callback)

}
