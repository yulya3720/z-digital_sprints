var size = 20;
var tableWrap = document.getElementsByClassName('table-wrap')[0];
var table = document.createElement('table');
var reverseBtn = document.getElementsByClassName('reverse-btn')[0];
var clearBtn = document.getElementsByClassName('clear-btn')[0];

//draw the table
for(let i = 0; i < size; i++){
  let row = document.createElement('tr');
  for(let j = 0; j < size; j++){
      let cell = document.createElement('td');
      row.appendChild(cell);
  }
  table.appendChild(row);
}
tableWrap.appendChild(table);

//change color of the clicked cell
table.addEventListener('mousedown', function(event){
  let target = event.target;
  if(target.tagName == "TD"){
    changeColor(target);
  }
})

//make all the cells white
clearBtn.addEventListener('click', function(e){
  if(document.getElementsByClassName('reversed')[0]){
  document.getElementsByClassName('reversed')[0].classList.remove('reversed');  
  }
  Array.from(document.getElementsByClassName('black')).forEach(element => {
    element.classList.remove('black');
  });
});

//reverse color of all the cells when the reverse button is clicked
reverseBtn.onclick = function(){
  document.getElementsByTagName('table')[0].classList.toggle('reversed');
};

function changeColor(target){
  target.classList.toggle('black');
}