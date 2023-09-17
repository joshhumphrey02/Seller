import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiUpload,
  HiUser,
} from "react-icons/hi";

export const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/seller",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/seller/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/seller/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/seller/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/seller/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/seller/messages",
    icon: <HiOutlineAnnotation />,
  },
  {
    key: "upload",
    label: "Upload Product",
    path: "/seller/upload",
    icon: <HiUpload />,
  },
];

export const SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/seller/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "account",
    label: "Account",
    path: "/seller/account",
    icon: <HiUser />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/seller/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
