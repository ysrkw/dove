import { PropsWithChildren } from "@hono/hono/jsx";

export function Layout(props: PropsWithChildren) {
  return (
    <html>
      <head>
        <title>dove</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
}
