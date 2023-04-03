"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loadProject_1 = require("@/business/project/application/loadProject");
const loadWorkflow_1 = require("@/business/workflow/application/loadWorkflow");
function handler(req, res) {
    let isLoaded = false;
    const project = (0, loadProject_1.loadProject)(`${req.query.project}.json`);
    for (const item of project.collection) {
        if (item.id === req.query.workflow) {
            const workflow = (0, loadWorkflow_1.loadWorkflow)(item.filename);
            res.status(200).json(workflow);
            isLoaded = true;
            break;
        }
    }
    if (!isLoaded) {
        console.log('not loaded');
        res.status(200).json({ error: 'not loaded' });
    }
}
exports.default = handler;
