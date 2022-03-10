let app = Vue.createApp({
	compoments: ['game']
});

app.component('game', {
	template: `
		<controls 
			id="controls" 
			@changeData="changeData" 
			@renderGame="renderGame">
		</controls>
		<board 
			id="game" 
			@leftClick="leftClick"
			@rightClick="rightClick" 
			:board="board" 
			:style="gridStyle">
		</board>
	`,
	data() {
		return {
			board: [],
			size: 10,
			mines: 15,
			gridSize: 10
		}
	},
	mounted() {
		this.renderGame();
	},
	computed: {
		gridStyle() {
			return {
				gridTemplateColumns: `repeat(${this.gridSize}, 1fr)`
			}
		}
	},
	methods: {
		renderGame() {
			this.board = [];
			this.gridSize = this.size;
			for(let i = 0; i < this.size * this.size; i++){
				this.board.push({
					id: i,
					x: i % this.size,
					y: Math.floor(i / this.size),
					state: 'closed',
					value: 0
				});
			};
			this.generateMines().forEach(item => {
				this.board[item].value = -1;
				this.neighbours(this.board[item]).forEach(index => {
					if(this.board[index].value != -1)
						this.board[index].value += 1;
				});
			});
		},
		generateMines(){
			output = [];
			while(output.length < this.mines){
				let index = Math.floor(Math.random() * this.size * this.size);
				if(output.indexOf(index) === -1) 
					output.push(index);
			}
			return output;
		},
		neighbours(field){
			let output = [];
			if(field.x > 0) output.push(field['id'] - 1);
			if(field.x < (this.size-1)) output.push(field['id'] + 1);
			if(field.y > 0) output.push(field['id'] - this.size);
			if(field.y < (this.size-1)) output.push(field['id'] + this.size);
			if(field.x > 0 && field.y > 0) output.push(field['id'] - (this.size+1));
			if(field.x > 0 && field.y < (this.size-1)) output.push(field['id'] + (this.size-1));
			if(field.x < (this.size-1) && field.y > 0) output.push(field['id'] - (this.size-1));
			if(field.x < (this.size-1) && field.y < (this.size-1)) output.push(field['id'] + (this.size+1));
			return output;
		},
		changeData(data) {
			this.size = Number(data.size);
			this.mines = Number(data.mines);
		},
		leftClick(field) {
			if(field.state == 'closed'){
				if(field.value >= 0){
					this.openPropagate(field);
					if(this.checkWin()) this.win();
				}
				else
					this.lose();
			}
		},
		rightClick(field) {
			if(field.state == 'closed')
				this.board[field.id].state = 'marked';
			else if(field.state == 'marked')
				this.board[field.id].state = 'closed';
		},
		openPropagate(field){
			if(field.state != 'open'){
				this.board[field.id].state = 'open';
				if(field.value == 0)
					this.neighbours(field).forEach((item) => {
						if(this.board[item].value >= 0)
							this.openPropagate(this.board[item]);
					});
			}
		},
		checkWin(){
			let win = true;
			this.board.forEach(field => {
				if(field.value >= 0 && field.state == 'closed')
					win = false;
			});
			return win;
		},
		win(){
			this.board.forEach(field => {
				if(field.value == -1)
					this.board[field.id].state = 'marked'
			});
			alert('win');
		},
		lose(){
			this.board.forEach(field => {
				if(field.value == -1)
					this.board[field.id].state = 'mine';
			});
			alert('lose');
		}
	},
	compoments: ['controls', 'board']
});

app.component('controls', {
	template: `
		<section id="controls">
			<custom-input
				v-for="input in inputs"
				v-bind:input="input"
				v-model="input.value">
			</custom-input>
			<button @click="renderGame">NEW GAME</button>
		</section>
	`,
	data() {
		return {
			inputs: [
				{ type: "range", min: 10, max: 20, step:1, value: 10, id: 'size' },
				{ type: "range", min: 5, max: 60, step:5, value: 15, id: 'mines' }
			]
		}
	}, 
	watch: {
		inputs: {
			deep: true,
			handler() {
				let gameData = {}
				this.inputs.forEach(element => {
					gameData[element.id] = element.value;
				});
				this.$emit('changeData', gameData);
			}
		}
	},
	methods: {
		renderGame() {
			this.$emit('renderGame');
		}
	},
	components: ['custom-input']
});

app.component('custom-input', {
	props: ['input', 'modelValue'],
	template: `
		<div>
			<input 
				v-bind="input" 
				v-model="inputValue"/>
		</div>
		<label 
			v-bind:for="input.id">
			{{input.id + ': ' +input.value}}
		</label>
	`,
	computed: {
		inputValue: {
			get() { 
				return this.modelValue;
			},
			set(value) { 
				this.$emit('update:modelValue', value);
			}
		}
	}
});

app.component('board', {
	props: ['board'],
	template: `
		<section id="board">
			<field 
				v-for="field in board"
				:field="field">
			</field>
		</section>
	`
});

app.component('field', {
	props: ['field'],
	template: `
		<div 
			:id="'field-' + field.id"
			:class="field.state"
			@click.left="leftClick"
			@click.right.prevent="rightClick">
			<span 
				v-if="field.state == 'open' && field.value > 0">
				{{ field.value }}
			</span>
		</div>
	`,
	methods: {
		leftClick(){
			this.$parent.$emit('leftClick', this.field);
		},
		rightClick() {
			this.$parent.$emit('rightClick', this.field);
		}
	}
});

app.mount('#mines');