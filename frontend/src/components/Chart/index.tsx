import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", average: 400, yd: 240, amt: 240 },
  { name: "Feb", average: 300, yd: 139, amt: 221 },
  { name: "Mar", average: 200, yd: 980, amt: 229 },
  { name: "Apr", average: 278, yd: 390, amt: 200 },
  { name: "May", average: 189, yd: 480, amt: 218 },
  { name: "Jun", average: 239, yd: 380, amt: 250 },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average" stroke="#610069" />
        <Line type="monotone" dataKey="yd" stroke="#00acb7" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
