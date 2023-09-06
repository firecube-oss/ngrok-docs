"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[33032],{14105:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(51163),i=(n(59496),n(49613));const r={},o="OAuth",l={unversionedId:"cloud-edge/modules/oauth",id:"cloud-edge/modules/oauth",title:"OAuth",description:"---",source:"@site/docs/cloud-edge/modules/oauth.mdx",sourceDirName:"cloud-edge/modules",slug:"/cloud-edge/modules/oauth",permalink:"/docs/cloud-edge/modules/oauth",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/cloud-edge/modules/oauth.mdx",tags:[],version:"current",lastUpdatedBy:"Alan Shreve",lastUpdatedAt:1693163609,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Mutual TLS",permalink:"/docs/cloud-edge/modules/mutual-tls"},next:{title:"OpenID Connect",permalink:"/docs/cloud-edge/modules/openid-connect"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Agent CLI",id:"agent-cli",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes",level:6},{value:"Agent Configuration File",id:"agent-configuration-file",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate-1",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain-1",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app-1",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes-1",level:6},{value:"SSH",id:"ssh",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate-2",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain-2",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app-2",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes-2",level:6},{value:"Go SDK",id:"go-sdk",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate-3",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain-3",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app-3",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes-3",level:6},{value:"Rust SDK",id:"rust-sdk",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate-4",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain-4",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app-4",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes-4",level:6},{value:"Kubernetes Ingress Controller",id:"kubernetes-ingress-controller",level:3},{value:"<strong>Authenticate</strong>",id:"authenticate-5",level:6},{value:"<strong>Authenticate + Authorize by email and domain</strong>",id:"authenticate--authorize-by-email-and-domain-5",level:6},{value:"<strong>Authenticate with your own OAuth app</strong>",id:"authenticate-with-your-own-oauth-app-5",level:6},{value:"<strong>Customize requested authentication scopes</strong>",id:"customize-requested-authentication-scopes-5",level:6},{value:"Edges",id:"edges",level:3},{value:"Behavior",id:"behavior",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Continuous Authorization",id:"continuous-authorization",level:3},{value:"Managed Applications",id:"managed-applications",level:3},{value:"App Users",id:"app-users",level:3},{value:"Cookies",id:"cookies",level:3},{value:"Reference",id:"reference",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Upstream Headers",id:"upstream-headers",level:3},{value:"Special Paths",id:"special-paths",level:3},{value:"Events",id:"events",level:3},{value:"Errors",id:"errors",level:3},{value:"Limits",id:"limits",level:3},{value:"Managed Applications",id:"managed-application-limits",level:4},{value:"MAUs",id:"mau-limits",level:4},{value:"Supported Providers",id:"supported-providers",level:3},{value:"Try it out",id:"try-it-out",level:2}],d={toc:s},p="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oauth"},"OAuth"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The OAuth module enforces an OAuth authentication flow in front of your HTTP\nendpoints. Any client accessing an OAuth-protected endpoint will be redirected\nto a chosen identity provider (e.g. Google) for authentication. When they are\nredirected back to your endpoint, the ngrok edge checks an optional set of\nauthorization constraints (e.g. email address). If authorized, the request is\nforwarded to your upstream application and ngrok sets a cookie to avoid\nrepeating the authentication flow."),(0,i.kt)("p",null,"You ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"configure the OAuth module")," with an identity provider\nname, your OAuth app's client ID and client secret, and an optional set of\nauthorization constraints."),(0,i.kt)("p",null,"To get started faster, ngrok maintains ",(0,i.kt)("a",{parentName:"p",href:"#managed-applications"},"managed OAuth\napps")," for some identity providers so you don't need to\nbring your own client id and client secret. These managed OAuth applications\nare shared among ngrok accounts and have ",(0,i.kt)("a",{parentName:"p",href:"#managed-application-limits"},"additional\nlimitations"),"."),(0,i.kt)("p",null,"We've written ",(0,i.kt)("a",{parentName:"p",href:"#supported-providers"},"integration guides for every supported\nprovider")," to make it easy for you to get started."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("h3",{id:"agent-cli"},"Agent CLI"),(0,i.kt)("h6",{id:"authenticate"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ngrok http 80 --oauth google\n")),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ngrok http 80 \\\n  --oauth google \\\n  --oauth-allow-email kate.libby@gmail.com \\\n  --oauth-allow-domain acme.org\n")),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ngrok http 80 \\\n  --oauth microsoft \\\n  --oauth-client-id "{client id}" \\\n  --oauth-client-secret "{client secret}"\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ngrok http 80 \\\n  --oauth github \\\n  --oauth-client-id "{client id}" \\\n  --oauth-client-secret "{client secret}" \\\n  --oauth-scope "repo" \\\n  --oauth-scope "user"\n')),(0,i.kt)("h3",{id:"agent-configuration-file"},"Agent Configuration File"),(0,i.kt)("h6",{id:"authenticate-1"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tunnels:\n  example:\n    proto: http\n    addr: 80\n    oauth:\n      provider: "google"\n')),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain-1"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tunnels:\n  example:\n    proto: http\n    addr: 80\n    oauth:\n      provider: "google"\n      allow_domains: ["example.com", "acme.org"]\n      allow_emails: ["kate.libby@gmail.com"]\n')),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app-1"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tunnels:\n  example:\n    proto: http\n    addr: 80\n    oauth:\n      provider: "microsoft"\n      client_id: "{client id}"\n      client_secret: "{client secret}"\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes-1"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'tunnels:\n  example:\n    proto: http\n    addr: 80\n    oauth:\n      provider: "github"\n      client_id: "{client id}"\n      client_secret: "{client secret}"\n      scopes: ["repo", "user"]\n')),(0,i.kt)("h3",{id:"ssh"},"SSH"),(0,i.kt)("h6",{id:"authenticate-2"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -R 443:localhost:80 connect.ngrok-agent.com http --oauth=google\n")),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain-2"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -R 443:localhost:80 connect.ngrok-agent.com http \\\n  --oauth google \\\n  --oauth-allow-email kate.libby@gmail.com \\\n  --oauth-allow-domain acme.org\n")),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app-2"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh -R 443:localhost:80 connect.ngrok-agent.com http \\\n  --oauth microsoft \\\n  --oauth-client-id "{client id}" \\\n  --oauth-client-secret "{client secret}"\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes-2"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh -R 443:localhost:80 connect.ngrok-agent.com http \\\n  --oauth github \\\n  --oauth-client-id "{client id}" \\\n  --oauth-client-secret "{client secret}" \\\n  --oauth-scope "repo" \\\n  --oauth-scope "user"\n')),(0,i.kt)("h3",{id:"go-sdk"},"Go SDK"),(0,i.kt)("h6",{id:"authenticate-3"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "net"\n\n    "golang.ngrok.com/ngrok"\n    "golang.ngrok.com/ngrok/config"\n)\n\nfunc listenOAuth(ctx context.Context) net.Listener {\n    listener, _ := ngrok.Listen(ctx,\n        config.HTTPEndpoint(\n            config.WithOAuth("google"),\n        ),\n        ngrok.WithAuthtokenFromEnv(),\n    )\n    return listener\n}\n')),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain-3"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "net"\n\n    "golang.ngrok.com/ngrok"\n    "golang.ngrok.com/ngrok/config"\n)\n\nfunc listenOAuth(ctx context.Context) net.Listener {\n    listener, _ := ngrok.Listen(ctx,\n        config.HTTPEndpoint(\n            config.WithOAuth("google"),\n            config.WithAllowOAuthEmail("kate.libby@gmail.com"),\n            config.WithAllowOAuthDomain("acme.org"),\n        ),\n        ngrok.WithAuthtokenFromEnv(),\n    )\n    return listener\n}\n')),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app-3"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "net"\n\n    "golang.ngrok.com/ngrok"\n    "golang.ngrok.com/ngrok/config"\n)\n\nfunc listenOAuth(ctx context.Context) net.Listener {\n    listener, _ := ngrok.Listen(ctx,\n        config.HTTPEndpoint(\n            config.WithOAuth("microsoft"),\n            config.WithOAuthClientID("{client id}"),\n            config.WithOAuthClientSecret("{client secret}"),\n        ),\n        ngrok.WithAuthtokenFromEnv(),\n    )\n    return listener\n}\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes-3"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "net"\n\n    "golang.ngrok.com/ngrok"\n    "golang.ngrok.com/ngrok/config"\n)\n\nfunc listenOAuth(ctx context.Context) net.Listener {\n    listener, _ := ngrok.Listen(ctx,\n        config.HTTPEndpoint(\n            config.WithOAuth("github"),\n            config.WithOAuthClientID("{client id}"),\n            config.WithOAuthClientSecret("{client secret}"),\n            config.WithOAuthScope("repo", "user"),\n        ),\n        ngrok.WithAuthtokenFromEnv(),\n    )\n    return listener\n}\n')),(0,i.kt)("h3",{id:"rust-sdk"},"Rust SDK"),(0,i.kt)("h6",{id:"authenticate-4"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ngrok::prelude::*;\n\nasync fn start_tunnel() -> anyhow::Result<impl Tunnel> {\n    let sess = ngrok::Session::builder()\n        .authtoken_from_env()\n        .connect()\n        .await?;\n    let tun = sess\n        .http_endpoint()\n        .oauth(OauthOptions::new("google"))\n        .listen()\n        .await?;\n    println!("Listening on URL: {:?}", tun.url());\n    Ok(tun)\n}\n')),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain-4"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ngrok::prelude::*;\n\nasync fn start_tunnel() -> anyhow::Result<impl Tunnel> {\n    let sess = ngrok::Session::builder()\n        .authtoken_from_env()\n        .connect()\n        .await?;\n    let tun = sess\n        .http_endpoint()\n        .oauth(OauthOptions::new("google")\n            .allow_email("kate.libby@gmail.com")\n            .allow_domain("acme.org")\n        )\n        .listen()\n        .await?;\n    println!("Listening on URL: {:?}", tun.url());\n    Ok(tun)\n}\n')),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app-4"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ngrok::prelude::*;\n\nasync fn start_tunnel() -> anyhow::Result<impl Tunnel> {\n    let sess = ngrok::Session::builder()\n        .authtoken_from_env()\n        .connect()\n        .await?;\n    let tun = sess\n        .http_endpoint()\n        .oauth(OauthOptions::new("microsoft")\n            .client_id("{client id}")\n            .client_secret("{client secret}")\n        )\n        .listen()\n        .await?;\n    println!("Listening on URL: {:?}", tun.url());\n    Ok(tun)\n}\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes-4"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use ngrok::prelude::*;\n\nasync fn start_tunnel() -> anyhow::Result<impl Tunnel> {\n    let sess = ngrok::Session::builder()\n        .authtoken_from_env()\n        .connect()\n        .await?;\n    let tun = sess\n        .http_endpoint()\n        .oauth(OauthOptions::new("github")\n            .client_id("{client id}")\n            .client_secret("{client secret}")\n            .scope("repo")\n            .scope("user")\n    )\n        .listen()\n        .await?;\n    println!("Listening on URL: {:?}", tun.url());\n    Ok(tun)\n}\n')),(0,i.kt)("h3",{id:"kubernetes-ingress-controller"},"Kubernetes Ingress Controller"),(0,i.kt)("h6",{id:"authenticate-5"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nkind: NgrokModuleSet\napiVersion: ingress.k8s.ngrok.com/v1alpha1\nmetadata:\n  name: ngrok-module-set\nmodules:\n  oauth:\n    google:\n      optionsPassthrough: false\n      inactivityTimeout: 4h\n      maximumDuration: 24h\n      authCheckInterval: 1h\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    k8s.ngrok.com/modules: ngrok-module-set\nspec:\n  ingressClassName: ngrok\n  rules:\n    - host: your-domain.ngrok.app\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: example-service\n                port:\n                  number: 80\n")),(0,i.kt)("h6",{id:"authenticate--authorize-by-email-and-domain-5"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate + Authorize by email and domain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nkind: NgrokModuleSet\napiVersion: ingress.k8s.ngrok.com/v1alpha1\nmetadata:\n  name: ngrok-module-set\nmodules:\n  oauth:\n    google:\n      emailAddresses: ["kate.libby@gmail.com"]\n      emailDomains: ["acme.org"]\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    k8s.ngrok.com/modules: ngrok-module-set\nspec:\n  ingressClassName: ngrok\n  rules:\n    - host: your-domain.ngrok.app\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: example-service\n                port:\n                  number: 80\n')),(0,i.kt)("h6",{id:"authenticate-with-your-own-oauth-app-5"},(0,i.kt)("strong",{parentName:"h6"},"Authenticate with your own OAuth app")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nkind: Secret\napiVersion: v1\nmetadata:\n  name: ngrok-oauth-secret\ntype: Opaque\ndata:\n  CLIENT_SECRET: "<base64-encoded-client-secret>"\n---\nkind: NgrokModuleSet\napiVersion: ingress.k8s.ngrok.com/v1alpha1\nmetadata:\n  name: ngrok-module-set\nmodules:\n  oauth:\n    microsoft:\n      clientId: "{client id}"\n      clientSecret:\n        name: ngrok-oauth-secret\n        key: CLIENT_SECRET\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    k8s.ngrok.com/modules: ngrok-module-set\nspec:\n  ingressClassName: ngrok\n  rules:\n    - host: your-domain.ngrok.app\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: example-service\n                port:\n                  number: 80\n')),(0,i.kt)("h6",{id:"customize-requested-authentication-scopes-5"},(0,i.kt)("strong",{parentName:"h6"},"Customize requested authentication scopes")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nkind: Secret\napiVersion: v1\nmetadata:\n  name: ngrok-oauth-secret\ntype: Opaque\ndata:\n  CLIENT_SECRET: "<base64-encoded-client-secret>"\n---\nkind: NgrokModuleSet\napiVersion: ingress.k8s.ngrok.com/v1alpha1\nmetadata:\n  name: ngrok-module-set\nmodules:\n  oauth:\n    github:\n      clientId: "{client id}"\n      clientSecret:\n        name: ngrok-oauth-secret\n        key: CLIENT_SECRET\n      scopes: ["repo", "user"]\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: example-ingress\n  annotations:\n    k8s.ngrok.com/modules: ngrok-module-set\nspec:\n  ingressClassName: ngrok\n  rules:\n    - host: your-domain.ngrok.app\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: example-service\n                port:\n                  number: 80\n')),(0,i.kt)("h3",{id:"edges"},"Edges"),(0,i.kt)("p",null,"OAuth is a supported HTTPS Edge module which can be applied to routes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/resources/https-edge-route-oauth-module/"},"OAuth Edge Module API Resource"))),(0,i.kt)("h2",{id:"behavior"},"Behavior"),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"When an unauthenticated request is made to an OAuth-protected endpoint, it\nreturns a redirect response that begins an authentication flow with the\nconfigured identity provider. The original URI path is saved so that users can\nbe redirected to it if they successfully authenticate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If the user fails to authenticate with the identity provider"),", ngrok will\ndisplay an error describing the failure returned by the identity provider and\nprompt them to try logging in again."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"If the user successfully authenticates with the identity provider"),", ngrok\nwill take the following actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check any authorization constraints you've defined (like allowed\nemails or allowed email domains). If the user is not authorized, ngrok renders\nan error and prompts them to try logging in again."),(0,i.kt)("li",{parentName:"ul"},"Sets a ",(0,i.kt)("a",{parentName:"li",href:"#cookies"},"session cookie")," to avoid repeating the authentication flow again."),(0,i.kt)("li",{parentName:"ul"},"Redirects the user to the original URI path they were attempting to access\nbefore the authentication flow began. If no such URI path was captured, they\nare redirected to ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),".")),(0,i.kt)("h3",{id:"continuous-authorization"},"Continuous Authorization"),(0,i.kt)("p",null,"When an authenticated user makes a request, ngrok will sometimes refresh a\nuser's data from the identity provider (email, name, etc) and re-evaluate\nauthorization constraints. This refresh is executed as a backchannel request to\nthe identity provider; it is transparent to the user and they do not go through\na reauthentication flow."),(0,i.kt)("p",null,"The following circumstances trigger refresh and authorization re-evaluation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On a periodic interval defined by the the ",(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Auth Check\nInterval")," parameter."),(0,i.kt)("li",{parentName:"ul"},"If you update the OAuth configuration of the endpoint by restarting your\nagent with a new configuration."),(0,i.kt)("li",{parentName:"ul"},"If you update the OAuth configuration of the endpoint by modifying your Edge.")),(0,i.kt)("p",null,"If a previously authenticated user becomes unauthorized because their identity\nprovider information changed or because the OAuth module configuration changed,\nthey are presented an error and are prompted to try logging in again."),(0,i.kt)("h3",{id:"managed-applications"},"Managed Applications"),(0,i.kt)("p",null,"Managed applications allow you to use ngrok's OAuth module without setting up\nyour own OAuth apps with the identity providers. More practically, this means\nyou can use the OAuth module without configuring a client id and client secret."),(0,i.kt)("p",null,"Managed applications are great for getting started but:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They are ",(0,i.kt)("a",{parentName:"li",href:"#supported-providers"},"only available for some identity providers")),(0,i.kt)("li",{parentName:"ul"},"They come with a ",(0,i.kt)("a",{parentName:"li",href:"#managed-application-limitations"},"number of limitations"))),(0,i.kt)("h3",{id:"app-users"},"App Users"),(0,i.kt)("p",null,"ngrok's ",(0,i.kt)("a",{parentName:"p",href:"/docs/cloud-edge/app-users/"},"App Users")," feature can be used to observe\nall of the authenticated user activity across your account in the ngrok\ndashboard or via API. Whenever a user authenticates or accesses an endpoint\nwith a configured OAuth module, their App User record is created or updated."),(0,i.kt)("p",null,"You may also use App Users to remotely log a user out by ",(0,i.kt)("a",{parentName:"p",href:"https://ngrok.com/docs/cloud-edge/app-users/#revoke-sessions"},"revoking a\nsession"),"."),(0,i.kt)("h3",{id:"cookies"},"Cookies"),(0,i.kt)("p",null,"This module sets two cookies in its operation. Cookies values are opaque to the\nupstream application and must not be modified."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Cookie"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"session")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to track an authenticated user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nonce")),(0,i.kt)("td",{parentName:"tr",align:null},"Used to secure the authentication flow.")))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Provider")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"The identifier of the OAuth identity provider to use for authentication. ",(0,i.kt)("a",{parentName:"td",href:"#supported-providers"},"Supported OAuth Providers"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Client ID")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Your OAuth app's Client ID. Leave this empty if you want to use a managed application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Client Secret")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Your OAuth app's Client Secret. Leave this empty if you want to use a managed application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Allowed Emails")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"If specified, only users whose emails match a value in this list will be allowed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Allowed Email Domains")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"If specified, only users whose emails match one of the given domains in this list will be allowed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Scopes")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A list of additional scopes to request when users authenticate with the identity provider.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Auth Check Interval")),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"When a request is received after this interval has passed since the last auth check or the initial authentication, ngrok will re-validate its authorization constraints. As part of this process, ngrok refreshes data about the authenticated user from the identity provider. If zero, authorization is only ever checked during an authentication flow.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Inactivity Timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"If an authenticated client does not make a request to the endpoint within this duration, they are forced to reauthenticate. If 0, no inactivity timeout is enforced.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Maximum Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"An authenticated client session may never last longer than this duration. If 0, no maximum duration is enforced.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Options Passthrough")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Don't enforce authentication on OPTIONS requests. Useful if this endpoint needs to be accessible via CORS.")))),(0,i.kt)("h3",{id:"upstream-headers"},"Upstream Headers"),(0,i.kt)("p",null,"This module adds headers to the HTTP request sent to your upstream server with\ndetails about the OAuth user who has authenticated. These headers will not be\nset for ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONS")," requests if you enable options passthrough."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Header"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ngrok-auth-user-id")),(0,i.kt)("td",{parentName:"tr",align:null},"Provider-defined identifier of the authorized user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ngrok-auth-user-name")),(0,i.kt)("td",{parentName:"tr",align:null},"Full name of the authorized user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ngrok-auth-user-email")),(0,i.kt)("td",{parentName:"tr",align:null},"Authorized user's primary email address.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ngrok-auth-oauth-access-token")),(0,i.kt)("td",{parentName:"tr",align:null},"The user's OAuth access token. Undefined when using a managed application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ngrok-auth-oauth-refresh-token")),(0,i.kt)("td",{parentName:"tr",align:null},"The user's OAuth refresh token. Undefefined when using a managed application.")))),(0,i.kt)("h3",{id:"special-paths"},"Special Paths"),(0,i.kt)("p",null,"Upstream applications behind endpoints with this module enabled do not receive\nany requests to paths beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/"),". Your application may redirect\nclients to the following paths to invoke different behaviors."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/auth/authn")),(0,i.kt)("td",{parentName:"tr",align:null},"Redirect users to this path to explicitly begin an authentication flow. After authentication, users will be redirected to ",(0,i.kt)("inlineCode",{parentName:"td"},"/"),". If the IdP supports it, ngrok will attempt to instruct the IdP to force reauthentication which will force users to re-enter their credentials with the IdP even if they were already logged in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/auth/logout")),(0,i.kt)("td",{parentName:"tr",align:null},"Logs the user out by clearing their session cookie. Redirect users to this path to log them out.")))),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"When this module is enabled, it populates the following fields in the\n",(0,i.kt)("a",{parentName:"p",href:"/events/reference/#http-request-complete"},"http_request_complete.v0")," event:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Fields"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"oauth.app_client_id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"oauth.decision"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"oauth.user.id"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"oauth.user.name"))))),(0,i.kt)("h3",{id:"errors"},"Errors"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This documentation is incomplete at this time. We're working to improve it with\na full list of errors.")),(0,i.kt)("h3",{id:"limits"},"Limits"),(0,i.kt)("h4",{id:"managed-application-limits"},"Managed Applications"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#managed-applications"},"Managed OAuth applications")," are owned by ngrok and have\nlimitations to prevent abuse."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With a managed oauth application you may not pass custom scopes."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"#upstream-headers"},"upstream headers")," ",(0,i.kt)("inlineCode",{parentName:"li"},"ngrok-auth-oauth-access-token")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"ngrok-auth-oauth-refresh-token")," are not sent to your application.")),(0,i.kt)("h4",{id:"mau-limits"},"MAUs"),(0,i.kt)("p",null,'MAU stands for "Monthly Active User". Monthly Active Users are the number of\nuniquely authenticated OAuth users who have accessed your endpoints within a\nmonth.'),(0,i.kt)("p",null,"OAuth MAU limits are enforced account-wide, they are ",(0,i.kt)("em",{parentName:"p"},"not")," enforced on a\nper-endpoint basis."),(0,i.kt)("p",null,"An authenticated user with the same ID from the identity provider is counted as\na single MAU even if they connect to multiple endpoints on your account."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Plan"),(0,i.kt)("th",{parentName:"tr",align:null},"MAUs"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Free"),(0,i.kt)("td",{parentName:"tr",align:null},"5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Personal"),(0,i.kt)("td",{parentName:"tr",align:null},"50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pro"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlimited, usage-based-pricing")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enterprise"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlimited, usage-based-pricing")))),(0,i.kt)("h3",{id:"supported-providers"},"Supported Providers"),(0,i.kt)("p",null,"ngrok currently supports the following OAuth providers:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Provider"),(0,i.kt)("th",{parentName:"tr",align:null},"Provider Identifier"),(0,i.kt)("th",{parentName:"tr",align:null},"Managed App Available"),(0,i.kt)("th",{parentName:"tr",align:null},"Integration Guide"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Amazon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"amazon")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/amazon/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Facebook"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"facebook")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/facebook/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GitHub"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"github")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/github/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GitLab"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gitlab")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/gitlab/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Google"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"google")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/google/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LinkedIn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linkedin")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/linkedin/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"microsoft")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/microsoft/oauth/"},"Documentation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Twitch"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twitch")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/integrations/twitch/oauth/"},"Documentation"))))),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Consult the ",(0,i.kt)("a",{parentName:"p",href:"#supported-providers"},"step-by-step integration guides")," we've\nwritten for supported providers."))}h.isMDXComponent=!0}}]);