import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
    title: "RobeSénégal - Location de Tenues de Cérémonie",
    description: "Louez des robes et tenues de luxe pour vos cérémonies au Sénégal. Mariages, baptêmes, galas et plus encore.",
    keywords: "location robe, mariage sénégal, tenue cérémonie, location tenue dakar, robe mariée sénégal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className="antialiased">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
