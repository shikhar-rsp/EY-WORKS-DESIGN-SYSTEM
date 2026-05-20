import {
  Steps,
  StepsItem,
  StepsIndicator,
  StepsContent,
  StepsTitle,
  StepsDescription,
  StepsSeparator,
} from "@/components/figma/Steps";

export const StepsVertical = () => {
  return (
    <div className="w-full max-w-xs p-6">
      <Steps defaultValue="2" orientation="vertical">
        <StepsItem value="1">
          <StepsIndicator />
          <StepsContent>
            <StepsTitle>Account</StepsTitle>
            <StepsDescription>Create your account</StepsDescription>
          </StepsContent>
        </StepsItem>

        <StepsSeparator />

        <StepsItem value="2">
          <StepsIndicator />
          <StepsContent>
            <StepsTitle>Billing</StepsTitle>
            <StepsDescription>Add payment method</StepsDescription>
          </StepsContent>
        </StepsItem>

        <StepsSeparator />

        <StepsItem value="3">
          <StepsIndicator />
          <StepsContent>
            <StepsTitle>Confirm</StepsTitle>
            <StepsDescription>Review and confirm</StepsDescription>
          </StepsContent>
        </StepsItem>
      </Steps>
    </div>
  );
};
