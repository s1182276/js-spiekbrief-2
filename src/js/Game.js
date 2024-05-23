/* TODO door student, opgave 4a,b,d */

const Game = (function () {
    let containerdiv;
    let dilemmamanager;

    async function loadDilemmas(jsonUrl){
        const response = await fetch(jsonUrl);
        const json = await response.json();
        const tmp = []

        await json.data.dilemmas
            .map((d) => (
                tmp.push(
                    new Dilemma(
                        d.dilemma.join(' of '),
                        d.choice,
                        d.category
                ))
            ));

        return await tmp;
    }

    function loadDilemmaManager(jsonUrl){
        dilemmamanager = new Dilemmamanager(loadDilemmas((jsonUrl)));
    }

    async function showNextDilemma(category) {
        const dilemma = await dilemmamanager.getRandomDilemma(category);
        containerdiv.innerText = dilemma.dilemma
    }

    function init(container){
        containerdiv = document.getElementById(container);
        loadDilemmaManager('dilemmas.json');
        showNextDilemma('Werk');
        containerdiv.addEventListener("click", function() {showNextDilemma('Werk')});
    }

    return{
        showNextDilemma: showNextDilemma,
        init: init,
    };
})();
