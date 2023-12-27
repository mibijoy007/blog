import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";



console.log(process.env.NEXTAUTH_URL)

export const AuthProviderOptions : AuthOptions = {
    providers: [
        GitHubProvider({
          clientId : 'Iv1.7b0e3b30272fbc63',
          clientSecret: '8e31d410eb8eed3825f07ab8a40d68effa5b91b6'
          
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