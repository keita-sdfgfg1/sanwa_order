export const metadata = { title: "threeorder" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
        <div style={{ maxWidth: 720, margin: "32px auto", padding: "0 16px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
