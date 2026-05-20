"use client";

import { ProfileCard, ProfileCardStatusBadge, Alert02, VegetarianFood, CameraOff01 } from "@/components/figma/ProfileCard";

const CHILD_SCHEDULE = [
  { label: "Mo", active: true },
  { label: "Tu", active: false },
  { label: "We", active: true },
  { label: "Th", active: false },
  { label: "Fr", active: true },
  { label: "Sa", active: true },
];

const EMPLOYEE_SCHEDULE = [
  { label: "Mo", active: true },
  { label: "Tu", active: false },
  { label: "We", active: true },
  { label: "Th", active: false },
  { label: "Fr", active: true },
  { label: "Sa", active: true },
];

const CHILD_IMG = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop";
const EMPLOYEE_IMG = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop";

const ChildBadges = () => (
  <>
    <ProfileCardStatusBadge borderColor="destructive">
      <Alert02 className="size-3 text-destructive" />
    </ProfileCardStatusBadge>
    <ProfileCardStatusBadge borderColor="accent-green-bold">
      <VegetarianFood className="size-3 text-accent-green-bold" />
    </ProfileCardStatusBadge>
    <ProfileCardStatusBadge>
      <CameraOff01 className="size-3 text-accent-gray" />
    </ProfileCardStatusBadge>
  </>
);

export const ProfileCardDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap gap-6">
            <ProfileCard
              type="child"
              name="Mark Zuckerberg Carter"
              coverImage={CHILD_IMG}
              room="Crazy Critters (3-5 Years)"
              identifier="BRX4ABRX4ABRX4A"
              guardian="Sarah Thomas"
              age="5Y 11M"
              fundingLabel="3M Funded"
              schedule={CHILD_SCHEDULE}
              tags={["Uncollectable", "Late", "+2"]}
              statusBadges={<ChildBadges />}
            />
            <ProfileCard
              type="employee"
              name="Peter Harris"
              coverImage={EMPLOYEE_IMG}
              room="Crazy Critters (3-5 Years)"
              identifier="BRX4ABRX4ABRX4A"
              level="Level 3 Practitioner"
              fundingLabel="3M Funded"
              schedule={EMPLOYEE_SCHEDULE}
              tags={["Excluded from Ratio", "+4h"]}
            />
          </div>
        </div>
      </div>

      {/* ── Types ────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Types
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          The <code>type</code> prop switches between a child profile (guardian + age row) and an employee profile (level/qualification row).
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-3">
              <ProfileCard
                type="child"
                name="Mark Zuckerberg Carter"
                coverImage={CHILD_IMG}
                room="Crazy Critters (3-5 Years)"
                identifier="BRX4ABRX4ABRX4A"
                guardian="Sarah Thomas"
                age="5Y 11M"
                fundingLabel="3M Funded"
                schedule={CHILD_SCHEDULE}
                tags={["Uncollectable", "Late"]}
                statusBadges={<ChildBadges />}
              />
              <span className="text-xs text-muted-foreground font-lexend">type=&quot;child&quot;</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ProfileCard
                type="employee"
                name="Peter Harris"
                coverImage={EMPLOYEE_IMG}
                room="Crazy Critters (3-5 Years)"
                identifier="BRX4ABRX4ABRX4A"
                level="Level 3 Practitioner"
                fundingLabel="3M Funded"
                schedule={EMPLOYEE_SCHEDULE}
                tags={["Excluded from Ratio", "+4h"]}
              />
              <span className="text-xs text-muted-foreground font-lexend">type=&quot;employee&quot;</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── States ───────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          States
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          The <code>focused</code> prop adds a 4px <code>ring</code> border to indicate selection.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col items-center gap-3">
              <ProfileCard
                type="child"
                name="Mark Zuckerberg Carter"
                coverImage={CHILD_IMG}
                room="Crazy Critters (3-5 Years)"
                identifier="BRX4ABRX4ABRX4A"
                guardian="Sarah Thomas"
                age="5Y 11M"
                fundingLabel="3M Funded"
                schedule={CHILD_SCHEDULE}
                tags={["Uncollectable", "Late"]}
                statusBadges={<ChildBadges />}
              />
              <span className="text-xs text-muted-foreground font-lexend">Default</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ProfileCard
                type="child"
                focused
                name="Mark Zuckerberg Carter"
                coverImage={CHILD_IMG}
                room="Crazy Critters (3-5 Years)"
                identifier="BRX4ABRX4ABRX4A"
                guardian="Sarah Thomas"
                age="5Y 11M"
                fundingLabel="3M Funded"
                schedule={CHILD_SCHEDULE}
                tags={["Uncollectable", "Late"]}
                statusBadges={<ChildBadges />}
              />
              <span className="text-xs text-muted-foreground font-lexend">Focused</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Status Badges ────────────────────────────────────────── */}
      <div>
        <h3 id="detail-badges" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Status Badges
        </h3>
        <p className="mt-2 text-sm text-muted-foreground font-lexend">
          Use <code>ProfileCardStatusBadge</code> with <code>borderColor</code> to compose custom status indicators over the cover image.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <div className="flex flex-wrap items-center gap-3">
            <ProfileCardStatusBadge borderColor="destructive">
              <Alert02 className="size-3 text-destructive" />
            </ProfileCardStatusBadge>
            <ProfileCardStatusBadge borderColor="accent-green-bold">
              <VegetarianFood className="size-3 text-accent-green-bold" />
            </ProfileCardStatusBadge>
            <ProfileCardStatusBadge>
              <CameraOff01 className="size-3 text-accent-gray" />
            </ProfileCardStatusBadge>
          </div>
        </div>
      </div>
    </div>
  );
};
