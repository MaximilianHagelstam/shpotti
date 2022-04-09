import "next-auth";

declare module "next-auth" {
  interface Session {
    user: import("@prisma/client").User;
  }
}
