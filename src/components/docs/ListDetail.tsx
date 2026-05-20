"use client";

import {
  List,
  ListItem,
  ListItemMedia,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemActions,
  ListHeader,
  ListFooter,
} from "@/components/figma/List";
import { Avatar, AvatarFallback } from "@/components/figma/Avatar";
import { Button } from "@/components/figma/Button";
import { Tag } from "@/components/figma/Tag";

const ITEMS = [
  { name: "Ant Design", desc: "An enterprise-class UI design language.", tag: "React" },
  { name: "Material UI", desc: "React components based on Material Design.", tag: "React" },
  { name: "Chakra UI", desc: "Accessible and themeable component library.", tag: "React" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework.", tag: "CSS" },
];

export const ListDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <List>
            {ITEMS.slice(0, 3).map((item) => (
              <ListItem key={item.name}>
                <ListItemMedia>
                  <Avatar><AvatarFallback>{item.name[0]}</AvatarFallback></Avatar>
                </ListItemMedia>
                <ListItemContent>
                  <ListItemTitle>{item.name}</ListItemTitle>
                  <ListItemDescription>{item.desc}</ListItemDescription>
                </ListItemContent>
                <ListItemActions>
                  <Button variant="secondary" size="compact">View</Button>
                </ListItemActions>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* ── Bordered ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-bordered" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Bordered
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Add a rounded border around the entire list with <code>bordered</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <List bordered>
            {ITEMS.map((item) => (
              <ListItem key={item.name}>
                <ListItemContent>
                  <ListItemTitle>{item.name}</ListItemTitle>
                  <ListItemDescription>{item.desc}</ListItemDescription>
                </ListItemContent>
                <ListItemActions>
                  <Tag label={item.tag} />
                </ListItemActions>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      {/* ── Header & Footer ──────────────────────────────────────── */}
      <div>
        <h3 id="detail-header-footer" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Header &amp; Footer
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          <code>ListHeader</code> and <code>ListFooter</code> can wrap the <code>List</code> component.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="rounded-large border border-border overflow-hidden">
            <ListHeader>Popular Libraries</ListHeader>
            <List split>
              {ITEMS.slice(0, 3).map((item) => (
                <ListItem key={item.name}>
                  <ListItemMedia>
                    <Avatar><AvatarFallback>{item.name[0]}</AvatarFallback></Avatar>
                  </ListItemMedia>
                  <ListItemContent>
                    <ListItemTitle>{item.name}</ListItemTitle>
                    <ListItemDescription>{item.desc}</ListItemDescription>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
            <ListFooter>Showing 3 of 4 items</ListFooter>
          </div>
        </div>
      </div>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Sizes
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Control item padding with the <code>size</code> prop: <code>sm</code>, <code>default</code>, <code>lg</code>.
        </p>
        <div className="mt-4 space-y-4 rounded-large border border-border p-6">
          {(["sm", "default", "lg"] as const).map((size) => (
            <div key={size}>
              <span className="font-lexend text-xs text-muted-foreground mb-2 block">size=&quot;{size}&quot;</span>
              <List bordered size={size}>
                <ListItem>
                  <ListItemContent>
                    <ListItemTitle>Ant Design</ListItemTitle>
                    <ListItemDescription>An enterprise-class UI design language.</ListItemDescription>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <ListItemTitle>Material UI</ListItemTitle>
                    <ListItemDescription>React components based on Material Design.</ListItemDescription>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          ))}
        </div>
      </div>

      {/* ── No Split ─────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-no-split" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          No Split
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>split=&#123;false&#125;</code> to remove the dividers between items.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <List bordered split={false}>
            {ITEMS.map((item) => (
              <ListItem key={item.name}>
                <ListItemContent>
                  <ListItemTitle>{item.name}</ListItemTitle>
                </ListItemContent>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

    </div>
  );
};
