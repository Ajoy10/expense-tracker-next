import { prisma } from "@/db";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }), // ...add more providers here
  ],

  callbacks: {
    async signIn(params) {
      try {
        if (params.user.email) {
          let user = await prisma.user.findFirst({
            where: {
              email: params.user.email as string,
            },
          });

          console.log(user);

          if (!user) {
            // User doesn't exist, create
            user = await prisma.user.create({
              data: {
                email: params.user.email as string,
                name:
                  params.user.name ||
                  (params.user.email as string).split("@")[0].replace(".", " "),
              },
            });
          }
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.error(err);
        return false;
      }
    },

    async session({ session, user }) {
      try {
        console.log(session.user);
        if (session.user?.email) {
          const dbUser = await prisma.user.findFirst({
            where: {
              email: session.user?.email as string,
            },
          });

          if (dbUser) {
            session.user.id = dbUser?.id;
          } else {
            throw Error("No user found!");
          }
        }

        return session;
      } catch (err) {
        console.error(err);
        return session;
      }
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
