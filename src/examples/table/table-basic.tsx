import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/figma/Table";

const DATA = [
  { name: "Alice Johnson", role: "Designer", department: "Product", status: "Active" },
  { name: "Bob Smith", role: "Engineer", department: "Platform", status: "Active" },
  { name: "Carol White", role: "PM", department: "Growth", status: "Inactive" },
  { name: "David Lee", role: "Analyst", department: "Data", status: "Active" },
];

export const TableBasic = () => (
  <div className="w-full">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead label="Name" sortable />
          <TableHead label="Role" />
          <TableHead label="Department" />
          <TableHead label="Status" align="right" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map((row, i) => (
          <TableRow key={i}>
            <TableCell isLast={i === DATA.length - 1}>
              <span className="font-lexend text-sm font-medium text-foreground">{row.name}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1}>
              <span className="font-lexend text-sm text-muted-foreground">{row.role}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1}>
              <span className="font-lexend text-sm text-muted-foreground">{row.department}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1} align="right">
              <span className={`font-lexend text-xs font-medium px-2 py-0.5 rounded-full ${row.status === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                {row.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
