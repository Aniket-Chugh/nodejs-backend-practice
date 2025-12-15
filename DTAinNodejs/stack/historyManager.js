const fs = require("fs");
const path = require("path");
const Stack = require("./stack");

const filePath = path.join(__dirname, "data", "history.json");

function load() {
    if (!fs.existsSync(filePath)) {
        return { back: ["Home"], forward: [] };
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function save(backStack, forwardStack) {
    fs.writeFileSync(
        filePath,
        JSON.stringify({ back: backStack.items, forward: forwardStack.items }, null, 2)
    );
}

function getStacks() {
    const data = load();
    return {
        backStack: new Stack(data.back),
        forwardStack: new Stack(data.forward)
    };
}

module.exports = { getStacks, save };
