const userName = prompt("Как можно к Вам обращаться?");
greeting(userName)

function greeting(name) {
    console.log(`Привет, ${name}!`);
}