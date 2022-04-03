import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  theme: {
    colorScheme: "light",
    brandColor: "#6366f1",
    logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub || "";
      return session;
    },
  },
});
