import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import * as dotenv from 'dotenv';
dotenv.config();

type ICredentials = {
  email: string;
  password: string;
};

interface User {
  id: string;
  name: string;
  email: string;
}

const secret_auth = process.env.NEXTAUTH_SECRET;
const url_api = process.env.URL_API;

const authOptions = {
  secret: secret_auth,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      authorize: async (credentials) => {
        const { email, password } = credentials as ICredentials;

        try {
          const response = await fetch(`${url_api}/auth`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });

          if (!response.ok) {
            throw new Error('User not found.');
          }

          const userResult = await response.json();

          console.log(userResult);

          const user: User = {
            id: userResult.token,
            name: `${userResult.user.first_name} ${userResult.user.last_name} `,
            email: userResult.user.email,
          };

          console.log(user);

          return user;
        } catch (error) {
          console.error('Error durante a autorização:', error);
          return null;
        }
      },
    }),
  ],

  session: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: '/',
  },
};

const nextAuthHandler = NextAuth(authOptions);
export { nextAuthHandler as GET, nextAuthHandler as POST };
