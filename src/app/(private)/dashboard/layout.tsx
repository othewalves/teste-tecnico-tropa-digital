'use client'
import { UserContext } from "@/app/hooks/UserContext";
import { useContext } from "react";

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { logout } = useContext(UserContext);

    return (
        <div>
            Private
            {children}
            <button onClick={logout}>Logout</button>
        </div>
    );
}
