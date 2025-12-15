const readline = require("readline");
const { getStacks, save } = require("./historyManager");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { backStack, forwardStack } = getStacks();

function visit(page) {
    backStack.push(page);
    forwardStack.items = [];
    save(backStack, forwardStack);
    console.log("Visited:", page);
    printCurrent();
}

function back() {
    if (backStack.size() > 1) {
        forwardStack.push(backStack.pop());
        save(backStack, forwardStack);
        console.log("Went back to:", backStack.peek());
    } else {
        console.log("No page to go back");
    }
    printCurrent();
}

function forward() {
    if (forwardStack.size() > 0) {
        backStack.push(forwardStack.pop());
        save(backStack, forwardStack);
        console.log("Went forward to:", backStack.peek());
    } else {
        console.log("No page to go forward");
    }
    printCurrent();
}

function printCurrent() {
    console.log("Current Page:", backStack.peek());
    console.log("Back Stack:", backStack.items);
    console.log("Forward Stack:", forwardStack.items);
    console.log("-------------------------------------------------");
}

function showMenu() {
    console.log("\nChoose an action:");
    console.log("1. Visit Page");
    console.log("2. Back");
    console.log("3. Forward");
    console.log("4. Exit");

    rl.question("Enter choice: ", (choice) => {
        switch (choice) {
            case "1":
                rl.question("Enter page name: ", visit);
                break;
            case "2":
                back();
                showMenu();
                break;
            case "3":
                forward();
                showMenu();
                break;
            case "4":
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                showMenu();
        }
    });
}

console.log("Browser Stack Simulation Started!");
printCurrent();
showMenu();
