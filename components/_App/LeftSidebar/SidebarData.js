import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import DescriptionIcon from "@mui/icons-material/Description";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <GridViewIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "eCommerce",
        path: "/ecommerce/",
      },
      {
        title: "Analytics",
        path: "/analytics/",
      },
      {
        title: "Project Management",
        path: "/project-management/",
      },
      {
        title: "LMS Courses",
        path: "/lms-courses/",
      },
      {
        title: "Crypto",
        path: "/crypto/",
      },
      {
        title: "Help/Support Desk",
        path: "/help-desk/",
      },
      {
        title: "SaaS App",
        path: "/saas-app/",
      },
    ],
  },
  {
    title: "Master",
    path: "/master/customer-list/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Customers",
        path: "/master/customer-list/",
      },
      {
        title: "Inquiry Category",
        path: "/master/inquiry/",
      },
      {
        title: "Fabric",
        path: "/master/fabric/",
      },
      {
        title: "GSM",
        path: "/master/GSM/",
      },
      {
        title: "Composition",
        path: "/master/composition/",
      },
      {
        title: "Supplier",
        path: "/master/supplier/",
      },
      {
        title: "Color Code",
        path: "/master/color-code/",
      },
      {
        title: "Size",
        path: "/master/size/",
      },
    ],
  },
  {
    title: "Inquiry",
    path: "/inquiry/inquries/",
    icon: <DescriptionIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Inquries",
        path: "/inquiry/inquries/",
      },
      {
        title: "Ongoing",
        path: "/inquiry/ongoing/",
      },
    ],
  },
  {
    title: "Quotations",
    path: "/quotations/quotation/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Quotations",
        path: "/quotations/quotation/",
      },
    ],
  },
  {
    title: "Samples",
    path: "/sample/sample/",
    icon: <LayersIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Samples",
        path: "/sample/sample/",
      },
    ],
  },
  {
    title: "Administrator",
    path: "/administrator/users/",
    icon: <AdminPanelSettingsIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Users",
        path: "/administrator/users/",
      },
    ],
  },
];
