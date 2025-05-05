
import { Chart } from "@/components/ui/chart";
import { Bin, Factory, Recycle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StatsSection = () => {
  const chartData = [
    {
      name: "Jan",
      "Waste Collected (kg)": 4000,
      "Waste Reused (kg)": 2400
    },
    {
      name: "Feb",
      "Waste Collected (kg)": 3000,
      "Waste Reused (kg)": 1398
    },
    {
      name: "Mar",
      "Waste Collected (kg)": 5000,
      "Waste Reused (kg)": 3800
    },
    {
      name: "Apr",
      "Waste Collected (kg)": 2780,
      "Waste Reused (kg)": 1908
    },
    {
      name: "May",
      "Waste Collected (kg)": 4890,
      "Waste Reused (kg)": 3800
    },
    {
      name: "Jun",
      "Waste Collected (kg)": 3390,
      "Waste Reused (kg)": 2800
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Impact So Far
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Tracking our progress towards a sustainable future through market waste management.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Waste Collected
                </CardTitle>
                <Bin className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23,450 kg</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Waste Reused
                </CardTitle>
                <Recycle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18,932 kg</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  CO₂ Emissions Saved
                </CardTitle>
                <Factory className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,238 kg</div>
                <p className="text-xs text-muted-foreground">
                  +12.3% from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Waste Collection and Reuse Trends</h3>
            <div className="mt-2 text-sm text-gray-500">
              <p>Monthly data showing our progress in waste collection and reuse efforts.</p>
            </div>
            <div className="mt-5 h-80">
              <Chart 
                type="bar"
                data={chartData}
                index="name"
                categories={["Waste Collected (kg)", "Waste Reused (kg)"]}
                colors={["#16A34A", "#22C55E"]}
                valueFormatter={(value) => `${value}kg`}
                yAxisWidth={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
