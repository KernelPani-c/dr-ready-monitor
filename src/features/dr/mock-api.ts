export type ServerStatus = "ONLINE" | "OFFLINE" | "WARNING" | "MAINTENANCE";
export type Result = "PASSED" | "FAILED" | "WARNING" | "TIMEOUT" | "CONNECTION ERROR" | "RUNNING" | "CANCELLED";
export type Server = { id:string; name:string; hostname:string; ip:string; environment:string; group:string; os:string; status:ServerStatus; cpu:number; memory:number; disk:number; lastTest:string; result:Result; uptime:string };
export type TestDef = { id:string; name:string; category:string; description:string; expected:string; timeout:number; status:"ACTIVE"|"DISABLED" };
export type Run = { id:string; serverId:string; testId:string; progress:number; result:Result; started:string; duration:string; user:string; currentStep?:string };

export const servers: Server[] = [
 {id:"s1",name:"DR-APP-01",hostname:"dr-app-01.corp.local",ip:"10.40.10.21",environment:"Production DR",group:"Application",os:"RHEL 9.4",status:"ONLINE",cpu:34,memory:61,disk:62,lastTest:"4 min ago",result:"PASSED",uptime:"47d 08h 22m"},
 {id:"s2",name:"DR-APP-02",hostname:"dr-app-02.corp.local",ip:"10.40.10.22",environment:"Production DR",group:"Application",os:"RHEL 9.4",status:"ONLINE",cpu:41,memory:67,disk:58,lastTest:"12 min ago",result:"PASSED",uptime:"47d 08h 19m"},
 {id:"s3",name:"DR-APP-03",hostname:"dr-app-03.corp.local",ip:"10.40.10.23",environment:"Production DR",group:"Application",os:"Ubuntu 24.04",status:"WARNING",cpu:78,memory:84,disk:71,lastTest:"18 min ago",result:"WARNING",uptime:"12d 03h 41m"},
 {id:"s4",name:"DR-WEB-01",hostname:"dr-web-01.corp.local",ip:"10.40.20.11",environment:"Production DR",group:"Web",os:"Ubuntu 24.04",status:"ONLINE",cpu:22,memory:48,disk:39,lastTest:"7 min ago",result:"PASSED",uptime:"63d 14h 05m"},
 {id:"s5",name:"DR-WEB-02",hostname:"dr-web-02.corp.local",ip:"10.40.20.12",environment:"Production DR",group:"Web",os:"Ubuntu 24.04",status:"OFFLINE",cpu:0,memory:0,disk:0,lastTest:"1 hr ago",result:"CONNECTION ERROR",uptime:"—"},
 {id:"s6",name:"DR-DB-01",hostname:"dr-db-01.corp.local",ip:"10.40.30.11",environment:"Production DR",group:"Database",os:"RHEL 9.4",status:"ONLINE",cpu:56,memory:72,disk:68,lastTest:"9 min ago",result:"PASSED",uptime:"88d 01h 12m"},
 {id:"s7",name:"DR-DB-02",hostname:"dr-db-02.corp.local",ip:"10.40.30.12",environment:"Production DR",group:"Database",os:"RHEL 9.4",status:"MAINTENANCE",cpu:12,memory:39,disk:74,lastTest:"Yesterday",result:"WARNING",uptime:"2d 16h 51m"},
 {id:"s8",name:"DR-CACHE-01",hostname:"dr-cache-01.corp.local",ip:"10.40.40.15",environment:"Production DR",group:"Cache",os:"Rocky Linux 9",status:"ONLINE",cpu:29,memory:53,disk:31,lastTest:"22 min ago",result:"PASSED",uptime:"36d 05h 27m"},
 {id:"s9",name:"DR-BACKUP-01",hostname:"dr-backup-01.corp.local",ip:"10.40.50.10",environment:"Recovery",group:"Backup",os:"Windows Server 2022",status:"WARNING",cpu:66,memory:77,disk:89,lastTest:"31 min ago",result:"FAILED",uptime:"19d 20h 02m"},
 {id:"s10",name:"DR-MONITOR-01",hostname:"dr-monitor-01.corp.local",ip:"10.40.60.10",environment:"Management",group:"Monitoring",os:"Ubuntu 22.04",status:"ONLINE",cpu:18,memory:44,disk:46,lastTest:"2 min ago",result:"PASSED",uptime:"104d 09h 33m"},
];

