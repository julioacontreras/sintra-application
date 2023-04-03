"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("next/router");
const react_1 = require("react");
const editor_1 = __importDefault(require("../../../components/editor"));
function EditorPage() {
    const router = (0, router_1.useRouter)();
    const [data, setData] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const project = router.query.project;
        const workflow = router.query.workflow;
        function fetchData() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch(`/api/workflow?project=${project}&workflow=${workflow}`, {
                    method: 'GET',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    referrerPolicy: 'no-referrer'
                });
                const data = yield response.json();
                setData(data);
                setIsLoading(false);
                console.log('setIsLoading = false');
            });
        }
        if (project && workflow) {
            fetchData();
        }
    }, [router.query.project, router.query.workflow]);
    return <div style={{ width: '100vw', height: '100vh' }}>
      {!isLoading ?
            <editor_1.default workflow={data}/> :
            <>Loading...</>}    
    </div>;
}
exports.default = EditorPage;
