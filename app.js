// npm - global command,comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// nom install -g <packageName>
// sudo npm install - g <packageName> (mac)

// package.json -manifest file (stores important info about project/package)'
// manual approach (create package json in the root, create properties etc) 
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// INTERESTING(First package) - 1:54:55 to 2:00:00

const _=require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems) 