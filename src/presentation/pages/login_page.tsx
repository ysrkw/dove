import { Layout } from "../components/layout.tsx";

export function LoginPage() {
  return (
    <Layout>
      <form method="POST" action="/login">
        <label>
          Email <input type="email" name="email" required />
        </label>

        <label>
          Password <input type="password" name="password" required />
        </label>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
