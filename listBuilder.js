const listBuilder = ( function(){
    function createList(items) {
        var ul = document.createElement("ul");
        for (let i = 0; i< items.length; i++) {
          const element = items[i];
          _createListElement(ul, element);
           
        }
        return ul;
     }
     
     function _createListElement(ul, value) {
         var li = document.createElement("li");
         li.appendChild(document.createTextNode(value));
         ul.appendChild(li);
     }
     return {
         build: createList
     }
})()