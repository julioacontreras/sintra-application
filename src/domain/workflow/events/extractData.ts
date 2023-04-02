import jsonPath from 'jsonpath'

type Result = {
  valueSelected?: string
  selector?: string
  part: string
}

const buildReponse = (arrResult: Result[]) => {
  console.log({ arrResult })
  const arrReponse = arrResult.map(result => {
    if (!result.valueSelected) {
      return result.part
    }
    let value = ''
    if (typeof result.valueSelected === 'object') {
      value = JSON.stringify(result.valueSelected)
    } else {
      value = result.valueSelected
    }
    if (!result.selector) {
      throw 'Error: not exist selector'
    }
    return cleanValue(result.part.replace(result.selector, value))
  })
  return arrReponse.join('')
}

const cleanValue = (value: string): string => {
  value = value.replace('{{', '').replace('}}', '')
  return value
}

export const extractData = (data: object, selector: string): object => {
  const rx = /{{.+}}/
  const arrSel = selector.split('{{')
  const arrResult = arrSel.map(possibleSelector => {
    const parseCode = `{{${possibleSelector}`
    const isSelector = rx.exec(parseCode)
    if (isSelector?.length) {
      const sel = cleanValue(isSelector[0])
      const value = jsonPath.query(data, sel)[0]
      return {
        valueSelected: value,
        selector: sel,
        part: possibleSelector
      } as Result
    }
    return {
      part: possibleSelector
    } as Result
  })
  const resultPlain = buildReponse(arrResult)
  return JSON.parse(resultPlain)
}

export const extractDataToString = (data: object, value: unknown): string => {
  if (typeof value !== 'string') {
    return String(value)
  }
  const selector = String(value)
  const rx = /{{.+}}/
  const arrSel = selector.split('{{')
  const arrResult = arrSel.map(possibleSelector => {
    const parseCode = `{{${possibleSelector}`
    const isSelector = rx.exec(parseCode)
    if (isSelector?.length) {
      const sel = cleanValue(isSelector[0])
      const value = jsonPath.query(data, sel)[0]
      return {
        valueSelected: value,
        selector: sel,
        part: possibleSelector
      } as Result
    }
    return {
      part: possibleSelector
    } as Result
  })
  const resultPlain = buildReponse(arrResult)
  return resultPlain
}
