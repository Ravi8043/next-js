
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ThemeProvider>
        <h1 className="mb-6 text-4xl text-center bg-stone-950 p-4">Root Layout</h1>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
