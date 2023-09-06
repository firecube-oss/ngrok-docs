"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[3529],{10460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var o=n(51163),a=(n(59496),n(49613));const s={sidebar_position:4},r="Edges",d={unversionedId:"cloud-edge/edges/index",id:"cloud-edge/edges/index",title:"Edges",description:"---",source:"@site/docs/cloud-edge/edges/index.md",sourceDirName:"cloud-edge/edges",slug:"/cloud-edge/edges/",permalink:"/docs/cloud-edge/edges/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/edges/index.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Zero-Knowledge TLS",permalink:"/docs/cloud-edge/zero-knowledge-tls"},next:{title:"HTTPS Edge",permalink:"/docs/cloud-edge/edges/https"}},l={},i=[{value:"Types of Edges",id:"types-of-edges",level:2},{value:"HTTPS Edge",id:"https-edge",level:3},{value:"TCP Edge",id:"tcp-edge",level:3},{value:"TLS Edge",id:"tls-edge",level:3},{value:"Creating an Edge",id:"creating-an-edge",level:2},{value:"Backends",id:"backends",level:3},{value:"Tunnel Group Labels",id:"tunnel-group-labels",level:3}],u={toc:i},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"edges"},"Edges"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Edges allow you to configure endpoints that connect your services to the world. Define edges to serve HTTPS, TCP, or TLS traffic and use modules to secure and manipulate network traffic."),(0,a.kt)("h2",{id:"types-of-edges"},"Types of Edges"),(0,a.kt)("p",null,"There are three types of edges you can create that all serve different purposes."),(0,a.kt)("h3",{id:"https-edge"},(0,a.kt)("a",{parentName:"h3",href:"https"},"HTTPS Edge")),(0,a.kt)("p",null,"An HTTPS edge is perfect for sharing a local web server or service to the world. It is a great choice for any service you might access through a browser and provides modules to manipulate HTTPS traffic without requiring changes to your code."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https"},"Learn More >")),(0,a.kt)("h3",{id:"tcp-edge"},(0,a.kt)("a",{parentName:"h3",href:"tcp"},"TCP Edge")),(0,a.kt)("p",null,"A TCP edge can be used to share any non-HTTP protocols with the world. It's a generic edge that you can use to communicate with Industrial IoT systems, devices, and servers with SSH, VNC, RDP, SQL, or any other networked protocol."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"tcp"},"Learn More >")),(0,a.kt)("h3",{id:"tls-edge"},(0,a.kt)("a",{parentName:"h3",href:"tls"},"TLS Edge")),(0,a.kt)("p",null,"A TLS edge terminate all TLS (SSL) traffic at the ngrok.com servers using ngrok.com certificates. For production-grade services, you'll want your tunneled traffic to be encrypted with your own TLS key and certificate."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"tls"},"Learn More >")),(0,a.kt)("h2",{id:"creating-an-edge"},"Creating an Edge"),(0,a.kt)("p",null,"You can create an edge through the ngrok Dashboard by navigating to Endpoints > Edges. Follow the prompts to get set up with your new edge in just a few clicks. Once you have configured the edge through the dashboard, you can use the instructions to start your ngrok agent to serve traffic."),(0,a.kt)("h3",{id:"backends"},"Backends"),(0,a.kt)("p",null,"Each edge contains one or more backends, which define how to handle the traffic in that edge. There are different types of backends depending on the behavior you desire for the edge."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Failover - Failover backends allow you to specify multiple backends to try in a specific order. When you define a failover backend, you provide an ordered list of backends to try."),(0,a.kt)("li",{parentName:"ul"},"Tunnel Group - Tunnel group backends allow you to define a set of ngrok tunnels that can respond to requests. The requests to a tunnel group backend will load balance across all active tunnels in the group. These backends use a set of labels to identify the tunnels that should be used to serve these requests. You can find examples for starting a tunnel in the ngrok Dashboard."),(0,a.kt)("li",{parentName:"ul"},"Weighted - Weighted backends will route traffic based on percentage to multiple backends. This can be useful when rolling out updates to existing services, where you want to send a small percentage to the new service for testing."),(0,a.kt)("li",{parentName:"ul"},"HTTP Response - An HTTP Response backend allows you to specify a static response to serve with a specific status code. This is useful for defining error pages such as 404 when used as part of a failover backend.")),(0,a.kt)("h3",{id:"tunnel-group-labels"},"Tunnel Group Labels"),(0,a.kt)("p",null,"Tunnel Group Backends are the backend to use when you are sharing a local service with an ngrok agent. These backends use a set of customizable labels in order to identify the correct agent to forward traffic to. You can configure as many ngrok agents as you like to be part of the same tunnel group, which will then load balance the requests to this backend across the tunnels."),(0,a.kt)("p",null,"For more examples of configuring your ngrok agent to use Labeled Tunnels, see our ",(0,a.kt)("a",{parentName:"p",href:"//ngrok.com/docs/ngrok-agent/ngrok#ngrok-tunnel"},"ngrok agent documentation for Labeled Tunnels"),"."))}g.isMDXComponent=!0}}]);