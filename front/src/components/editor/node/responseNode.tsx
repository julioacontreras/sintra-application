import { NodeProps } from './nodeProps'

export default function ResponseNode(props: NodeProps) {
  function onClick () {
    props.setCommandId(props.nodeGraph.id)
  }
  
  return (
    <g>
      <rect 
        x={props.nodeGraph.position.x}
        y={props.nodeGraph.position.y}
        width={props.nodeGraph.size.width} 
        height={props.nodeGraph.size.height} 
        fill="white"
        stroke="#28C43D"
        rx="15"
        filter="url(#dropShadow)">
      </rect>
      <text 
        x={props.nodeGraph.position.x + (props.nodeGraph.size.width/2)} 
        y={props.nodeGraph.position.y + (props.nodeGraph.size.height/2)} 
        fontFamily="Verdana" 
        fontSize="9" 
        fill="black" 
        textAnchor="middle" 
        alignmentBaseline="central"
        onClick={ onClick }
      >
        {props.nodeGraph.data.label}
      </text>
    </g>
  );
}
