"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProject = void 0;
const fs_1 = __importDefault(require("fs"));
function loadProject(filename) {
    const projectPlain = fs_1.default.readFileSync(`../workflows/${filename}`);
    return JSON.parse(projectPlain.toString());
}
exports.loadProject = loadProject;
