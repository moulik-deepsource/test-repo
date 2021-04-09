function doIf() {
  if (true) {
    var build = true
  }

  console.log(build)
}

// hello world
function doIfElse() {
  if (true) {
    var build = true
  } else {
    var build = false
  }
}

function doTryCatch() {
  try {
    var build = 1
  } catch (e) {
    var f = build
  }
}

obj && obj.prop
obj != null ? obj.prop : undefined
obj && obj[key]
obj != null ? obj[key] : undefined
