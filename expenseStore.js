const expenseStore = (function () {
    var totalExpenses = [];
    var currentId = 0;

    function _getNextId() {
        return currentId++;
    }

    function addExpenses(category, amount) {
        let record = {};
        record.id = _getNextId();
        record.category = category;
        record.amount = amount;
        record.date = new Date();

        totalExpenses.push(record);
       // console.log(record);
    }

    function deleteExpenses(id) {
        for (var i = 0; i < totalExpenses.length; i++) {
            let record = totalExpenses[i];
            if (record.id === id) {
                totalExpenses.splice(i, 1);
                return true;
                //break;
            }
        }
        return false;

    };

    function deleteAll() {
        totalExpenses.splice(0, totalExpenses.length);
    }

    function getExpensess() {
        return totalExpenses;
    }


    

   
    return {
        add: addExpenses,
        delete: deleteExpenses,
        deleteAll: deleteAll,
        get: getExpensess,
        //show: showExpenses
    }

})();