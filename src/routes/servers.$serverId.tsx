import { createFileRoute } from "@tanstack/react-router";
import { ServerDetailPage } from "@/features/dr/dashboard-ui";
export const Route=createFileRoute("/servers/$serverId")({head:({params})=>({meta:[{title:`${params.serverId.toUpperCase()} Server Details | DR Control`},{name:"description",content:"View disaster recovery server details, services, resources, and validation status."},{property:"og:title",content:"Server Details | DR Control"},{property:"og:description",content:"Inspect disaster recovery server health and validation status."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){const {serverId}=Route.useParams();return <ServerDetailPage id={serverId}/>}
