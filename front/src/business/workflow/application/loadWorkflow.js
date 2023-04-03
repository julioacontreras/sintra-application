"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWorkflow = void 0;
const fs_1 = __importDefault(require("fs"));
function loadWorkflow(filename) {
    const workflowPlain = fs_1.default.readFileSync(`../workflows/${filename}`);
    return JSON.parse(workflowPlain.toString());
}
exports.loadWorkflow = loadWorkflow;
