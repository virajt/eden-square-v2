export const isAdmin = (email: string | null | undefined) => {
  if (!email) return false;
  const adminEmails = ["virajtrivedi@outlook.com"];
  return adminEmails.includes(email);
};
