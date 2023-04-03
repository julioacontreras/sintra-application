"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadProject_1 = require("@/business/project/application/loadProject");
const loadWorkflow_1 = require("@/business/workflow/application/loadWorkflow");
function handler(req, res) {
    const collection = [];
    const project = (0, loadProject_1.loadProject)(`${req.query.project}.json`);
    for (const filename of project.collection) {
        const workflow = (0, loadWorkflow_1.loadWorkflow)(filename);
        collection.push({
            filename,
            workflow
        });
    }
    res.status(200).json(collection);
}
exports.default = handler;
