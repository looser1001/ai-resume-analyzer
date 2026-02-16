

import {type RouteConfig, index, route} from "@react-router/dev/routes";
import {fileURLToPath} from "node:url";

export default [
    index("routes/home.tsx"),
    route( '/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),
    route('/resume/:id', 'routes/resume.tsx'),

] satisfies RouteConfig;
