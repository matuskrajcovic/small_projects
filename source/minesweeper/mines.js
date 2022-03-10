let mines = 5;
let size = 20;
let board = [];
let game = null;
let size_bar = null;
let mines_bar = null;


window.onload = () => {
	game = document.querySelector('#game');
	size_bar = document.querySelector('#size');
	mines_bar = document.querySelector('#mine-count');
	renderGame();
	document.querySelector('#new-game').addEventListener('click', () => {
		renderGame();
	});
	'input change'.split(' ').forEach((item) => {
		size_bar.addEventListener(item, () => {
			document.querySelector('label[for="size"]').innerText = size_bar.value + ' x ' + size_bar.value;
		});
		mines_bar.addEventListener(item, (event) => {
			document.querySelector('label[for="mine-count"]').innerText = mines_bar.value + ' mín';
		});
	});
}

function renderGame(){
	mines = Number(document.querySelector('#mine-count').value) || 10;
	size = Number(document.querySelector('#size').value) || 10;
	board = [];
	game.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
	game.innerHTML = '';
	for(let i = 0; i < size*size; i++){
		board[i] = 0;
		let tile = document.createElement('div');
		tile.setAttribute('id', 'field-'+i);
		tile.className = 'closed';
		if(window.innerWidth - 80 < 44 * size){
			let s = String(Math.floor(window.innerWidth / (size + size/2))) + 'px !important;';
			tile.style.cssText = 'width: ' + s + 'height: ' + s	+ 'line-height: ' + s;
		}
		game.appendChild(tile);
		tile.addEventListener('click', handleLeftClick);
		tile.addEventListener('contextmenu', handleRightClick);
	}
	for(let i = 0; i < mines; i++){
		let index = null;
		while(!index || board[index] == -1)
			index = Math.floor(Math.random() * size*size);
		board[index] = -1;
		neighbours(index).forEach((index)=>{
			if(board[index] != -1) 
				board[index] += 1;
		});
	}
}

function neighbours(index){
	let output = [];
	let coords = toCoords(index);
	if(coords['x'] > 0) output.push(index - 1);
	if(coords['x'] < (size-1)) output.push(index + 1);
	if(coords['y'] > 0) output.push(index - size);
	if(coords['y'] < (size-1)) output.push(index + size);
	if(coords['x'] > 0 && coords['y'] > 0) output.push(index - (size+1));
	if(coords['x'] > 0 && coords['y'] < (size-1)) output.push(index + (size-1));
	if(coords['x'] < (size-1) && coords['y'] > 0) output.push(index - (size-1));
	if(coords['x'] < (size-1) && coords['y'] < (size-1)) output.push(index + (size+1));
	return output;
}

function toCoords(index){
	return {'x': index % size, 'y': Math.floor(index / size)};
}

function toIndex(coords){
	return coords['x'] + coords['y']*size;
}

function handleLeftClick(event){
	let tile = event.target;
	let index = Number(tile.id.split('-')[1]);
	if(tile.className != 'closed')
		return;
	if(board[index] >= 0)
		openPropagate(index);
	else{
		tile.className = 'mine';
		lose();
	}
	if(checkWin()) win();
}

function checkWin(){
	for(let i = 0; i < size*size; i++){
		let tile = document.querySelector('#field-' + i);
		if(board[i] >= 0 && tile.className == 'closed')
			return false;
	}
	return true;
}

function win(){
	board.forEach((item, index) => {
		if(item == -1)
			document.querySelector('#field-' + index).className = 'marked';
	});
	alert('You won!');
}

function lose(){
	board.forEach((item, index) => {
		let tile = document.querySelector('#field-' + index);
		if(item == -1)
			tile.className = 'mine';
		tile.removeEventListener('click', handleLeftClick);
		tile.removeEventListener('contextmenu', handleRightClick);
	});
	alert('You lost!');
}

function openPropagate(index){
	let tile = document.querySelector('#field-' + index);
	if(!tile || tile.className == 'open')
		return;
	if(board[index] != 0)
		tile.innerHTML = '<span class="value">' + board[index] + '</span>';
	tile.className = 'open';
	
	if(board[index] == 0)
		neighbours(index).forEach((item) => {
			if(board[item] >= 0)
				openPropagate(item);
		});
}

function handleRightClick(event){
	event.preventDefault();
	let tile = event.target;
	if(tile.className == 'closed')
		tile.className = 'marked';
	else if(tile.className == 'marked')
		tile.className = 'closed';
}