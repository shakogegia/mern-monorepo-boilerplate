const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const mergeObjectsByKey = (arr1, arr2, key) => {
  const temp = []

  arr1.forEach(x => {
    arr2.forEach(y => {
      if (x[key] === y[key]) {
        temp.push({ ...x, ...y })
      }
    })
  })

  return temp
}

export { capitalize, mergeObjectsByKey }
