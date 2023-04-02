import { ApiRequestOutput } from '../../commands/apiRequest/apiRequestOutput'
import { Command, ReturnRun } from '../../types/command'
import axios, { AxiosError } from 'axios'
import { prepareReturnRun } from '../../events/prepareReturnRun'
import { extractDataToString } from '../../events/extractData'

export const useApiRequest = (command: Command) => {
  const run = async (data: object): Promise<ReturnRun> => {
    console.log('useApiRequest', command, data)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params = command.parameters as any
    const outputs = command.outputs as ApiRequestOutput
    const env = process.env.NODE_ENV || ''
    const url = extractDataToString(data, params[env].url)
    console.log(data)
    console.log({ url })
    try {
      const apiResponse = await axios.request({
        url,
        method: params[env].method,
        data
      })  
      return prepareReturnRun(apiResponse, outputs.default)
    } catch(error) {
      const errorAxios = error as AxiosError
      const responseAxios = errorAxios.response || { status: 0, data: {} }
      const response = {
        status: responseAxios.status,
        data: responseAxios.data
      }
      return prepareReturnRun(response, outputs.default)
    }
  }
  return run
}
