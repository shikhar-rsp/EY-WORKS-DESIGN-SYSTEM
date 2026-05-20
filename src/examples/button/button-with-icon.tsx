import { Button } from "@/components/figma/Button";

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3.5C10 3.5 6 6.446 6 7.5C6 8.554 10 11.5 10 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3.5C6 3.5 10 6.446 10 7.5C10 8.554 6 11.5 6 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ButtonWithIcon = () => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button leadingIcon={<ArrowLeftIcon />}>Back</Button>
      <Button trailingIcon={<ArrowRightIcon />}>Next</Button>
      <Button variant="outline" leadingIcon={<ArrowLeftIcon />} trailingIcon={<ArrowRightIcon />}>Both</Button>
    </div>
  );
};
