import type { NextApiRequest, NextApiResponse } from 'next'

import { loadProject } from '@/business/project/application/loadProject'
import { loadWorkflow } from '@/business/workflow/application/loadWorkflow'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const collection = []
  const project = loadProject(`${req.query.project}.json`)
  for (const filename of project.collection) {
    const workflow = loadWorkflow(filename)
    collection.push({
      filename,
      workflow
    })
  }
  res.status(200).json(collection)
}
