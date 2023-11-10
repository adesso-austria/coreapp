import { lazy } from "react";

const PagesRoutes = [
  // PAGES
  {
    path: "/pages/blank-page",
    component: lazy(() => import("../../view/pages/blank")),
    layout: "VerticalLayout",
  },
  {
    path: "/pages/error-404",
    component: lazy(() => import("../../view/pages/errors/404")),
    layout: "FullLayout",
  },
  // {
  //   path: "/pages/tools/",
  //   component: lazy(() => import("../../view/pages/tools/artwork_generator")),
  //   layout: "VerticalLayout",
  // },
  {
    path: "/pages/tools/",
    component: lazy(() => import("../../view/pages/tools/components_overview")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/components-page",
    component: lazy(() => import("../../view/components/components-page")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/avatar",
    component: lazy(() => import("../../view/components/data-display/avatar")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/badge",
    component: lazy(() => import("../../view/components/data-display/badge")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/calendar",
    component: lazy(() =>
      import("../../view/components/data-display/calendar")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/card",
    component: lazy(() => import("../../view/components/data-display/card")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/collapse",
    component: lazy(() =>
      import("../../view/components/data-display/collapse")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/comment",
    component: lazy(() => import("../../view/components/data-display/comment")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/empty",
    component: lazy(() => import("../../view/components/data-display/empty")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/list",
    component: lazy(() => import("../../view/components/data-display/list")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/popover",
    component: lazy(() => import("../../view/components/data-display/popover")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/table",
    component: lazy(() => import("../../view/components/data-display/table")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tabs",
    component: lazy(() => import("../../view/components/data-display/tabs")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tag",
    component: lazy(() => import("../../view/components/data-display/tag")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/timeline",
    component: lazy(() =>
      import("../../view/components/data-display/timeline")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-display/tooltip",
    component: lazy(() =>
      import("../../view/components/data-display/tooltip")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/checkbox",
    component: lazy(() => import("../../view/components/data-entry/checkbox")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/datepicker",
    component: lazy(() =>
      import("../../view/components/data-entry/datepicker")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/form",
    component: lazy(() => import("../../view/components/data-entry/form")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/inputs",
    component: lazy(() => import("../../view/components/data-entry/inputs")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/input-number",
    component: lazy(() =>
      import("../../view/components/data-entry/input-number")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/radio",
    component: lazy(() =>
      import("../../view/components/data-entry/radio")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/rate",
    component: lazy(() => import("../../view/components/data-entry/rate")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/select",
    component: lazy(() => import("../../view/components/data-entry/select")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/slider",
    component: lazy(() => import("../../view/components/data-entry/slider")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/switch",
    component: lazy(() => import("../../view/components/data-entry/switch")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/data-entry/upload",
    component: lazy(() => import("../../view/components/data-entry/upload")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/alert",
    component: lazy(() => import("../../view/components/feedback/alert")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/drawer",
    component: lazy(() => import("../../view/components/feedback/drawer")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/message",
    component: lazy(() => import("../../view/components/feedback/message")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/modal",
    component: lazy(() => import("../../view/components/feedback/modal")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/notification",
    component: lazy(() =>
      import("../../view/components/feedback/notification")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/popconfirm",
    component: lazy(() => import("../../view/components/feedback/popconfirm")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/progress",
    component: lazy(() => import("../../view/components/feedback/progress")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/result",
    component: lazy(() => import("../../view/components/feedback/result")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/feedback/skeleton",
    component: lazy(() => import("../../view/components/feedback/skeleton")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/buttons",
    component: lazy(() => import("../../view/components/general/buttons")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/icons",
    component: lazy(() => import("../../view/components/general/icons")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/general/style-guide",
    component: lazy(() => import("../../view/components/general/style-guide")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/breadcrumb",
    component: lazy(() =>
      import("../../view/components/navigation/breadcrumb")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/dropdown",
    component: lazy(() => import("../../view/components/navigation/dropdown")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/menu",
    component: lazy(() => import("../../view/components/navigation/menu")),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/pagination",
    component: lazy(() =>
      import("../../view/components/navigation/pagination")
    ),
    layout: "VerticalLayout",
  },
  {
    path: "/components/navigation/steps",
    component: lazy(() => import("../../view/components/navigation/steps")),
    layout: "VerticalLayout",
  },

];

export default PagesRoutes;