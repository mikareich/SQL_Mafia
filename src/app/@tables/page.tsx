import tables from "@/utils/tables";
import Table from "@/components/table";

export default function TableStructure() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
      {Object.values(tables).map((table, i) => {
        const name = Object.keys(tables)[i];
        const tableStructure = Object.entries(table[0]).map(([key, value]) => {
          return { Attribute: key, Datentyp: typeof value };
        });

        return <Table key={name} name={name} data={tableStructure} />;
      })}
    </div>
  );
}
