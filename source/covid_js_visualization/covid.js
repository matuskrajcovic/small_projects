let url = 'https://mapa.covid.chat/map_data';

fetch(url).then(response => response.json())
.then(data => {
	let chartData = data['chart'];
	let input = chartData.slice(-500);
	document.querySelector('#infected-daily').innerText = data['infected_pcr_delta'];
	document.querySelector('#percentage').innerText = Math.round(data['infected_pcr_delta']/data['tested_delta'] *10000)/100 + '%';
	document.querySelector('#deaths-daily').innerText = data['deaths_delta'];
	document.querySelector('#tested-daily').innerText = data['tested_delta'];
	renderGraphs(input);
});

function renderGraphs(input){
	getChart('#chart1', input.map((item) => {return {'x': item['date'], 'y': item['infected_daily']}}));
	getChart('#chart2', rollingAverage(input.map((item) => {return {'x': item['date'], 'y': item['infected_daily']}}), 7));

	let slope = [];
	for(let i = 1; i < input.length; i++){
		slope.push({'x': input[i]['date'], 'y': input[i]['infected_daily'] - input[i-1]['infected_daily']});
	}
	getChart('#chart3', rollingAverage(slope, 7));
	
	let positivity = input.map(item => {return {'x': item['date'], 'y':  item['infected_daily'] / item['tested_daily'] * 100}});
	getChart('#chart4', positivity);
	getChart('#chart5', rollingAverage(positivity, 7));

	getChart('#chart6', input.map((item) => {return {'x': item['date'], 'y': item['infected']}}));
}

function getChart(id, data) {
	let template = {
		type: 'line',
		data: {
			datasets: [
				{
					fill: false,
					borderColor: 'rgba(40, 40, 40, 1)',
					tension: 0.1,
					radius: 3,
					pointBackgroundColor: 'rgba(40, 40, 40, 1)',
					pointBorderColor: 'rgba(40, 40, 40, 1)'
				}
			]
		},
		options: {
			plugins: {
				legend: {
					display: false
				}
			},
			animation: {
				duration: 0
			}
		}
	}
	template['data']['datasets'][0]['data'] = data;
	return new Chart(document.querySelector(id), template);
}

function rollingAverage(data, window) {
	let dataRA7 = [];
	for(let i = (window - 1); i < data.length; i++){
		dataRA7.push({
			'x': data[i]['x'], 
			'y': data.slice(i - (window - 1), i + 1).reduce((sum, item) => sum + item['y'], 0) / window
		});
	}
	return dataRA7;
}
