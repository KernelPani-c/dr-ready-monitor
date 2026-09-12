import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppShell } from "@/features/dr/dashboard-ui";

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { const router=useRouter(); useEffect(()=>reportLovableError(error,{boundary:"root"}),[error]); return <div className="grid min-h-screen place-items-center bg-background p-6 text-center"><div><h1 className="text-2xl font-semibold">Operations console unavailable</h1><p className="mt-2 text-muted-foreground">The dashboard could not be loaded.</p><button className="mt-5 rounded-md bg-primary px-4 py-2 text-primary-foreground" onClick={()=>{router.invalidate();reset()}}>Try again</button></div></div> }
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"author",content:"DR Control"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&display=swap"},{rel:"icon",href:"/favicon.ico"}]}),shellComponent:RootShell,component:Root,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="en" className="dark"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function Root(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><AppShell><Outlet/></AppShell></QueryClientProvider>}
