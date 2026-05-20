import { Avatar, AvatarFallback, AvatarGroup } from "@/components/figma/Avatar";

export const AvatarGroupExample = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>MH</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>SR</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>PK</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>LB</AvatarFallback></Avatar>
    </AvatarGroup>
  );
};
