export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label">APR: {(payload[0].value * 100).toFixed(1)}%</p>
      </div>
    );
  }
  return null;
};
