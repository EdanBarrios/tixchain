const ctx = document.getElementById('profitChart').getContext('2d');

const profitChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Total Profits ($)",
                data: [5000, 12000, 18000, 25000, 40000, 78000],
                borderColor: "#f39c12",
                borderWidth: 2,
                fill: false
            },
            {
                label: "Minted Tickets",
                data: [1000, 3000, 6000, 9000, 12000, 15000],
                borderColor: "#3498db",
                borderWidth: 2,
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
