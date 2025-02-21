const personagem = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo Americano",
    armaSecundaria: "Nenhuma",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function (){
        return "Nome do Personagem: "+this.nome+"\n"
        +"Codinome do Personagem: "+this.codinome+"\n"
        +"Arma Principal: "+this.armaPrincipal+"\n"
        +"Arma Secundária: "+this.armaSecundaria+"\n"
        +"Nível de Força: "+this.forca+"\n"
        +"Nível de Velocidade: "+this.velocidade+"\n"
        +"Nível de Resistência: "+this.resistencia+"\n"
    }
}
const personagem2 = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura",
    armaSecundaria: "Mísseis",
    velocidade: 70,
    forca: 80,
    resistencia: 70,
    descricao: function (){
        return "Nome do Personagem: "+this.nome+"\n"
        +"Codinome do Personagem: "+this.codinome+"\n"
        +"Arma Principal: "+this.armaPrincipal+"\n"
        +"Arma Secundária: "+this.armaSecundaria+"\n"
        +"Nível de Força: "+this.forca+"\n"
        +"Nível de Velocidade: "+this.velocidade+"\n"
        +"Nível de Resistência: "+this.resistencia+"\n"
    }
}
const personagem3 = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjolnir",
    armaSecundaria: "Trovão",
    velocidade: 60,
    forca: 90,
    resistencia: 80,
    descricao: function (){
        return "Nome do Personagem: "+this.nome+"\n"
        +"Codinome do Personagem: "+this.codinome+"\n"
        +"Arma Principal: "+this.armaPrincipal+"\n"
        +"Arma Secundária: "+this.armaSecundaria+"\n"
        +"Nível de Força: "+this.forca+"\n"
        +"Nível de Velocidade: "+this.velocidade+"\n"
        +"Nível de Resistência: "+this.resistencia+"\n"
    }
}
const personagem4 = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla",
    armaSecundaria: "Porrada",
    velocidade: 65,
    forca: 100,
    resistencia: 90,
    descricao: function (){
        return "Nome do Personagem: "+this.nome+"\n"
        +"Codinome do Personagem: "+this.codinome+"\n"
        +"Arma Principal: "+this.armaPrincipal+"\n"
        +"Arma Secundária: "+this.armaSecundaria+"\n"
        +"Nível de Força: "+this.forca+"\n"
        +"Nível de Velocidade: "+this.velocidade+"\n"
        +"Nível de Resistência: "+this.resistencia+"\n"
    }
}
const personagens = [personagem, personagem2, personagem3, personagem4];

function comparacao(personagens){
    //os atributos
    const atributos = ["forca", "velocidade", "resistencia"];
    for (let atributo of atributos){
        console.log("\n------| Comparando${atributo.toUpperCase()} |------");

        //guarda quem tem atributo +forte
        let maisForte = -1;
        let venceu = null;

        for (let personagem of personagens){
            console.log(personagem.descricao());
        }

        if (personagem[atributo] > maisForte){
            maisForte = personagem[atributo];
            venceu = personagem;
        }

    console.log(`\nVencedor na categoria ${atributo} foi ${venceu.codinome} com seus ${maisForte} pontos!!`);
    }
}
comparacao(personagens);
