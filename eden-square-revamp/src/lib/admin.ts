export const isAdmin = (email: string | null | undefined) => {
  if (!email) return false;
  const adminEmails = ["virajtrivedi@outlook.com"]; // Authorized Master Admin
  return adminEmails.includes(email);
};
