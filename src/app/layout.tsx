import type { Metadata } from "next";
import '@/styles/main.scss';


export const metadata: Metadata = {
  title: "RCF",
  description: "A place where good things never cease",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
