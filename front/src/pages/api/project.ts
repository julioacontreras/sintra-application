import type { NextApiRequest, NextApiResponse } from 'next'

import { loadProject } from '@/ddd/project/useCase/loadProject'
import { loadWorkflow } from '@/ddd/workflow/useCase/loadWorkflow'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const collection = []
  const project = loadProject(`${req.query.project}.json`)
  for (const filename of project.collection) {
    const workflow = loadWorkflow(filename.filename)
    collection.push({
      filename,
      workflow
    })
  }
  res.status(200).json(collection)
}
