// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

//   '["one", "two"]',
//   '{"a": "b", "c": "d"}',
//   '[null,false,true]',
//   '{"foo": true, "bar": false, "baz": null}',
//   '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
//   '{"boolean, true": true, "boolean, false": false, "null": null }',


var parseJSON = function(json) {
  // your code goes here
  var firstChar = json[0];
// debugger;
  
  if(firstChar === '['){
    if (json === '[]') {
      return [];
    }
    var result = [];
    var delimitter = json.includes(', ') ? ', ' : ',';
    var pieceOfJson = json.slice(1, json.length-1).split(delimitter);  
    for (var i = 0; i < pieceOfJson.length; i++) {
      result = result.concat(parseJSON(pieceOfJson[i]));
    }
    return result;
  }
  // debugger;
  if(firstChar === '{'){
    if (json === '{}') {
      return {};
    }
    var result = {};
    var pieceOfJson = json.slice(1, json.length-1).split(', '); 
    for (var i = 0; i < pieceOfJson.length; i++) {
      var keyValuePairs = pieceOfJson[i].split(': ');        
      result[parseJSON(keyValuePairs[0])] = parseJSON(keyValuePairs[1]);
    }
  return result;
  }

  if(firstChar === '"') {
    return json.slice(1, json.length-1);
  }

  if(json === 'null'){
    return null;
  }
  if(json === 'false'){
    return false;
  }
  if(json === 'true'){
    return true;
  }
  if(!isNaN(Number(json))){  //returns if it is a number including zero
    return Number(json);
  }
};


// var eachSection = function(string, open, close) {
//   return string.slice(string.indexOf(open), string.lastIndexOf(close);
// }