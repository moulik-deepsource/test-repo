function doIf() {
  if (true) {
    var build = true;
  }

  console.log(build);
}

// hello world
function doIfElse() {
  if (true) {
    var build = true;
  } else {
    var build = false;
  }
}

function doTryCatch() {
  try {
    var build = 1;
  } catch (e) {
    var f = build;
  }
}

function checkIsEqual(a, b){
  return a == b
}

checkIsEqual(10, "10")

!!!foo

var foo = /bar   {3}baz/;

if (a) { if (b) console.log(1); else console.log(2) } else console.log(3)

do {foo();} while (bar)

do{[1, 2, 3].map(bar);} while (bar)

if (foo) bar()

if (foo) { bar() } else baz()

let a = {
  true: ''
}

a['true']

var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;

