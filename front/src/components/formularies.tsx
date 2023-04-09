import { Workflow } from '@/business/workflow/domain/workflow';
import { useState, useEffect } from 'react';
import { getDimensions } from '@/business/editor/domain/events/getDimensions'

import style from '@/styles/formulary.module.css'

export type NodesProps = {
  workflow: Workflow
  commandId: string
  setCommandId: (commandId: string) => void
}

export default function Formularies (props: NodesProps) {
  const workflow = props.workflow.commands
  const [ isVisibleFormulary, setIsVisibleFormulary ] = useState(false)
  const screen = getDimensions()

  function hideFormulary () {
    props.setCommandId('')
    setIsVisibleFormulary(false)
  }

  useEffect(() => {
    if (props.commandId) {
      setIsVisibleFormulary(true)
    }
  }, [isVisibleFormulary, props.commandId])

  return (
    <>
    {isVisibleFormulary ? 
      <>
        <div className={style.mainFormulary}>
          <div className={style.shadow} onClick={ hideFormulary }></div>
          <div className={style.formulary} style={{ top: (screen.height/2) - 300 }}>
            { props.commandId }
          </div> 
        </div>
      </> :
      <></>
    }
    </>
  );
}
