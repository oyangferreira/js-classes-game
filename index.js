const readline = require('readline-sync');

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type; 
    }
    information() {
        console.log(`Nome: ${this.name}\nIdade: ${this.age}`);
    }
    atacar() {
        let ataque;
        if (this.type === "mago") {
            ataque = "usou magia";
        } else if (this.type === "guerreiro") {
            ataque = "usou espada";
        } else if (this.type === "monge") {
            ataque = "usou artes marciais";
        } else if (this.type === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "não especificado";
        }
        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

const nome = readline.question("Digite o nome do herói: ");
const idade = parseInt(readline.question("Digite a idade do herói: "), 10);
const tipo = readline.question("Digite o tipo do herói: ");

let hero = new Hero(nome, idade, tipo);
hero.information();
hero.atacar();
