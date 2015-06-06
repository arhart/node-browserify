var names = [];
var defined = []
var values = [];
var isDefined;

isDefined = true;
try {
  names.push('__dirname');
  values.push(__dirname);
} catch (e) {
  isDefined = false;
}
defined.push(isDefined);

isDefined = true;
try {
  names.push('__filename');
  values.push(__filename);
} catch (e) {
  isDefined = false;
}
defined.push(isDefined);

isDefined = true;
try {
  names.push('process');
  values.push(process);
} catch (e) {
  isDefined = false;
}
defined.push(isDefined);

isDefined = true;
try {
  names.push('global');
  values.push(global);
} catch (e) {
  isDefined = false;
}
defined.push(isDefined);

isDefined = true;
try {
  names.push('Buffer');
  values.push(Buffer);
} catch (e) {
  isDefined = false;
}
defined.push(isDefined);

var result = '';
for (var i = 0; i < names.length; i++) {
  result += names[i] + ',' + defined[i] + ',' + values[i] + '\n';
}
console.log(result);
