import { createFileRoute } from "@tanstack/react-router";
import { AuditPage } from "@/features/dr/dashboard-ui";
export const Route=createFileRoute("/audit-logs")({head:()=>({meta:[{title:"Audit Logs | DR Control"},{name:"description",content:"Review the disaster recovery operations audit trail."},{property:"og:title",content:"Audit Logs | DR Control"},{property:"og:description",content:"Review the disaster recovery operations audit trail."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:AuditPage});
