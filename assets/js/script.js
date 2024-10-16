const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("doughnutChart").getContext("2d");

  var doughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Sales", "Distribute", "Returns"],
      datasets: [
        {
          data: [555, 335, 110],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
          },
        },
        datalabels: {
          formatter: function (value, context) {
            var sum = context.chart.data.datasets[0].data.reduce(function (a, b) {
              return a + b;
            }, 0);
            var percentage = ((value / sum) * 100).toFixed(2) + "%";
            return percentage;
          },
          color: "#000",
          anchor: "end",
          align: "start",
          offset: 10,
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
});

const ctx = document.getElementById("barChart").getContext("2d");

const barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "2021",
        data: [40000, 50000, 45000, 30000, 25581, 40000, 55000, 30000],
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
      {
        label: "2022",
        data: [45000, 60000, 50000, 35000, 47921, 45000, 60000, 40000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        borderDash: [5, 5],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value / 1000 + "k";
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return "$" + tooltipItem.raw.toLocaleString();
          },
        },
      },
    },
  },
});

document.getElementById("date-range-select").addEventListener("change", function () {
  const selectedValue = this.value;

  if (selectedValue === "Custom") {
    alert("Please select a custom date range using the calendar!");
  } else {
    console.log("Selected Date Range:", selectedValue);
  }
});
