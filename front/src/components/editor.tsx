
import { useState } from 'react'

import { startEditor } from '@/business/editor/application/startEditor'
import { Workflow } from '@/business/workflow/domain/workflow'

import Formularies from '@/components/formularies'
import Nodes from '@/components/nodes'
import Edges from '@/components/edges'

import style from '@/styles/editor.module.css'

export type EditorProps = {
  workflow: Workflow | null 
}

export default function Editor(props: EditorProps) {
  function save(workflow: Workflow) {
    console.log(workflow)
  }


  const [commandId, setCommandId] = useState('')
  if (props.workflow) {
    const {
      nodes,
      edges
    } = startEditor(props.workflow)    
    return (
      <>
      <Formularies
        workflow={ props.workflow }
        commandId={ commandId }
        setCommandId={ setCommandId }
        onSave={ save }
      ></Formularies>      
      <svg xmlns="http://www.w3.org/2000/svg" className={style.canvas} viewBox={ `50 0 300 450` }>
        <defs>
            <filter id="dropShadow" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
                <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
                <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>      
            <marker id="circle" markerWidth="13" markerHeight="13" refX="5" refY="5">
                <circle cx="5" cy="5" r="1" fill="#33A5FF"  stroke="#287FC4" strokeWidth={0.3} />
            </marker>
        </defs>      
        <Nodes
          nodes={nodes}
          setCommandId={setCommandId}
        />
        <Edges
          edges={edges}
        />
      </svg>
      </>
    )
  } else {
    return <> Error </>
  }
}
