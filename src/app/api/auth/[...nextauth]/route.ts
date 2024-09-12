import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const AuthProviderOptions : AuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
        GitHubProvider({
          clientId : process.env.GitHub_ClientID as string,
          clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENTSECRET as string
          
        })
      ],
    callbacks:{
      async session({session,token} : any){
          session.user.name = `${session?.user?.name}_${token?.sub}`
          return session;
      }
    },
    secret:'default_secret_key'
} 

const nextAuth = NextAuth(AuthProviderOptions);

export {nextAuth as GET,nextAuth as  POST};