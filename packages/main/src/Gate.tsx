import { FC } from "react";
import * as router from "react-router-dom";
import { NotFound } from "./common/NotFound";

const base = ["/", "ecosystem", "portfolio"];
const enabled = import.meta.env.VITE_ROUTES_ENABLED;
const disabled = import.meta.env.VITE_ROUTES_DISABLED;
const ENABLED = enabled && [...base, ...enabled.split(",")];
const DISABLED: string[] = disabled ? disabled.split(",") : [];

export const route = (props: router.RouteProps) => {
  if (!props.path) return <router.Route {...props} />;
  if (props.path === "/") return <router.Route {...props} />;
  if (ENABLED && props.path && !ENABLED.find((x) => props.path?.startsWith(x)))
    return <router.Route path="*" element={<NotFound />} />;

  if (DISABLED.find((x) => props.path?.startsWith(x)))
    return <router.Route path="*" element={<NotFound />} />;

  return <router.Route {...props} />;
};

export const Link: FC<router.LinkProps> = (props) => {
  if (!props.to) return <router.Link {...props} />;
  if (props.to.toString() === "/") return <router.Link {...props} />;
  const toPath = props.to?.toString();

  if (
    (ENABLED &&
      !ENABLED.find((x) => {
        return toPath && toPath.length > 1
          ? toPath.replace(/^\//, "").startsWith(x)
          : toPath?.startsWith(x);
      })) ||
    DISABLED.find((x) => {
      return toPath && toPath?.startsWith(x);
    })
  )
    return <a data-tooltip="Coming Soon..." {...props} />;
  return <router.Link {...props} />;
};
