import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/figma/Table";

const DATA = [
  { product: "Dashboard Pro", category: "Analytics", price: "$49/mo", seats: 12 },
  { product: "Storage Plus", category: "Infrastructure", price: "$29/mo", seats: 8 },
  { product: "Auth Shield", category: "Security", price: "$19/mo", seats: 25 },
  { product: "Notify Hub", category: "Messaging", price: "$9/mo", seats: 5 },
];

export const TableSortable = () => (
  <div className="w-full">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead label="Product" sortable />
          <TableHead label="Category" sortable />
          <TableHead label="Pricing" sortable align="right" />
          <TableHead label="Seats" sortable align="right" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map((row, i) => (
          <TableRow key={i}>
            <TableCell isLast={i === DATA.length - 1}>
              <span className="font-lexend text-sm font-medium text-foreground">{row.product}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1}>
              <span className="font-lexend text-sm text-muted-foreground">{row.category}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1} align="right">
              <span className="font-lexend text-sm text-foreground">{row.price}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1} align="right">
              <span className="font-lexend text-sm tabular-nums text-muted-foreground">{row.seats}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
