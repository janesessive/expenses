var totalExpenses = [];
var currentId = 0;



function getNextId() {
    return currentId++;
}


function addExpenses(category, amount){

   let record = {};
   record.id = getNextId();
   record.category = category;
   record.amount = amount;
   record.date = new Date();
  

   totalExpenses.push(record);
   console.log(record);



}


function list(){
    return totalExpenses;
}
function showExpenses(){ 
    console.log("expenses count :", totalExpenses.length);
    for (var i = 0; i < totalExpenses.length; i++) {
        let record = totalExpenses[i];
        console.log(record.category  + ": " + record.amount + " - "+ record.date);
    }
    
}

function deleteExpenses(id){
    for (var i = 0; i < totalExpenses.length; i++) {
        let record = totalExpenses[i];
        if (record.id === id) {
            totalExpenses.splice(i,1);
            break;
        }
    }
    
};

function deleteAll() {
    totalExpenses.splice(0, totalExpenses.length);
}

var button = document.getElementById("add");
var input = document.getElementById("userinput");
var inputCateg = document.getElementById("expCategory");
var ul = document.querySelector("ul");


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " " + inputCateg.value));
	ul.appendChild(li);
	input.value = "";
	
}

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}




function editExpenses(){};




function main(){
    addExpenses("food", 125.00);
    addExpenses("transport", 100.00);
    addExpenses("cinema", 25.00);

    console.log("before delete");
    showExpenses();
    deleteExpenses(0);
    console.log("after delete");
    showExpenses();
    console.log("after delete all")
    deleteAll();
    showExpenses();

};
main();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
