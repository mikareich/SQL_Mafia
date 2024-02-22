export type TableProps = {
  name: string;
  data: Record<string, any>[];
  isSQL?: boolean;
};

export default function Table({ name, data, isSQL = false }: TableProps) {
  const attributes = Object.keys(data[0]);
  const values = data.map((row) => Object.values(row));

  return (
    <div className="overflow-x-auto block">
      <table className="text-left table h-min border-collapse box-border w-full">
        <caption className="text-left mb-2">
          {isSQL ? (
            <code className="text-sm">{name}</code>
          ) : (
            <span className="text-lg font-bold">{name}</span>
          )}
        </caption>
        <thead>
          <tr>
            {attributes.map((attribute) => (
              <th
                key={attribute}
                className="font-bold text-xs uppercase px-2 py-3 border bg-slate-100"
                style={{ width: `${(1 / attributes.length) * 100}%` }}
              >
                {attribute}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {values.map((row, i) => (
            <tr key={i} className="border-slate-100">
              {row.map((value, j) => (
                <td className="px-2 py-3 border" key={j}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
