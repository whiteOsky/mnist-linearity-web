"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const sampleData = [
  { epoch: 1, linear: 0.85, mlp: 0.78 },
  { epoch: 2, linear: 0.72, mlp: 0.55 },
  { epoch: 3, linear: 0.61, mlp: 0.41 },
  { epoch: 4, linear: 0.54, mlp: 0.33 },
  { epoch: 5, linear: 0.50, mlp: 0.28 },
];

export default function Report() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold mb-4">📊 Analytical Report</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        This project systematically explores the transition from purely linear classifiers to multilayer nonlinear networks on the MNIST dataset.
      </p>

      <div className="w-full h-72 bg-white dark:bg-zinc-900 rounded-lg shadow p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d4d4d8" />
            <XAxis dataKey="epoch" tick={{ fill: "#71717a" }} label={{ value: "Epoch", position: "insideBottom", offset: -5, fill: "#71717a" }} />
            <YAxis tick={{ fill: "#71717a" }} domain={[0, 1]} />
            <Tooltip />
            <Line type="monotone" dataKey="linear" stroke="#60a5fa" strokeWidth={2} dot={false} name="Linear" />
            <Line type="monotone" dataKey="mlp" stroke="#34d399" strokeWidth={2} dot={false} name="MLP" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-400">
        <li>Linear model achieves ~92% accuracy, limited by lack of nonlinearity.</li>
        <li>Adding ReLU and hidden layers boosts performance to ~97.5%.</li>
        <li>Dropout improves generalization and BatchNorm stabilizes convergence.</li>
      </ul>
    </section>
  );
}
