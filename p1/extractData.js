// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonPath = require('jsonpath')

const buildReponse = (arrResult) => {
  console.log(arrResult)
  const arrReponse = arrResult.map(r => {
    if (!r.valueSelected) {
      return r.part
    }
    let value = ''
    if (typeof r.valueSelected === 'object') {
      value = JSON.stringify(r.valueSelected)
    } else {
      value = r.valueSelected
    }
    return cleanValue(r.part.replace(r.selector, value))
  })
  return arrReponse.join('')
}

const cleanValue = (value) => {
  value = value.replace('{{', '').replace('}}', '')
  return value
}

const extractData = (data, selector) => {
  const rx = /{{.+}}/
  const arrSel = selector.split('{{')
  const arrResult = arrSel.map(possibleSelector => {
    const parseCode = `{{${possibleSelector}`
    const isSelector = rx.exec(parseCode)
    if (isSelector?.length) {
      let sel = cleanValue(isSelector[0])
      const value = jsonPath.query(data, sel)[0]
      return {
        valueSelected: value,
        selector: sel,
        part: possibleSelector
      }
    }
    return {
      part: possibleSelector
    }
  })

  const resultPlain = buildReponse(arrResult)
  return JSON.parse(resultPlain)
}

const result = extractData({ foo: 'bar' }, '{ "code": "00001", "message": "Is not possible authenticate" }')

console.log(result)