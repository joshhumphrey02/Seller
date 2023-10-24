import { Theme } from "@/components/utils/Theme";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


export const metadata = {
  title: "Sellers-ArtofElectronics",
  description: "Your first stop electronic online website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=" xl:w-[95%] md:w-[97%] w-[99%] mx-auto">
            {children}
          </div>
        <ToastContainer />
        </Theme>
      </body>
    </html>
  );
}
