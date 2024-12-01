"use strict";(self.webpackChunkgpu_passthru_info=self.webpackChunkgpu_passthru_info||[]).push([[171],{9646:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"dual-gpu-passthru-desktop/Download-OS","title":"Downloading the Operating System","description":"This section cover how to download both Windows 10/11 and the Virtio ISO.","source":"@site/docs/dual-gpu-passthru-desktop/Download-OS.mdx","sourceDirName":"dual-gpu-passthru-desktop","slug":"/dual-gpu-passthru-desktop/Download-OS","permalink":"/docs/dual-gpu-passthru-desktop/Download-OS","draft":false,"unlisted":false,"editUrl":"https://github.com/UmmItC/gpu.passthru.info/tree/master/docs/dual-gpu-passthru-desktop/Download-OS.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Configuring Libvirt","permalink":"/docs/dual-gpu-passthru-desktop/Configuring-Libvirt"},"next":{"title":"Setting Up Your Virtual Machine (Windows 10) \u2013 The Final Steps","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-win10"}}');var t=n(4848),i=n(8453);const r={sidebar_position:11},d="Downloading the Operating System",l={},a=[{value:"Visit the Website to Download the ISO",id:"visit-the-website-to-download-the-iso",level:3},{value:"Revision",id:"revision",level:4},{value:"AtlasOS",id:"atlasos",level:4},{value:"Downloading the Virtio ISO",id:"downloading-the-virtio-iso",level:3},{value:"Fastest Way to Download",id:"fastest-way-to-download",level:3},{value:"Next Steps",id:"next-steps",level:2}];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"downloading-the-operating-system",children:"Downloading the Operating System"})}),"\n",(0,t.jsx)(o.p,{children:"This section cover how to download both Windows 10/11 and the Virtio ISO."}),"\n",(0,t.jsx)(o.p,{children:"Keep in mind that Windows 11 has some additional requirements, like TPM (Trusted Platform Module), which makes its setup a bit different."}),"\n",(0,t.jsx)(o.p,{children:"Don\u2019t worry, I\u2019ll guide you through every step, so just follow along."}),"\n",(0,t.jsx)(o.h3,{id:"visit-the-website-to-download-the-iso",children:"Visit the Website to Download the ISO"}),"\n",(0,t.jsx)(o.p,{children:"You can find the Windows ISO files on Microsoft\u2019s official website, should be simple lol."}),"\n",(0,t.jsx)(o.p,{children:"For a more tailored approach, here are a couple of recommended sources:"}),"\n",(0,t.jsx)(o.h4,{id:"revision",children:"Revision"}),"\n",(0,t.jsx)(o.p,{children:"The Revision website offers Windows ISO files and provides a playbook for debloating Windows. Although I won\u2019t go into the debloating process here, you can download the ISO from:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://revi.cc/docs/playbook/installwindows#downloading-the-windows-iso",children:"Revision - Windows ISO Downloads"})}),"\n",(0,t.jsx)(o.h4,{id:"atlasos",children:"AtlasOS"}),"\n",(0,t.jsx)(o.p,{children:"AtlasOS is another excellent option, especially if you\u2019re interested in debloating Windows 10/11. Again, I won\u2019t cover the debloating process here, but you can download the ISO from:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://docs.atlasos.net/getting-started/installation/#1-download-an-iso",children:"AtlasOS - Download ISO"})}),"\n",(0,t.jsx)(o.h3,{id:"downloading-the-virtio-iso",children:"Downloading the Virtio ISO"}),"\n",(0,t.jsx)(o.p,{children:"For better performance with virtual machines, you'll need the Virtio drivers. Download the latest or stable Virtio ISO from the official GitHub repository:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["Visit the ",(0,t.jsx)(o.a,{href:"https://github.com/virtio-win/virtio-win-pkg-scripts/blob/master/README.md",children:"Virtio Win GitHub page"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Download the stable or latest ISO from the provided links in the repository."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"fastest-way-to-download",children:"Fastest Way to Download"}),"\n",(0,t.jsxs)(o.p,{children:["Downloading via a standard browser can be slow because it uses a single thread. To speed up the process, I recommend using ",(0,t.jsx)(o.code,{children:"aria2"}),", a tool that supports multi-threaded downloads. Here\u2019s how to use it:"]}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Install ",(0,t.jsx)(o.code,{children:"aria2"})," with ",(0,t.jsx)(o.code,{children:"pacman"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"sudo pacman -S aria2\n"})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Copy the download link from the website or use your browser\u2019s network monitor (press F12) to grab the URL."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"aria2"})," to download the ISO with multiple threads:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'aria2c -x 16 "paste-your-download-link-here"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,t.jsx)(o.p,{children:"The guide will be split into different sections for Windows 10, Windows 11, and GNU/Linux."}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"For Windows 10:"})," Follow the instructions in the Windows 10 section."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"For Windows 11:"})," Refer to the Windows 11 section."]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"Each section will provide detailed steps for installing the respective operating system. The GNU/Linux installation is straightforward and does not require any additional steps beyond the basics."})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>d});var s=n(6540);const t={},i=s.createContext(t);function r(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);