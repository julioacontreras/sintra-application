import IconApi from '../icon/api';
import { NodeProps } from './nodeProps'

export default function ApiNode(props: NodeProps) {
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
        stroke="#FE2BD8"
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
        onClick={  
          onClick
        }
        >
        {props.nodeGraph.data.label}
      </text>
      <IconApi
          x={ props.nodeGraph.position.x + 7 }
          y={ props.nodeGraph.position.y + 11 }
          fill="#DDD"
        ></IconApi>       
    </g>
  );
}
