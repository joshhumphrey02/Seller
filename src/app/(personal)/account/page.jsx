import Navbar from "@/components/utils/Navbar";
import Sidebar from "@/components/utils/Sidebar";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Account from "@/components/account/Account";
import Profile from "@/components/account/Profile";
import "@/styles/dashboard.css";

export const metadata = {
  title: "Account-ElectroniHaven",
  description: "Your first stop electronic online website",
};

const accountList = [
  {
    key: "profile",
    value: "Profile",
  },
  {
    key: "account",
    value: "Account",
  },
  {
    key: "notification",
    value: "Notification",
  },
  {
    key: "orders",
    value: "Orders",
  },
  {
    key: "saved items",
    value: "Saved Items",
  },
];

export default function page() {
  return (
    <div className=" main">
      <Sidebar />
      <div className=" sub_main">
        <Navbar />
        <div className=" sub">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {accountList.map((item) => (
                <TabsTrigger key={item.key} value={item.key}>
                  {item.value}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="profile">
              <Profile />
            </TabsContent>
            <TabsContent value="account">
              <Account />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
