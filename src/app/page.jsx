import Index from "@/components/dashboard";
import Dashboard from "@/components/dashboard/dashboard";
import "@/styles/dashboard.css";
import "@/models/configs/firebase_config";
import { CurrentUser } from "@/models/configs/currentUser";

export const metadata = {
  title: "Sellers-ArtofElectronics",
  description: "Your first stop electronic online website",
};

export default function Page() {
  let user = CurrentUser();
  return <div>{user ? <Dashboard user={user}/> : <Index />}</div>;
}
