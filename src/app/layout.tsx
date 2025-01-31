import "./globals.css";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Metadata} from "next";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import theme from "invoiceo/theme";


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
        <html lang="pl">
        <body className={'font-[nunito]'}>
        <AppRouterCacheProvider>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
