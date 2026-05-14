import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';

function AnalyticsChart({ urls }) {

  const data = urls.map((url) => ({
    name: url.short_code,
    clicks: url.click_count
  }));

  const colors = [
    '#6366F1',
    '#8B5CF6',
    '#06B6D4',
    '#3B82F6'
  ];

  if (!urls.length) {

    return (

      <div className="glass-card rounded-3xl p-12 mt-8 text-center">

        <div className="text-6xl mb-4">
          📊
        </div>

        <h2 className="text-2xl font-bold mb-3">
          No Analytics Yet
        </h2>

        <p className="text-gray-400">
          Create URLs and get clicks to see
          analytics insights.
        </p>

      </div>
    );
  }

  return (

    <div className="glass-card rounded-3xl p-6 mt-8 border border-white/5">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Analytics Overview
          </h2>

          <p className="text-gray-400 mt-1">
            URL performance insights
          </p>

        </div>

      </div>

      <div className="h-[340px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            barSize={45}
          >

            <defs>

              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#818CF8"
                />

                <stop
                  offset="100%"
                  stopColor="#06B6D4"
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: '#9CA3AF',
                fontSize: 12
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: '#9CA3AF',
                fontSize: 12
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                fill: 'rgba(255,255,255,0.03)'
              }}
              contentStyle={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                color: 'white',
                backdropFilter: 'blur(12px)'
              }}
            />

            <Bar
              dataKey="clicks"
              radius={[16, 16, 0, 0]}
              fill="url(#barGradient)"
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    colors[index % colors.length]
                  }
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;
