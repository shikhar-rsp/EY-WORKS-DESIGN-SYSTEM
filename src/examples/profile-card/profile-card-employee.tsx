import { ProfileCard } from "@/components/figma/ProfileCard";

const SCHEDULE = [
  { label: "Mo", active: true },
  { label: "Tu", active: false },
  { label: "We", active: true },
  { label: "Th", active: false },
  { label: "Fr", active: true },
  { label: "Sa", active: true },
];

export const ProfileCardEmployee = () => {
  return (
    <div className="p-6">
      <ProfileCard
        type="employee"
        name="Peter Harris"
        coverImage="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop"
        room="Crazy Critters (3-5 Years)"
        identifier="BRX4ABRX4ABRX4A"
        level="Level 3 Practitioner"
        fundingLabel="3M Funded"
        schedule={SCHEDULE}
        tags={["Excluded from Ratio", "+4h"]}
      />
    </div>
  );
};
