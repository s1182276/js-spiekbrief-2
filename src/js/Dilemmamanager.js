/* TODO door student, opgave 3a, 3b */
class Dilemmamanager {
    dilemmas;

    constructor(dilemmas) {
        this.dilemmas = dilemmas;
    }

    getRandomDilemma(category){
        let tmp = [];

        return this.dilemmas.then(array => {
            for(var i=0;i<array.length;i++){
                if(array[i].category === category){
                    tmp.push(array[i]);
                }
            }
        }).then(random => {return tmp[Math.floor(Math.random() * tmp.length)]})
    }
}