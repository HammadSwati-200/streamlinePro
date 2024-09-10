import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";

export const metadata = {
  title: "StreamlinePro",
  description:
    "Streamline your business operations with StreamlinePro. Automate tasks, access real-time analytics, and enhance team collaboration with our powerful, user-friendly solution. Join thousands of businesses optimizing their workflow with StreamlinePro. Start your free trial today!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../public/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../public/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../public/images  /favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="description" content={metadata.description} />
          <title>{metadata.title}</title>
        </Head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
