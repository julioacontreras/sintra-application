import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Editor from '../../../components/editor'

export default function EditorPage() {
  const router = useRouter()
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {    
    const project = (router.query.project as string)
    const workflow = (router.query.workflow as string)
    async function fetchData () {
      const response =  await fetch(
        `/api/workflow?project=${project}&workflow=${workflow}`,
        {
          method: 'GET',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          referrerPolicy: 'no-referrer'
        },
      )
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }
    if (project && workflow) {
      fetchData()
    }
  }, [router.query.project, router.query.workflow]); 

  return <div style={{ width: '100vw', height: '100vh' }}>
      {!isLoading ? 
        <>
          <Editor workflow={ data } /> 
        </> :
        <>Loading...</> }    
    </div>
}
