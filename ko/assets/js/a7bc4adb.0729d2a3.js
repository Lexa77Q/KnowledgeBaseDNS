"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[417],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(4137)),i=["components"],s={title:"Setting up AdGuard Home securely",sidebar_position:4},l=void 0,d={unversionedId:"adguard-home/running-securely",id:"adguard-home/running-securely",title:"Setting up AdGuard Home securely",description:"This page contains a list of additional recommendations to help ensure the security of your AdGuard home.",source:"@site/docs/adguard-home/running-securely.md",sourceDirName:"adguard-home",slug:"/adguard-home/running-securely",permalink:"/KnowledgeBaseDNS/ko/adguard-home/running-securely",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/adguard-home/running-securely.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Setting up AdGuard Home securely",sidebar_position:4},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/KnowledgeBaseDNS/ko/adguard-home/faq"},next:{title:"\uae30\uc220 \uc790\ub8cc \uc5c5\ub370\uc774\ud2b8",permalink:"/KnowledgeBaseDNS/ko/miscellaneous/update-kb"}},c={},u=[{value:"Choosing server addresses",id:"choosing-server-addresses",level:2},{value:"Access settings",id:"access-settings",level:2},{value:"Disabling plain DNS",id:"disabling-plain-dns",level:2},{value:"Plain-DNS ratelimiting",id:"plain-dns-ratelimiting",level:2},{value:"OS service concerns",id:"os-service-concerns",level:2},{value:"Unix (FreeBSD, Linux, macOS, OpenBSD)",id:"unix-freebsd-linux-macos-openbsd",level:3},{value:"Windows",id:"windows",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page contains a list of additional recommendations to help ensure the security of your AdGuard home."),(0,r.kt)("h2",{id:"choosing-server-addresses"},"Choosing server addresses"),(0,r.kt)("p",null,"The first time you start AdGuard Home, you will be asked which interface it should use to serve plain DNS. The most secure and convenient option depends on how you want to run AdGuard Home. You can change the address(es) later, by stopping your AdGuard Home, editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dns.bind_hosts")," field in the configuration file, and restarting AdGuard Home."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The UI currently only allows you to select one interface, but you can actually select multiple addresses through the configuration file. We will be improving the UI in future releases."))),(0,r.kt)("p",null,"If you intend to run AdGuard Home on ",(0,r.kt)("strong",{parentName:"p"},"your computer only,")," select the loopback device (also known as \u201clocalhost\u201d). It is usually called ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lo"),", or something similar and has the address ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,r.kt)("p",null,"If you plan to run AdGuard Home on a ",(0,r.kt)("strong",{parentName:"p"},"router within a small isolated network,")," select the locally-served interface. The names can vary, but they usually contain the words ",(0,r.kt)("inlineCode",{parentName:"p"},"wlan")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wlp")," and have an address starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168."),". You should probably also add the loopback address as well, if you want software on the router itself to use AdGuard Home too."),(0,r.kt)("p",null,"If you intend to run AdGuard Home on a ",(0,r.kt)("strong",{parentName:"p"},"publicly accessible server,")," you\u2019ll probably want to select the ",(0,r.kt)("em",{parentName:"p"},"All interfaces")," option. Note that this may expose your server to DDoS attacks, so please read the sections on access settings and rate limiting below."),(0,r.kt)("h2",{id:"access-settings"},"Access settings"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your AdGuard Home is not accessible from the outside, you can skip this section."))),(0,r.kt)("p",null,"At the bottom of the ",(0,r.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"DNS settings")," page you will find the ",(0,r.kt)("em",{parentName:"p"},"Access settings")," section. These settings allow you to either ban clients that are known to abuse your AdGuard Home instance or to enable the Allowlist mode. The Allowlist mode is recommended for public instances where the number of clients is known and all of the clients are able to use secure DNS."),(0,r.kt)("p",null,"To enable the Allowlist mode, enter ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid"},"ClientIDs")," (recommended) or IP addresses for allowed clients in the ",(0,r.kt)("em",{parentName:"p"},"Allowed clients")," field."),(0,r.kt)("h2",{id:"disabling-plain-dns"},"Disabling plain DNS"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your AdGuard Home is not accessible from the outside, you can skip this section."))),(0,r.kt)("p",null,"If all clients using your AdGuard Home are able to use encrypted protocols, it is a good idea to disable plain DNS or make it inaccessible from the outside."),(0,r.kt)("p",null,"If you want to completely disable plain DNS serving, you can do so on the ",(0,r.kt)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"Encryption settings")," page."),(0,r.kt)("p",null,"If you want to restrict plain DNS to internal use only, stop your AdGuard Home, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"dns.bind_hosts")," field in the configuration file to contain only the loopback address(es), and restart AdGuard Home."),(0,r.kt)("h2",{id:"plain-dns-ratelimiting"},"Plain-DNS ratelimiting"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your AdGuard Home is not accessible from the outside, you can skip this section."))),(0,r.kt)("p",null,"The default plain-DNS ratelimit of 20 should generally be sufficient, but if you have a list of known clients, you can add them to the allowlist and set a stricter ratelimit for other clients."),(0,r.kt)("h2",{id:"os-service-concerns"},"OS service concerns"),(0,r.kt)("p",null,"In order to prevent privilege escalations through binary planting, it is important that the directory where AdGuard Home is installed to has proper ownership and permissions set."),(0,r.kt)("p",null,"We thank Go Compile for assistance in writing this section."),(0,r.kt)("h3",{id:"unix-freebsd-linux-macos-openbsd"},"Unix (FreeBSD, Linux, macOS, OpenBSD)"),(0,r.kt)("p",null,"AdGuard Home working directory, which is by default ",(0,r.kt)("inlineCode",{parentName:"p"},"/Applications/AdGuardHome")," on macOS and ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/AdGuardHome")," on other Unix systems, as well as the binary itself should generally have ",(0,r.kt)("inlineCode",{parentName:"p"},"root:root")," ownership and not be writeable by anyone but ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),". You can check this with the following command, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/AdGuardHome")," with your directory and ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/AdGuardHome/AdGuardHome")," with your binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -d -l /opt/AdGuardHome\nls -l /opt/AdGuardHome/AdGuardHome\n")),(0,r.kt)("p",null,"A reasonably secure output should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-none"},"drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/\n-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome\n")),(0,r.kt)("p",null,"Note the lack of write permission for anyone but ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," ownership. If the permissions and/or ownership are not correct, run the following commands under ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome\nchown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome\n")),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"The principle is the same on Windows: make sure that the AdGuard Home directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\AdGuardHome"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"AdGuardHome.exe")," binary have the permissions that would only allow regular users to read and execute/list them."),(0,r.kt)("p",null,"In the future we plan to release Windows builds as MSI installer files that make sure that this is performed automatically."))}m.isMDXComponent=!0}}]);