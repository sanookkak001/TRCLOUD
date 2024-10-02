

function Pyramid(number) {
    const PyramidShow = document.querySelector('#pyramid');
    PyramidShow.innerHTML = ""; 

    if (isNaN(number)) return;

    if (number % 2 === 0) {
        for (let i = 1; i <= number; i++) {
            PyramidShow.innerHTML += "*".repeat(i) + "<br>";
        };
    } else {
        for (let j = number; j > 0; j--) {
            PyramidShow.innerHTML += "*".repeat(j) + "<br>"; 
        };
    };
};



function Cal(inputField) {
    const Value = parseFloat(inputField.value);
  
    if (isNaN(Value)) return;
    
    const fields = document.querySelectorAll('input[type="number"]');
    const ratios = [100, 7, 107, 3, 104];
    
    fields.forEach((field, index) => {
      if (field !== inputField) {
        field.value = (Value * ratios[index] / ratios[0]).toFixed(2);
      };
    });
};

function clears() {
    const fields = document.querySelectorAll('input[type="number"]');
    fields.forEach(field => {
      field.value = '';
    });
};

const Array1 = [
    {
        "Code": 101, 
        "Name": "AAA" 
    },
    { 
        "Code": 102,
        "Name": "BBB"
    },
    {
        "Code": 103, 
        "Name": "CC"
    },
];

const Array2 = [
    { 
        "Code": 101,
        "City": "Bangkok"
    },
    { 
        "Code": 102,
        "City": "Tokyo"
    },
    { 
        "Code": 103,
        "City": "Singapore" 
    },
];


const Output = new Map();

    Array1.forEach(item => {
        Output.set(item.Code , item.Name);
    });

console.log(Output);

const Test =  Array2.filter(item => Output.has(item.Code)).map(item =>({Code : item.Code , Name : Output.get(item.Code) , City : item.City}));

console.log(Test);

const result = document.querySelector('#result');
result.innerHTML = Test.map(item => 
    `<tr>
        <td>${item.Code}</td>
        <td>${item.Name}</td>
        <td>${item.City}</td>
    </tr>`
).join('');

const FetchData = async() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const pie = document.getElementById('myChartPie').getContext('2d');
    let BASEURL = 'https://www.trcloud.co/test/api.php';
    try {
        const Responese = await axios.get(BASEURL);
        console.log(Responese.data);
        const City = Responese.data.map(item => item.City);
        const Population = Responese.data.map(item => item.Population);
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: City, 
                datasets: [{
                    label: 'Range of Country', 
                    data: Population, 
                    backgroundColor: [ 
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const myChartPie = new Chart(pie, {
            type: 'pie',
            data: {
                labels: City, 
                datasets: [{
                    label: 'Range of Country', 
                    data: Population, 
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        
    } catch(error){
        console.log(error);
    };

};

FetchData();








