import { Layout } from "../components/layout.tsx";

export function RegisterPage() {
  return (
    <Layout>
      <form method="POST" action="/register">
        <label>
          Email <input type="email" name="email" required />
        </label>

        <label>
          Password <input type="password" name="password" required />
        </label>

        <label>
          Username @<input type="text" name="username" required />
        </label>

        <button type="submit">Login</button>
      </form>
    </Layout>
  );
}
