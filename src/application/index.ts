import { serverHTTP } from '../adapters/serverHTTP'
import { application } from './v1/application'
import { healthCaseUse } from './health'

export async function startApp () {
  serverHTTP.add('health', {
    useCase: healthCaseUse,
    route: '/api/health',
    method: 'GET',
  })

  await application()

  serverHTTP.run()
}
