// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//   '["one", "two"]',
//   '{"a": "b", "c": "d"}',
//   '[null,false,true]',
//   '{"foo": true, "bar": false, "baz": null}',
//   '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
//   '{"boolean, true": true, "boolean, false": false, "null": null }',
//    ['"boolean, true"','true','"boolean, false"','false,"null"','null']
 
var parseJSON = function(json) {
  // your code goes here
  var firstChar = json[0];
// debugger;
  //array handling
  if(firstChar === '['){
    if (json === '[]'){
      return [];
    }
    var result = [];
    var delimitter = json.includes(', ') ? ', ' : ',';
    var pieceOfJson = json.slice(1, json.length-1).split(delimitter);  
    for (var i = 0; i < pieceOfJson.length; i++){
      result = result.concat(parseJSON(pieceOfJson[i]));
    }
    return result;
  }

 // if(firstChar === '{'){
 //    if (json === '{}'){
 //      return {};
 //    }
    
//split using ': '
    // var key;
    // var value;
    // var result = {};
    // var pieceOfJson = json.slice(1, json.length-1).split(': ');
    // for (var i = 0; i < pieceOfJson.length; i++) {
      
    //   if (i % 2 === 0) {
    //     key = parseJSON(pieceOfJson[i]);
    //   } 
    //   if (i % 2 === 1) {
    //     value = parseJSON(pieceOfJson[i]);
    //   }
    //   result[key] = value;
    // }

  // debugger;
  // object handling
  if(firstChar === '{'){
    if (json === '{}') {
      return {};
    }
    var result = {};
    var pieceOfJson = json.slice(1, json.length-1).split(', '); //[1 ':', ':']  if indexOf(', ') < indexOf(': ') indeOf(', ', ':')
    // var pieceOfJson = json.slice(1, json.length-1).split(': ');
    for (var i = 0; i < pieceOfJson.length; i++) {
      var keyValuePairs = pieceOfJson[i].split(': ');        
      result[parseJSON(keyValuePairs[0])] = parseJSON(keyValuePairs[1]);
    }
  return result;
  }

  if(firstChar === '"') {
    return json.slice(1, json.length-1);
  }
  //  replaced with eval for the moment
  // if(json === 'null'){
  //   return null;
  // }
  // if(json === 'false'){
  //   return false;
  // }
  // if(json === 'true'){
  //   return true;
  // }
  // if(!isNaN(Number(json))){  //returns if it is a number including zero
  //   return Number(json);
  // }
  return eval(json);
};


// var eachSection = function(string, open, close) {
//   return string.slice(string.indexOf(open), string.lastIndexOf(close);
// }