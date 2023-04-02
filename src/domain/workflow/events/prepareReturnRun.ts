import { extractData } from './extractData'
import { Output } from '../types/output'

export const prepareReturnRun = (data: object, output: Output) => {
  const result = extractData(data, output.result)
  return {
    ids: output.sendToIds,
    result,
  }
}
