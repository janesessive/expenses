
var button = document.getElementById("add");
var input = document.getElementById("userinput");
var inputCateg = document.getElementById("expCategory");
var div = document.getElementById("expenseList");
// items are string array:


function buildExpenseList(){
    const items =[];
    const array = expenseStore.get();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        items.push(element.id + " - " + element.category + " - " + element.amount);
        
    }
    
    const ul = listBuilder.build(items);
    return ul;
    
}
function showExpenseList() {
   const ul =  buildExpenseList();
//    console.log(ul);
   div.innerHTML = "";
   div.appendChild(ul);
}
function addRecordToStore(){
    expenseStore.add(inputCateg.value, input.value);
    showExpenseList();
}

function addListAfterClick() {
	if (input.value.length > 0) {
    	addRecordToStore();
    //asdfasdfasdf
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
 addRecordToStore()
        //asdfasdf
	}
}




function editExpenses(){};


// function showExpenses(records) {
//     console.log("expenses count :", records.length);
//     for (var i = 0; i < records.length; i++) {
//         let record = records[i];
//         console.log(record.category + ": " + record.amount + " - " + record.date);
//     }

// }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

