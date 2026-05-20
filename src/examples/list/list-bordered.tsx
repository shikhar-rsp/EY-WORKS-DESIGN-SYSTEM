import {
  List,
  ListHeader,
  ListFooter,
  ListItem,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
} from "@/components/figma/List";

export const ListBordered = () => {
  return (
    <div className="max-w-md">
      <ListHeader>Recent Activity</ListHeader>
      <List bordered>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>Component synced from Figma</ListItemTitle>
            <ListItemDescription>Button · 2 minutes ago</ListItemDescription>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>Docs page generated</ListItemTitle>
            <ListItemDescription>List · 10 minutes ago</ListItemDescription>
          </ListItemContent>
        </ListItem>
        <ListItem>
          <ListItemContent>
            <ListItemTitle>Design token updated</ListItemTitle>
            <ListItemDescription>primary · 1 hour ago</ListItemDescription>
          </ListItemContent>
        </ListItem>
      </List>
      <ListFooter>Showing 3 of 24 events</ListFooter>
    </div>
  );
};
