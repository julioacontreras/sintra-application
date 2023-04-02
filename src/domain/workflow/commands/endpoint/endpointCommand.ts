/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPReturn } from 'src/adapters/serverHTTP/types'
import { HTTPMethods, serverHTTP, statusHTTP } from '../../../../adapters/serverHTTP'
import { EndpointParameters } from '../../commands/endpoint/endpointParameters'
import { EndpointOutput } from '../../commands/endpoint/endpointOutput'
import { Command } from '../../types/command'

export const runEndpoint = (el: Command, runIds: any) => {
  const paramsEnv = el.parameters as any
  const env = process.env.NODE_ENV || ''
  const params = paramsEnv[env] as EndpointParameters
  const output = el.outputs as EndpointOutput
  serverHTTP.add(el.title, {
    useCase: async (request: {
      body: { username: string; password: string }
    }): Promise<HTTPReturn> => {
      console.log('runEndpoint')
      const data = await runIds(output.default.sendToIds, request.body)
      return {
        response: data,
        code: statusHTTP.OK,
      }
    },
    route: params.route,
    method: params.method as unknown as HTTPMethods,
  })
}

