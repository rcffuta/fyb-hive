import type { Metadata } from "next";
import '@/styles/main.scss';
import Link from "next/link";


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
                    <section>
                        
                        <Link href='/' className="img-wrapper logo">
                            RCF FUTA
                        </Link>

                        <div>
                            <br/><br/>
                            {children}
                        </div>
                        {/* <Done /> */}

                    </section>
                </main>
            </body>
        </html>
    );
}
