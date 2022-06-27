// LINE CHART

const lineChart = document.getElementById('lineChart');

const labels = [
    '22 Maj',
    '23 Maj',
    '24 Maj',
    '25 Maj',
    '26 Maj',
    '27 Maj',
    '28 Maj',
    '29 Maj',
    '30 Maj',
    '31 Maj',
    '01 jun',
    '02 jun',
    '03 jun',
    '04 jun',
    '05 jun',
    '06 jun',
    '07 jun',
    '08 jun',
    '09 jun'

];

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Povratni pregledi',
                data: [1844, 1554, 1273, 1284, 1126, 946 , 964 , 1793, 1432, 1130, 1074, 954, 856, 833, 1536, 1416, 1248, 1226],
                borderColor: 'rgba(43, 38, 191, 1)',
            },
            {
                label: 'Novi pregledi',
                data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 71, 61, 58, 847, 744, 756, 781],
                borderColor: 'rgba(163, 33, 141, 1)',
            }
        ]
    }
});

// PIE CHART

const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Srbija', 'BiH', 'Hrvatska', 'S. Makedonija', 'CG', 'Ostali'],
        datasets: [
            {
                label: 'Drzave',
                data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
                backgroundColor: [
                    'rgba(171, 55, 55, 1)',
                    'rgba(171, 159, 55, 1)',
                    'rgba(67, 171, 55, 1)',
                    'rgba(55, 171, 171, 1)',
                    'rgba(55, 63, 171, 1)',
                    'rgba(161, 55, 171, 1)'
                ]
            }
        ] 
    }
})


// BAR CHART

const barChart = document.getElementById('barChart');

new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['13 - 17', '18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'],
        datasets: [
            {
                label: 'Publika po godinama',
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor: [
                'rgba(201, 44, 99, 1)',
                'rgba(138, 44, 201, 1)',
                'rgba(44, 112, 201, 1)',
                'rgba(44, 201, 193, 1)',
                'rgba(47, 201, 44, 1)',
                'rgba(201, 120, 44, 1)']
            }
        ]
        
    }
})
