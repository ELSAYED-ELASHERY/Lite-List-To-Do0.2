const prompt = require('prompt-sync')();
let option = 0;
let my_store = [];
console.log("//-------------------------------------------------------------------------------//");
console.log("//----------------------------- To-Do List Lite ---------------------------------//");
console.log("//-------------------------------------------------------------------------------//");
while (option != 3) {
    console.log("Choose an option:");
    console.log("1- Add a new task");
    console.log("2- View all tasks");
    console.log("3- Exit");
    option = Number(prompt('Enter your choice: '));
    switch (option) {
        case 1:
            let tasks = {
                title: "",
                description: "",
                type: ""
            };
            tasks.title = (prompt('Enter task title: '));
            tasks.description = (prompt('Enter task description: '));
            tasks.type = prompt('Is this task important? (yes/no): ');
            my_store.push(tasks);
            break;
        case 2:
            console.table(my_store);
            break;
        case 3:
            console.log("Exiting the application. Goodbye!");
            break;
    }
}
