import Header from "../ui/header/header";
import Navbar from "../ui/prices/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            <Header title="Price List" />
            <div className="flex-grow mt-12">{children}</div>
            <Navbar />
        </div>
    );
}
