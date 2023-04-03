"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reactflow_1 = __importDefault(require("reactflow"));
require("reactflow/dist/style.css");
function Editor(props) {
    const initialNodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
    console.log(props.workflow);
    return (<>
      <reactflow_1.default nodes={initialNodes} edges={initialEdges}/>
    </>);
}
exports.default = Editor;
