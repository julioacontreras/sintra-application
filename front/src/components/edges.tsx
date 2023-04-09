

import { EdgeGraph } from "@/business/editor/domain/types/edgeGraph";
import Edge from "./edge";

export type EdgesProps = {
  edges: EdgeGraph[]
}

export default function Edges(props: EdgesProps) {
  return <>
    {props.edges.map((edge: EdgeGraph, index: number) => (
      <Edge edgeGraph={edge} key={index} ></Edge>
    ))}       
  </>

}