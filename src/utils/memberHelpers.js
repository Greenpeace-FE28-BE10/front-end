export const findMemberId = (memberId, communityMembers) => {
  return (
    communityMembers?.find((member) => member.users_id === memberId) !==
    undefined
  );
};
