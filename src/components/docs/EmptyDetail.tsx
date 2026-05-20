"use client";

import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/figma/Empty";
import { Button } from "@/components/figma/Button";
import { Inbox, Folder01 } from "@/components/fragments/icons/catalog";

export const EmptyDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Preview</h3>
        <div className="mt-4 rounded-large border border-border">
          <Empty className="py-10">
            <EmptyHeader>
              <EmptyMedia variant="icon"><Inbox className="size-6" /></EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>Messages will appear here when received.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="primary" size="compact">Compose</Button>
            </EmptyContent>
          </Empty>
        </div>
      </div>

      <div>
        <h3 id="detail-variants" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Variants</h3>
        <div className="mt-4 grid grid-cols-1 gap-300 sm:grid-cols-2">
          {/* Outline */}
          <div className="rounded-large border border-border">
            <Empty className="py-8">
              <EmptyHeader>
                <EmptyMedia variant="icon"><Folder01 className="size-6" /></EmptyMedia>
                <EmptyTitle>Empty folder</EmptyTitle>
                <EmptyDescription>Drop files here to upload.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="secondary" size="compact">Browse</Button>
              </EmptyContent>
            </Empty>
          </div>
          {/* Background */}
          <div className="rounded-large bg-muted">
            <Empty className="py-8">
              <EmptyHeader>
                <EmptyMedia variant="icon" className="bg-background"><Inbox className="size-6" /></EmptyMedia>
                <EmptyTitle>All caught up!</EmptyTitle>
                <EmptyDescription>No pending notifications.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </div>
      </div>
    </div>
  );
};
