import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Editor from '../../../components/editor'
import { useFetchWorkflow } from '@/ddd/editor/domain/events/fetchWorkflow'
import { Workflow } from '@/ddd/workflow/domain/workflow'

export default function EditorPage() {
  const router = useRouter()
  const [data, setData] = useState<Workflow | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const project: string = router.query.project as string;
  const workflow: string = router.query.workflow as string;
  const fetchData = useFetchWorkflow(project, workflow)
  
  useEffect(() => {    
    if (!router.query.project) {
      return;
    }
    fetchData({
      callback: (data: Workflow) => {
        setData(data)
        setIsLoading(false)
      }
    })
  }, [fetchData, router.query.project]); 

  return <div style={{ width: '100vw', height: '100vh' }}>
      {!isLoading ? 
        <>
          <Editor workflow={ data } /> 
        </> :
        <>Loading...</> }    
    </div>
}
