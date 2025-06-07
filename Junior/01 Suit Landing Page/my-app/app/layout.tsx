import { epilogue } from "./fonts/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}