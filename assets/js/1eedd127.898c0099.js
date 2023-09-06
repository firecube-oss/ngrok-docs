"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[55661],{80667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=a(51163),n=(a(59496),a(49613));const o={sidebar_position:2},r="Endpoints",d={unversionedId:"cloud-edge/endpoints",id:"cloud-edge/endpoints",title:"Endpoints",description:"---",source:"@site/docs/cloud-edge/endpoints.md",sourceDirName:"cloud-edge",slug:"/cloud-edge/endpoints",permalink:"/docs/cloud-edge/endpoints",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/endpoints.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"What is ngrok Cloud Edge?",permalink:"/docs/cloud-edge/"},next:{title:"Zero-Knowledge TLS",permalink:"/docs/cloud-edge/zero-knowledge-tls"}},s={},l=[{value:"Domains",id:"domains",level:2},{value:"Reserved Domains",id:"reserved-domains",level:3},{value:"Wildcard Domains",id:"wildcard-domains",level:3},{value:"Bind a tunnel to receive traffic on all subdomains of <code>example.com</code>",id:"bind-a-tunnel-to-receive-traffic-on-all-subdomains-of-examplecom",level:6},{value:"Wildcard Domain Rules",id:"wildcard-domain-rules",level:4},{value:"Certificates",id:"certificates",level:2},{value:"Automated TLS Certificates",id:"automated-tls-certificates",level:3},{value:"TLS Certificates",id:"tls-certificates",level:3},{value:"Certificate Chains",id:"certificate-chains",level:3},{value:"Private Keys",id:"private-keys",level:3},{value:"TCP Addresses",id:"tcp-addresses",level:2},{value:"Bind a TCP tunnel on a reserved remote address",id:"bind-a-tcp-tunnel-on-a-reserved-remote-address",level:6}],c={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"endpoints"},"Endpoints"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"When you create an edge, you will automatically be assigned a reserved domain or TCP address depending on the type of edge you create. You can customize this endpoint by adding your own reserved or custom branded domain. An edge can have many endpoints, and each will use the same configuration."),(0,n.kt)("h2",{id:"domains"},"Domains"),(0,n.kt)("h3",{id:"reserved-domains"},"Reserved Domains"),(0,n.kt)("p",null,"Domains in ngrok are the public URL you can use to access your service. They can be subdomains of a domain owned by ngrok, such as ngrok.dev, or they can be completely customized by bringing your own domain."),(0,n.kt)("p",null,"Any domain that you intend to use should be registered in the ngrok Dashboard to ensure no other account can use it if your tunnel goes offline."),(0,n.kt)("p",null,"You can also register ",(0,n.kt)("a",{parentName:"p",href:"#wildcard-domains"},"wildcard domains")," to your account which will reserve all subdomains of that domain."),(0,n.kt)("h3",{id:"wildcard-domains"},"Wildcard Domains"),(0,n.kt)("p",null,"ngrok permits you to bind HTTP and TLS tunnels to wildcard domains. All wildcard domains, even those that are subdomains of an ngrok owned domain must first be reserved for your account on your dashboard. When using ",(0,n.kt)("inlineCode",{parentName:"p"},"--domain"),", specify a leading asterisk to bind a wildcard domain."),(0,n.kt)("h6",{id:"bind-a-tunnel-to-receive-traffic-on-all-subdomains-of-examplecom"},"Bind a tunnel to receive traffic on all subdomains of ",(0,n.kt)("inlineCode",{parentName:"h6"},"example.com")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ngrok http --domain *.example.com 80\n")),(0,n.kt)("h4",{id:"wildcard-domain-rules"},"Wildcard Domain Rules"),(0,n.kt)("p",null,"The use of wildcard domains creates ambiguities in some aspects of the ngrok.com service. The following rules are used to resolve these situations and are important to understand if you are using wildcard domains."),(0,n.kt)("p",null,"For the purposes of example, assume you have reserved the address ",(0,n.kt)("inlineCode",{parentName:"p"},"*.example.com")," for your account."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connections to nested subdomains (e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.bar.baz.example.com"),") will route to your wildcard tunnel."),(0,n.kt)("li",{parentName:"ul"},"You may bind tunnels on any valid subdomain of ",(0,n.kt)("inlineCode",{parentName:"li"},"example.com")," without creating an additional reserved domain entry."),(0,n.kt)("li",{parentName:"ul"},"No other account may reserve ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.example.com")," or any other subdomain that would match a wildcard domain reserved by another account."),(0,n.kt)("li",{parentName:"ul"},"Connections are routed to the most specific matching tunnel online. If you are running tunnels for both ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.example.com")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"*.example.com"),", requests to ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.example.com")," will always route to ",(0,n.kt)("inlineCode",{parentName:"li"},"foo.example.com"))),(0,n.kt)("h2",{id:"certificates"},"Certificates"),(0,n.kt)("h3",{id:"automated-tls-certificates"},"Automated TLS Certificates"),(0,n.kt)("p",null,"ngrok makes it incredibly easy to provision TLS certificates for your domains by integrating with Let's Encrypt to automatically provision and renew your certificates. It's a great way to never have to worry about expired certificates again. You can select \"Automated TLS Certificates\" when adding a custom domain in the dashboard"),(0,n.kt)("h3",{id:"tls-certificates"},"TLS Certificates"),(0,n.kt)("p",null,"ngrok supports uploading your own TLS certificates which we will use to terminate traffic to a given reserved domain at the ngrok edge. You may wish to use this functionality in addition to our automatically provisioned certificates if you are using an EV cert or provisioning certificates from your own certificate authority. Uploading a certificate will not change any traffic, you must then ",(0,n.kt)("em",{parentName:"p"},"attach")," the certificate to a reserved domain by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"certificate_id")," property on the reserved domain with the ID of the certificate you'd like to use for TLS termination."),(0,n.kt)("h3",{id:"certificate-chains"},"Certificate Chains"),(0,n.kt)("p",null,"When uploading a new certificate to ngrok via the API, the ",(0,n.kt)("inlineCode",{parentName:"p"},"certificate_pem")," field expects a certificate bundle of all certificates necessary to establish a chain of trust to a trusted root certificate authority. Many TLS certificate vendors will provide you with a constructed certificate bundle, but some will return the leaf certificate and the intermediate certificates separately and you must concatenate them to construct the bundle yourself."),(0,n.kt)("p",null,"Certificate bundles are a series of PEM-encoded X.509 certificates that have been concatenated together in a specific order. A bundle will look like the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n\n-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n\n-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n")),(0,n.kt)("p",null,"The first certificate in the bundle must be the leaf certificate. You can think of the leaf certificate as the one which is signed for your domain and ",(0,n.kt)("a",{parentName:"p",href:"#private-keys"},"the private key")," you will upload."),(0,n.kt)("p",null,"After the leaf are the intermediates certificates, if any. Each intermediate signs the certificate preceding it in the bundle. As an example, the first intermediate will have signed the leaf, and that signature is part of the leaf certificate itself. The final certificate is signed by the root certificate. You may also included the root certificate in the bundle as well, but it is not necessary or common practice to do so."),(0,n.kt)("h3",{id:"private-keys"},"Private Keys"),(0,n.kt)("p",null,"ngrok accepts the following formats for the ",(0,n.kt)("inlineCode",{parentName:"p"},"private_key_pem")," field:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RSA, in either PKCS#1 or PKCS#8 form."),(0,n.kt)("li",{parentName:"ul"},"ECDSA, in either SEC 1 or PKCS#8 form."),(0,n.kt)("li",{parentName:"ul"},"Ed25519, in PKCS#8 form.")),(0,n.kt)("p",null,"All of the above (PKCS#1, PKCS#8, and SEC 1) are represented with ASN.1 DER (a binary format), encoded as PEM."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ngrok will not accept any private keys that are encrypted (e.g. with DES)."),"."),(0,n.kt)("h2",{id:"tcp-addresses"},"TCP Addresses"),(0,n.kt)("p",null,'Normally, the remote TCP address and port are assigned randomly each time you start a TCP tunnel. For production services (and convenience) you often want a stable, guaranteed remote address. To do this, first, log in to your ngrok Dashboard and click "Reserve Address" in the "Reserved TCP Addresses" section. You cannot customize the address or port that is assigned to you. It is always assigned randomly. Then use the ',(0,n.kt)("inlineCode",{parentName:"p"},"--remote-addr")," option when invoking ngrok to bind a tunnel on your reserved TCP address. Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"--region")," you specify matches the region in which you reserved your address."),(0,n.kt)("h6",{id:"bind-a-tcp-tunnel-on-a-reserved-remote-address"},"Bind a TCP tunnel on a reserved remote address"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ngrok tcp --region=us --remote-addr 1.tcp.ngrok.io:20301 22\n")))}m.isMDXComponent=!0}}]);