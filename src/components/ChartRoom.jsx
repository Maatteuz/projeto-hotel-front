import { Cell, Pie, PieChart, Text, Tooltip } from "recharts";
import Card from "./Card";
import { RechartsDevtools } from "@recharts/devtools";

const ChartRoom = () => {
  return (
    <Card
      titulo="Distribuição de Quartos"
    >
      <PieChart
  style={{
    width: '100%',
    height: '100%',
    maxWidth: '500px',
    maxHeight: '80vh',
    aspectRatio: 1,
  }}
  responsive
>
  <Pie
    data={[
      { name: "Ocupados", value: 2 },
      { name: "Vagos", value: 1 },
      { name: "Reservados", value: 2 },
      { name: "Manutenção", value: 5 },
    ]}
    dataKey="value"
    cx="50%"
    cy="50%"
    innerRadius="60%"
    outerRadius="80%"
    label
  >
    <Cell fill="#82ca9d" />
    <Cell fill="#ff8042" />
    <Cell fill="#ffbb28" />
    <Cell fill="#8884d8" />
  </Pie>
  <Text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}
    >
      {10}
    </Text>
  <RechartsDevtools />
</PieChart>
    </Card>
  );
}

export default ChartRoom;