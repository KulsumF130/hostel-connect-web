// Simple demo data and Chart.js occupancy chart
const ctx = document.getElementById('occupancyChart').getContext('2d');
const labels = ['Jan','Feb','Mar','Apr','May','Jun'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Occupancy (%)',
      data: [55, 62, 71, 65, 80, 88],
      fill: true,
      backgroundColor: 'rgba(75,0,130,0.12)',
      borderColor: 'rgba(75,0,130,0.9)',
      tension: 0.4,
      pointRadius: 3
    }
  ]
};
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend:{ display:false } },
    scales: {
      y: { beginAtZero:true, max:100 }
    }
  }
};
const chartCanvas = document.getElementById('occupancyChart');
chartCanvas.height = 180;
new Chart(chartCanvas, config);