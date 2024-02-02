"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[1],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},977:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(4137)),o=["components"],l={title:"Getting started",sidebar_position:2},s=void 0,p={unversionedId:"adguard-home/getting-started",id:"adguard-home/getting-started",title:"Getting started",description:"Installation",source:"@site/docs/adguard-home/getting-started.md",sourceDirName:"adguard-home",slug:"/adguard-home/getting-started",permalink:"/KnowledgeBaseDNS/ko/adguard-home/getting-started",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/adguard-home/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting started",sidebar_position:2},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/ko/adguard-home/overview"},next:{title:"FAQ",permalink:"/KnowledgeBaseDNS/ko/adguard-home/faq"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Official releases",id:"official-releases",level:3},{value:"Notes",id:"notes",level:4},{value:"Docker and Snap",id:"docker-and-snap",level:3},{value:"Other",id:"other",level:3},{value:"First start",id:"first-time",level:2},{value:"Running as a service",id:"service",level:2},{value:"Logs",id:"logs",level:3},{value:"Updating",id:"update",level:2},{value:"Manual update",id:"manual-update",level:3},{value:"Docker, Home Assistant, and Snapcraft updates",id:"docker-home-assistant-and-snapcraft-updates",level:3},{value:"Command-line update",id:"command-line-update",level:3},{value:"Configuring devices",id:"configure-devices",level:2},{value:"Router",id:"router",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Running without superuser",id:"running-without-superuser",level:2},{value:"Granting the necessary capabilities (Linux only)",id:"granting-the-necessary-capabilities-linux-only",level:3},{value:"Changing the DNS listen port",id:"changing-the-dns-listen-port",level:3},{value:"Limitations",id:"limitations",level:2}],m={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"official-releases"},"Official releases"),(0,i.kt)("p",null,"Download the archive with the binary file for your operating system from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/releases/latest"},"latest stable release page"),". The full list of supported platforms as well as links to beta and edge (unstable) releases can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Platforms"},"our platforms page"),"."),(0,i.kt)("p",null,"To install AdGuard Home as a service, extract the archive, enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"AdGuardHome")," directory, and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s install\n")),(0,i.kt)("h4",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Users of ",(0,i.kt)("strong",{parentName:"p"},"Fedora Linux")," and its derivatives: install AdGuard Home in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," directory. Failure to do so may cause issues with SELinux and permissions. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353"},"issue 765")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/3281"},"issue 3281"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Users of ",(0,i.kt)("strong",{parentName:"p"},"macOS 10.15 Catalina")," and newer should place the AdGuard Home working directory inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Applications")," directory."))),(0,i.kt)("h3",{id:"docker-and-snap"},"Docker and Snap"),(0,i.kt)("p",null,"We also provide an ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/adguard/adguardhome"},"official AdGuard Home docker image")," and an ",(0,i.kt)("a",{parentName:"p",href:"https://snapcraft.io/adguard-home"},"official Snap Store package")," for experienced users."),(0,i.kt)("h3",{id:"other"},"Other"),(0,i.kt)("p",null,"Some other unofficial options include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/hassio-addons/addon-adguard-home"},"Home Assistant add-on")," maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/frenck"},"@frenck"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/kongfl888/luci-app-adguardhome"},"OpenWrt LUCI app")," maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kongfl888"},"@kongfl888"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.archlinux.org/"},"Arch Linux"),", ",(0,i.kt)("a",{parentName:"p",href:"https://archlinuxarm.org/"},"Arch Linux ARM"),", and other Arch-based OSs, may build via the ",(0,i.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/adguardhome/"},(0,i.kt)("inlineCode",{parentName:"a"},"adguardhome")," package")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/Arch_User_Repository"},"AUR")," maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graysky2"},"@graysky2"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://git.cloudron.io/cloudron/adguard-home-app"},"Cloudron app")," maintained by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gramakri"},"@gramakri"),"."))),(0,i.kt)("h2",{id:"first-time"},"First start"),(0,i.kt)("p",null,"First of all, check your firewall settings. To install and use AdGuard Home, the following ports and protocols must be available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"3000/TCP for the initial installation;"),(0,i.kt)("li",{parentName:"ul"},"80/TCP for the web interface;"),(0,i.kt)("li",{parentName:"ul"},"53/UDP for the DNS server.")),(0,i.kt)("p",null,"You may need to open additional ports for protocols other than plain DNS, such as DNS-over-HTTPS."),(0,i.kt)("p",null,"DNS servers bind to port 53, which requires superuser privileges most of the time, ",(0,i.kt)("a",{parentName:"p",href:"#running-without-superuser"},"see below"),". Therefore, on Unix systems, you will need to run it with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"doas")," in terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome\n")),(0,i.kt)("p",null,"On Windows, run ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd.exe")," or PowerShell with admin privileges and run ",(0,i.kt)("inlineCode",{parentName:"p"},"AdGuardHome.exe")," from there."),(0,i.kt)("p",null,"When you run AdGuard Home for the first time, it starts listening on ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0:3000")," and prompts you to open it in your browser:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-none"},"AdGuard Home is available at the following addresses:\ngo to http://127.0.0.1:3000\ngo to http://[::1]:3000\n[\u2026]\n")),(0,i.kt)("p",null,"There you will go through the initial configuration wizard."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/install2.png",alt:"AdGuard Home network interface selection screen"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/install3.png",alt:"AdGuard Home user creation screen"})),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ko/adguard-home/running-securely"},"our article on running AdGuard Home securely")," for guidance on how to select the initial configuration that fits you best."),(0,i.kt)("h2",{id:"service"},"Running as a service"),(0,i.kt)("p",null,"The next step would be to register AdGuard Home as a system service (aka daemon). To install AdGuard Home as a service, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome -s install\n")),(0,i.kt)("p",null,"On Windows, run ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd.exe")," with admin privileges and run ",(0,i.kt)("inlineCode",{parentName:"p"},"AdGuardHome.exe -s install")," to register a Windows service."),(0,i.kt)("p",null,"Here are the other commands you might need to control the service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AdGuardHome -s uninstall"),": Uninstall the AdGuard Home service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AdGuardHome -s start"),": Start the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AdGuardHome -s stop"),": Stop the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AdGuardHome -s restart"),": Restart the service."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AdGuardHome -s status"),": Show the current service status.")),(0,i.kt)("h3",{id:"logs"},"Logs"),(0,i.kt)("p",null,"By default, the logs are written to ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," when you run AdGuard Home in a terminal. If you run it as a service, the log output depends on the platform:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On macOS, the log is written to ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log/AdGuardHome.*.log")," files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On other Unixes, the log is written to ",(0,i.kt)("inlineCode",{parentName:"p"},"syslog")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"journald"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"On Windows, the log is written to the Windows event log."))),(0,i.kt)("p",null,"You can change this behavior in the AdGuard Home ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration"},"configuration file"),"."),(0,i.kt)("h2",{id:"update"},"Updating"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/kb/dns/adguard-home/updatenotification.png",alt:"An example of an update notification"})),(0,i.kt)("p",null,"When a new version is released, AdGuard Home\u2019s UI shows a notification message and the ",(0,i.kt)("em",{parentName:"p"},"Update now")," button. Click this button, and AdGuard Home will be automatically updated to the latest version. Your current AdGuard Home executable file is saved inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"backup")," directory along with the current configuration file, so you can revert the changes, if necessary."),(0,i.kt)("h3",{id:"manual-update"},"Manual update"),(0,i.kt)("p",null,"In case the button isn\u2019t shown or an automatic update has failed, you can update manually. We have a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/FAQ#manual-update"},"detailed guide on manual updates"),", but in short:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the new AdGuard Home package.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Extract it to a temporary directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace the old AdGuard Home executable file with the new one.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restart AdGuard Home."))),(0,i.kt)("h3",{id:"docker-home-assistant-and-snapcraft-updates"},"Docker, Home Assistant, and Snapcraft updates"),(0,i.kt)("p",null,"Auto-updates for Docker, Hass.io/Home Assistant, and Snapcraft installations are disabled. Update the image instead."),(0,i.kt)("h3",{id:"command-line-update"},"Command-line update"),(0,i.kt)("p",null,"To update AdGuard Home package without the need to use Web API run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome --update\n")),(0,i.kt)("h2",{id:"configure-devices"},"Configuring devices"),(0,i.kt)("h3",{id:"router"},"Router"),(0,i.kt)("p",null,"This setup will automatically cover all devices connected to your home router, and you won\u2019t need to configure each of them manually."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the preferences for your router. Usually, you can access it from your browser via a URL, such as ",(0,i.kt)("a",{parentName:"p",href:"http://192.168.0.1/"},"http://192.168.0.1/")," or ",(0,i.kt)("a",{parentName:"p",href:"http://192.168.1.1/"},"http://192.168.1.1/"),". You may be prompted to enter a password. If you don\u2019t remember it, you can often reset the password by pressing a button on the router itself, but be aware that if this procedure is chosen, you will probably lose the entire router configuration. If your router requires an app to set it up, please install the app on your phone or PC and use it to access the router\u2019s settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the DHCP/DNS settings. Look for the DNS letters next to a field that allows two or three sets of numbers, each divided into four groups of one to three digits.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter your AdGuard Home server addresses there.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On some router types, a custom DNS server cannot be set up. In that case, setting up AdGuard Home as a DHCP server may help. Otherwise, you should consult your router manual to learn how to customize DNS servers on your specific router model."))),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("em",{parentName:"p"},"Control Panel")," from the Start menu or Windows search.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("em",{parentName:"p"},"Network and Internet")," and then to ",(0,i.kt)("em",{parentName:"p"},"Network and Sharing Center."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left side of the screen, find the ",(0,i.kt)("em",{parentName:"p"},"Change adapter settings")," button and click it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select your active connection, right-click it and choose ",(0,i.kt)("em",{parentName:"p"},"Properties."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find ",(0,i.kt)("em",{parentName:"p"},"Internet Protocol Version 4 (TCP/IPv4)")," (or, for IPv6, ",(0,i.kt)("em",{parentName:"p"},"Internet Protocol Version 6 (TCP/IPv6)"),") in the list, select it, and then click ",(0,i.kt)("em",{parentName:"p"},"Properties")," again.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose ",(0,i.kt)("em",{parentName:"p"},"Use the following DNS server addresses")," and enter your AdGuard Home server addresses."))),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the Apple icon and go to ",(0,i.kt)("em",{parentName:"p"},"System Preferences."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("em",{parentName:"p"},"Network."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the first connection in your list and click ",(0,i.kt)("em",{parentName:"p"},"Advanced."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the DNS tab and enter your AdGuard Home server addresses."))),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Instructions for Android devices may differ depending on the OS version and the manufacturer."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Android menu home screen, tap ",(0,i.kt)("em",{parentName:"p"},"Settings."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tap ",(0,i.kt)("em",{parentName:"p"},"Wi-Fi")," on the menu. The screen with all of the available networks will be displayed (it is impossible to set custom DNS for mobile connection).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Long press the network you\u2019re connected to and tap ",(0,i.kt)("em",{parentName:"p"},"Modify Network."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On some devices, you may need to check the box for ",(0,i.kt)("em",{parentName:"p"},"Advanced")," to see more settings. To adjust your Android DNS settings, you will need to change the IP settings from ",(0,i.kt)("em",{parentName:"p"},"DHCP")," to ",(0,i.kt)("em",{parentName:"p"},"Static."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change set DNS 1 and DNS 2 values to your AdGuard Home server addresses."))),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the home screen, tap ",(0,i.kt)("em",{parentName:"p"},"Settings."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("em",{parentName:"p"},"Wi-Fi")," from the left menu (it is impossible to configure DNS for mobile networks).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tap the name of the currently active network.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("em",{parentName:"p"},"DNS")," field, enter your AdGuard Home server addresses."))),(0,i.kt)("h2",{id:"running-without-superuser"},"Running without superuser"),(0,i.kt)("p",null,"You can run AdGuard Home without superuser privileges, but you must either grant the binary a capability (on Linux) or instruct it to use a different port (all platforms)."),(0,i.kt)("h3",{id:"granting-the-necessary-capabilities-linux-only"},"Granting the necessary capabilities (Linux only)"),(0,i.kt)("p",null,"Using this method requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"setcap")," utility. You may need to install it using your Linux distribution\u2019s package manager."),(0,i.kt)("p",null,"To allow AdGuard Home running on Linux to listen on port 53 without superuser privileges and bind its DNS servers to a particular interface, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo setcap 'CAP_NET_BIND_SERVICE=+eip CAP_NET_RAW=+eip' ./AdGuardHome\n")),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"./AdGuardHome")," as an unprivileged user."),(0,i.kt)("h3",{id:"changing-the-dns-listen-port"},"Changing the DNS listen port"),(0,i.kt)("p",null,"To configure AdGuard Home to listen on a port that does not require superuser privileges, stop AdGuard Home, open ",(0,i.kt)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," in your editor, and find these lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n    # \u2026\n    port: 53\n")),(0,i.kt)("p",null,"You can change the port to anything above 1024 to avoid requiring superuser privileges."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Some file systems don\u2019t support the ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap(2)")," system call required by the statistics system. See also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/1188"},"issue 1188"),"."),(0,i.kt)("p",null,"You can resolve this issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"either by supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"--work-dir DIRECTORY")," arguments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AdGuardHome")," binary. This option will tell AGH to use another directory for all its files instead of the default ",(0,i.kt)("inlineCode",{parentName:"p"},"./data")," directory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"or by creating symbolic links pointing to another file system that supports ",(0,i.kt)("inlineCode",{parentName:"p"},"mmap(2)")," (e.g. tmpfs):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s ${YOUR_AGH_PATH}/data/stats.db /tmp/stats.db\nln -s ${YOUR_AGH_PATH}/data/sessions.db /tmp/sessions.db\n")))))}c.isMDXComponent=!0}}]);