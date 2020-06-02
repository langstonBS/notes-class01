const minimist = require("minimist");
const { parse, valid } = require('./lib/input');
const { exicute} = require('./lib/notes');

const parsing = parse(process.argv);
const valadating = valid(parsing);

if (valadating) exicute(valadating);
else console.log('didn ont workd ')





