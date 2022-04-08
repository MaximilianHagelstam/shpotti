import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme: {
    colorScheme: "light",
    brandColor: "#6366f1",
    logo: "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",
  },
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
});
