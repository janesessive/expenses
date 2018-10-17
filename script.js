
var button = document.getElementById("add");
var input = document.getElementById("userinput");
var inputCateg = document.getElementById("expCategory");
var ul = document.querySelector("ul");



// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value + " " + inputCateg.value));
// 	ul.appendChild(li);
// 	input.value = "";
	
// }

function addListAfterClick() {
	if (input.value.length > 0) {
    expenseStore.add(inputCateg.value, input.value);	
    //asdfasdfasdf
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
        expenseStore.add(inputCateg.value, input.value);
        //asdfasdf
	}
}




function editExpenses(){};


function showExpenses(records) {
    console.log("expenses count :", records.length);
    for (var i = 0; i < records.length; i++) {
        let record = records[i];
        console.log(record.category + ": " + record.amount + " - " + record.date);
    }

}

function main(){
    expenseStore.add("transport", 100.00);
    expenseStore.add("cinema", 25.00);
    expenseStore.add("food", 125.00);

    console.log("before delete");    
    showExpenses(expenseStore.get());

    expenseStore.delete(0);
    console.log("after delete");
    showExpenses(expenseStore.get());
    console.log("after delete all")
    expenseStore.deleteAll();
    showExpenses(expenseStore.get());

};
main();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

