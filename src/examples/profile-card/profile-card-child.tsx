"use client";

import { ProfileCard, ProfileCardStatusBadge, Alert02, VegetarianFood, CameraOff01 } from "@/components/figma/ProfileCard";

const SCHEDULE = [
  { label: "Mo", active: true },
  { label: "Tu", active: false },
  { label: "We", active: true },
  { label: "Th", active: false },
  { label: "Fr", active: true },
  { label: "Sa", active: true },
];

export const ProfileCardChild = () => {
  return (
    <div className="p-6">
      <ProfileCard
        type="child"
        name="Mark Zuckerberg Carter"
        coverImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop"
        room="Crazy Critters (3-5 Years)"
        identifier="BRX4ABRX4ABRX4A"
        guardian="Sarah Thomas"
        age="5Y 11M"
        fundingLabel="3M Funded"
        schedule={SCHEDULE}
        tags={["Uncollectable", "Late", "+2"]}
        statusBadges={
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
        }
      />
    </div>
  );
};
