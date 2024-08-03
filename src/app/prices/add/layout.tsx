import BackButton from "@/app/ui/backbutton";
import Header from "@/app/ui/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col">
            <Header title="Add New Item" left={<BackButton />} />
            <div className="flex-grow mt-12">{children}</div>
        </div>
    );
}
