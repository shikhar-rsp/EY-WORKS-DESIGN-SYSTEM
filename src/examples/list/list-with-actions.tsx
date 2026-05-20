import {
  List,
  ListItem,
  ListItemMedia,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemActions,
} from "@/components/figma/List";

export const ListWithActions = () => {
  return (
    <List className="max-w-md">
      <ListItem>
        <ListItemMedia>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--primary, #f8785e)",
              flexShrink: 0,
            }}
          />
        </ListItemMedia>
        <ListItemContent>
          <ListItemTitle>Jane Doe</ListItemTitle>
          <ListItemDescription>Product Designer</ListItemDescription>
        </ListItemContent>
        <ListItemActions>
          <button
            style={{
              padding: "4px 12px",
              fontSize: 12,
              fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
              fontWeight: 500,
              borderRadius: "var(--radius-medium, 8px)",
              border: "1px solid var(--border, #ebe9e8)",
              background: "var(--background, #ffffff)",
              color: "var(--foreground, #2e2b2b)",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </ListItemActions>
      </ListItem>
      <ListItem>
        <ListItemMedia>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--accent-teal, #3bbfb2)",
              flexShrink: 0,
            }}
          />
        </ListItemMedia>
        <ListItemContent>
          <ListItemTitle>Marcus Lee</ListItemTitle>
          <ListItemDescription>Frontend Engineer</ListItemDescription>
        </ListItemContent>
        <ListItemActions>
          <button
            style={{
              padding: "4px 12px",
              fontSize: 12,
              fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
              fontWeight: 500,
              borderRadius: "var(--radius-medium, 8px)",
              border: "1px solid var(--border, #ebe9e8)",
              background: "var(--background, #ffffff)",
              color: "var(--foreground, #2e2b2b)",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </ListItemActions>
      </ListItem>
      <ListItem>
        <ListItemMedia>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "var(--accent-purple, #9b87f5)",
              flexShrink: 0,
            }}
          />
        </ListItemMedia>
        <ListItemContent>
          <ListItemTitle>Sofia Reyes</ListItemTitle>
          <ListItemDescription>Engineering Manager</ListItemDescription>
        </ListItemContent>
        <ListItemActions>
          <button
            style={{
              padding: "4px 12px",
              fontSize: 12,
              fontFamily: "var(--font-lexend, 'Lexend', sans-serif)",
              fontWeight: 500,
              borderRadius: "var(--radius-medium, 8px)",
              border: "1px solid var(--border, #ebe9e8)",
              background: "var(--background, #ffffff)",
              color: "var(--foreground, #2e2b2b)",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
        </ListItemActions>
      </ListItem>
    </List>
  );
};
