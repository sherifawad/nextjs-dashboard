import "@/app/ui/global.css";
import { inter, roboto_mono } from "./ui/fonts";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${roboto_mono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
