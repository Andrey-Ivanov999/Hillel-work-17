
window.onload = function() {
    var clickCounter = document.querySelectorAll('.click_counter');
    var results = document.querySelectorAll('.result');

    [].forEach.call(results, function(result) {
        var localValues = localStorage.getItem(result.id);
        var str = JSON.parse(localValues);
        if (str === null || str === "") {
            console.log("data not found" + result.id);
        } else {
            result.innerHTML = str.counterScore;
        }

    });
    [].forEach.call(clickCounter, function(counter) {
        addCounter(counter);

    });

    function addCounter(counter) {

        var add = {

            click: function(event) {
                var _id = counter.dataset.result;
                var text = ++(document.getElementById(_id).innerHTML);
                var toLocal = {

                    counterId: _id,
                    counterScore: text
                };
                var local = JSON.stringify(toLocal);
                localStorage.setItem(_id, local);
            }
        };
        counter.addEventListener('click', add.click.bind(counter));

    }

};
var clear = document.getElementById('clear_counters');
clear.addEventListener('click', clearCounters);

function clearCounters(result) {
    [].forEach.call(result, function(result) {
        result.innerHTML = '1';
    });
    localStorage.clear();
}
var set = document.getElementById('set_counter');
set.addEventListener('click', setCounter);

function setCounter() {
    do {
        var setId = prompt("input ID(id1)");
    } while (!document.getElementById(setId));

    do {
        setNewCount = prompt("input number");
    } while (isNaN(setNewCount));

    document.getElementById(setId).innerHTML = setNewCount;
    var toLocal = {
        counterId: setId,
        counterScore: setNewCount

    };
    var local = JSON.stringify(toLocal);
    localStorage.setItem(setId, local);


}



