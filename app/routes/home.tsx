import Dashboard from "~/features/navigation/components/Dashboard";

import { json, type LoaderFunctionArgs } from "@remix-run/node"
import { getSession } from "~/session.server";
export async function loader({ request }: LoaderFunctionArgs) {
    const session = await getSession(request.headers.get("Cookie"));
    return json({ session })
}
export default function () {
    return (
        <div>
            <Dashboard />
        </div>
    );
}