export const tests: TestDef[] = [
 ["t1","Server Connectivity","Connectivity","Validates ICMP and secure management reachability.","Server responds within 2 seconds",15],
 ["t2","Disk Space Check","Capacity","Checks critical filesystem utilization thresholds.","All mount points below 80%",10],
 ["t3","Memory Check","Performance","Validates available memory and swap pressure.","Memory utilization below 85%",10],
 ["t4","CPU Check","Performance","Samples load average and processor saturation.","CPU utilization below 80%",10],
 ["t5","Service Check","Services","Confirms approved application services are running.","All required services active",20],
 ["t6","Port Connectivity","Connectivity","Tests approved application and management ports.","Required ports accept connections",20],
 ["t7","Database Connectivity","Database","Validates database listener and authentication path.","Database accepts validation query",30],
 ["t8","DNS Resolution","Network","Checks forward and reverse DNS resolution.","Records resolve correctly",15],
 ["t9","NTP Synchronization","Network","Validates clock source and time offset.","Offset below 100ms",15],
 ["t10","Application Health Check","Application","Calls application health endpoints and dependencies.","All health checks return healthy",45],
 ["t11","Backup Availability","Recovery","Confirms latest backup media is accessible.","Backup newer than 24 hours",60],
 ["t12","Mount Point Check","Storage","Validates required mounts and write access.","All required mounts available",20],
].map(([id,name,category,description,expected,timeout])=>({id:String(id),name:String(name),category:String(category),description:String(description),expected:String(expected),timeout:Number(timeout),status:"ACTIVE" as const}));

export const initialRuns: Run[] = [
 {id:"EX-8421",serverId:"s1",testId:"t2",progress:72,result:"RUNNING",started:"14:32:01",duration:"00:00:07",user:"admin",currentStep:"Checking /backup"},
 {id:"EX-8420",serverId:"s6",testId:"t7",progress:41,result:"RUNNING",started:"14:31:44",duration:"00:00:18",user:"n.rahman",currentStep:"Validating replication"},
];
export const history: Run[] = [
 {id:"EX-8419",serverId:"s10",testId:"t1",progress:100,result:"PASSED",started:"Today, 14:28",duration:"6s",user:"admin"},
 {id:"EX-8418",serverId:"s9",testId:"t11",progress:100,result:"FAILED",started:"Today, 14:14",duration:"38s",user:"m.chen"},
 {id:"EX-8417",serverId:"s3",testId:"t3",progress:100,result:"WARNING",started:"Today, 13:52",duration:"11s",user:"admin"},
 {id:"EX-8416",serverId:"s5",testId:"t1",progress:100,result:"CONNECTION ERROR",started:"Today, 13:45",duration:"5s",user:"n.rahman"},
 {id:"EX-8415",serverId:"s6",testId:"t7",progress:100,result:"PASSED",started:"Today, 13:32",duration:"17s",user:"m.chen"},
 {id:"EX-8414",serverId:"s7",testId:"t5",progress:100,result:"TIMEOUT",started:"Yesterday, 18:20",duration:"30s",user:"admin"},
 {id:"EX-8413",serverId:"s4",testId:"t10",progress:100,result:"PASSED",started:"Yesterday, 17:08",duration:"23s",user:"n.rahman"},
 {id:"EX-8412",serverId:"s2",testId:"t2",progress:100,result:"PASSED",started:"Yesterday, 16:44",duration:"9s",user:"admin"},
];
export const audits = [
 ["14:32:06","admin","Test completed","DR-APP-01","Disk Space Check","PASSED"],["14:31:44","n.rahman","Test started","DR-DB-01","Database Connectivity","RUNNING"],["14:28:17","admin","Test completed","DR-MONITOR-01","Server Connectivity","PASSED"],["14:14:52","m.chen","Test completed","DR-BACKUP-01","Backup Availability","FAILED"],["13:58:03","admin","Server status changed","DR-APP-03","—","WARNING"],["13:45:19","n.rahman","Connection failed","DR-WEB-02","Server Connectivity","CONNECTION ERROR"],["12:05:11","system","Readiness report generated","All servers","DR Daily Report","PASSED"],["09:30:00","admin","Settings updated","—","Default timeout","PASSED"]
];
const wait=(ms:number)=>new Promise(r=>setTimeout(r,ms));
export const mockApi={
 async getServers(){await wait(220);return servers}, async getTests(){await wait(180);return tests}, async getHistory(){await wait(240);return history},
 async startTest(serverId:string,testId:string){await wait(300); return {id:`EX-${8422+Math.floor(Math.random()*80)}`,serverId,testId,progress:0,result:"RUNNING" as Result,started:new Date().toLocaleTimeString([], {hour12:false}),duration:"00:00:00",user:"admin",currentStep:"Initializing"}},
};
export const serverById=(id:string)=>servers.find(s=>s.id===id);
export const testById=(id:string)=>tests.find(t=>t.id===id);
