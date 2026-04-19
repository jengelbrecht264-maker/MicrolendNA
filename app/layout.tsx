export const metadata = {
  title: "MicroLendNA",
  description: "MicroLend Namibia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
