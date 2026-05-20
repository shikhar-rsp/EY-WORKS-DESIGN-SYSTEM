"use client";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/figma/Card";
import { Button } from "@/components/figma/Button";

export const CardDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4">
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>A brief description of the card content.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-secondary-foreground font-lexend">Main content area of the card.</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="compact">Save</Button>
              <Button variant="secondary" size="compact">Cancel</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* With action */}
      <div>
        <h3 id="detail-with-action" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Header Action
        </h3>
        <div className="mt-4">
          <Card className="w-80">
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team.</CardDescription>
              <CardAction>
                <Button variant="secondary" size="compact">Invite</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-lexend">3 active members.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 id="detail-all-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Sizes
        </h3>
        <div className="mt-4 flex flex-wrap gap-300">
          {(["default", "sm"] as const).map((size) => (
            <div key={size} className="flex flex-col gap-100">
              <Card size={size} className="w-64">
                <CardHeader>
                  <CardTitle>Card ({size})</CardTitle>
                  <CardDescription>Size variant.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-foreground font-lexend">Content area.</p>
                </CardContent>
              </Card>
              <span className="text-xs text-muted-foreground font-lexend text-center">{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
