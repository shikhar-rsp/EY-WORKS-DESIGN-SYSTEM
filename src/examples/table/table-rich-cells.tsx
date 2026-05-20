import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/figma/Table";

const DATA = [
  {
    user: { name: "Alice Johnson", email: "alice@example.com", initials: "AJ" },
    tag: { label: "Designer", color: "bg-accent-blue text-info" },
    score: 98,
    trend: "+12%",
    up: true,
  },
  {
    user: { name: "Bob Smith", email: "bob@example.com", initials: "BS" },
    tag: { label: "Engineer", color: "bg-accent-lime text-success" },
    score: 84,
    trend: "+5%",
    up: true,
  },
  {
    user: { name: "Carol White", email: "carol@example.com", initials: "CW" },
    tag: { label: "PM", color: "bg-accent-purple text-discovery" },
    score: 72,
    trend: "-3%",
    up: false,
  },
];

export const TableRichCells = () => (
  <div className="w-full">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead label="User" />
          <TableHead label="Role" />
          <TableHead label="Score" align="right" sortable />
          <TableHead label="Trend" align="right" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map((row, i) => (
          <TableRow key={i}>
            <TableCell isLast={i === DATA.length - 1}>
              <div className="flex items-center gap-3">
                <div className="size-8 shrink-0 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-lexend text-xs font-medium text-muted-foreground">{row.user.initials}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-lexend text-sm font-medium text-foreground">{row.user.name}</span>
                  <span className="font-lexend text-xs text-muted-foreground">{row.user.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1}>
              <span className={`font-lexend text-xs font-medium px-2 py-0.5 rounded-full ${row.tag.color}`}>
                {row.tag.label}
              </span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1} align="right">
              <span className="font-lexend text-sm font-semibold tabular-nums text-foreground">{row.score}</span>
            </TableCell>
            <TableCell isLast={i === DATA.length - 1} align="right">
              <span className={`font-lexend text-sm font-medium tabular-nums ${row.up ? "text-success" : "text-destructive"}`}>
                {row.trend}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
