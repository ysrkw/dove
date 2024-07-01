import { Layout } from "../components/layout.tsx";

export function LoginPage() {
  return (
    <Layout>
      <form method="POST" action="/login">
        <label>
          Email
          <input type="email" />
        </label>

        <label>
          Password
          <input type="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
