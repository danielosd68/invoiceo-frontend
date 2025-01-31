import type { Metadata } from "next";
import "./globals.css";
import {createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/system";


export const metadata: Metadata = {
  title: "Invoiceo.pl - Wystaw fakturę w 5 minut",
  description: "Platforma do płynnego wystawiania, opłacania i zarządzania fakturami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en">
      <body>
      <CssBaseline />
      {children}
      </body>
    </html>
  );
}
