import {
  List,
  ListItem,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
} from "@/components/figma/List";

export const ListDefault = () => {
  return (
    <List className="max-w-md">
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Invoice #1042</ListItemTitle>
          <ListItemDescription>Sent on April 3, 2026 · $240.00</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Invoice #1043</ListItemTitle>
          <ListItemDescription>Sent on April 7, 2026 · $120.00</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Invoice #1044</ListItemTitle>
          <ListItemDescription>Sent on April 10, 2026 · $360.00</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
  );
};
