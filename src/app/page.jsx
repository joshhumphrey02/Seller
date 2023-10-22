import "@/styles/dashboard.css";
import { CurrentUser } from "@/models/configs/currentUser";

export const metadata = {
  title: "Sellers-ArtofElectronics",
  description: "Your first stop electronic online website",
};

export default function Page() {
  return <div>
    <CurrentUser />
  </div>;
}
