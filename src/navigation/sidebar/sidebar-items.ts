import {
  Banknote,
  Building2,
  Calendar,
  ChartBar,
  Gauge,
  Kanban,
  LayoutDashboard,
  type LucideIcon,
  ReceiptText,
  ShoppingBag,
  Users,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Home",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "Finance",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Maintenance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "Properties",
        url: "/dashboard/coming-soon",
        icon: Gauge,
      },
      {
        title: "Tenants",
        url: "/dashboard/coming-soon",
        icon: ShoppingBag,
      },
      {
        title: "Calendar",
        url: "/dashboard/calendar",
        icon: Calendar,
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Properties",
        url: "/dashboard/properties",
        icon: Building2,
      },
      {
        title: "Teneants",
        url: "/dashboard/tenants",
        icon: Users,
      },
      {
        title: "Maintenance",
        url: "/dashboard/maintenance",
        icon: Kanban,
      },
      {
        title: "Payments",
        url: "/dashboard/coming-soon",
        icon: ReceiptText,
      },
    ],
  },
];
