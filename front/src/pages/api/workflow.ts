import type { NextApiRequest, NextApiResponse } from 'next'
import { loadProject } from '@/business/project/application/loadProject'
import { loadWorkflow } from '@/business/workflow/application/loadWorkflow'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let isLoaded = false
  const project = loadProject(`${req.query.project}.json`)
  for (const item of project.collection) {
    if (item.id === req.query.workflow) {
      const workflow = loadWorkflow(item.filename)
      res.status(200).json(workflow)
      isLoaded = true
      break
    }
  }

  if (!isLoaded) {
    console.log('not loaded')
    res.status(200).json({ error: 'not loaded' })
  }
}
