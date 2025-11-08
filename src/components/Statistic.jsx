import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { useLocation } from "react-router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistic = () => {
  const [view, setView] = useState("monthly");
  const location = useLocation();

  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [
          1200, 1900, 3000, 2500, 3200, 2800, 3100, 3300, 2900, 3500, 3700,
          4000,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const yearlyData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Yearly Revenue",
        data: [25000, 32000, 41000, 47000, 53000],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: view === "monthly" ? "Monthly Revenue" : "Yearly Revenue",
      },
    },
  };

  const currentData = view === "monthly" ? monthlyData : yearlyData;

  return (
    <div className={`py-3 w-100`}>
      <div className="d-flex justify-content-end mb-3">
        <button
          className={`btn btn-sm me-2 ${
            view === "monthly" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setView("monthly")}
        >
          Monthly
        </button>
        <button
          className={`btn btn-sm ${
            view === "yearly" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setView("yearly")}
        >
          Yearly
        </button>
      </div>

      <Bar data={currentData} options={options} />

      {location.pathname === "/statistics" && (
        <div className="mt-4">
          <h6>
            {view === "monthly"
              ? "Monthly Revenue Table"
              : "Yearly Revenue Table"}
          </h6>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-light">
                <tr>
                  <th className="text-center">
                    {view === "monthly" ? "Month" : "Year"}
                  </th>
                  <th className="text-center">Revenue (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {currentData.labels.map((label, index) => (
                  <tr key={label}>
                    <td className="text-center">{label}</td>
                    <td className="text-center">
                      {currentData.datasets[0].data[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistic;
