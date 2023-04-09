

import { spaceVeriticalBetweenComponents } from "@/business/editor/domain/constants";
import { EdgeGraph } from "@/business/editor/domain/types/edgeGraph";

export type EdgeProps = {
  edgeGraph: EdgeGraph
}

export default function Edge(props: EdgeProps) {
  const x1 = props.edgeGraph.sourceData.position.x + (props.edgeGraph.sourceData.size.width/2)
  const y1 = props.edgeGraph.sourceData.position.y + (props.edgeGraph.sourceData.size.height)
  const x2 = props.edgeGraph.targetData.position.x + (props.edgeGraph.targetData.size.width/2)
  const y2 = props.edgeGraph.targetData.position.y 
  const spaceVert = (spaceVeriticalBetweenComponents/2)
  return <>
    <path 
      d={ `M ${x1},${y1} C ${x1},${y1 + spaceVert} ${x2},${y2 - spaceVert} ${x2},${y2}` }
      fill="none"
      stroke="#33A5FF"
      strokeWidth={ 2 }
      markerStart="url(#circle)"
      markerEnd="url(#circle)"
    />
  </>
}
