"use strict";(self.webpackChunkgpu_passthru_info=self.webpackChunkgpu_passthru_info||[]).push([[467],{2432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"virt-manager/backup-qcow2-and-xml","title":"Backup and Restoration QCOW2 and XML Configuration","description":"This guide will walk you through the process of backing up and restoring your virt-manager virtual machines, virsh provides a simple way to backup and restore virtual machines. This is useful for safeguarding your virtual machines against unexpected issues and ensuring that you can recover them quickly when needed.","source":"@site/docs/virt-manager/backup-qcow2-and-xml.mdx","sourceDirName":"virt-manager","slug":"/virt-manager/backup-qcow2-and-xml","permalink":"/docs/virt-manager/backup-qcow2-and-xml","draft":false,"unlisted":false,"editUrl":"https://github.com/UmmItC/gpu-passthru/tree/master/docs/virt-manager/backup-qcow2-and-xml.mdx","tags":[],"version":"current","lastUpdatedBy":"UmmIt","lastUpdatedAt":1735767977000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Storage Path for Libvirt qcow2 Images","permalink":"/docs/virt-manager/storage-path-qcow2-images"},"next":{"title":"Redirect USB Devices Real-Time with Passthrough","permalink":"/docs/virt-manager/usb-redirect"}}');var r=i(4848),s=i(8453);const t={sidebar_position:6},l="Backup and Restoration QCOW2 and XML Configuration",c={},o=[{value:"Backup XML Configuration",id:"backup-xml-configuration",level:2},{value:"Backup qcow2 Disk Image",id:"backup-qcow2-disk-image",level:2},{value:"Restore Backup",id:"restore-backup",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"backup-and-restoration-qcow2-and-xml-configuration",children:"Backup and Restoration QCOW2 and XML Configuration"})}),"\n",(0,r.jsx)(n.p,{children:"This guide will walk you through the process of backing up and restoring your virt-manager virtual machines, virsh provides a simple way to backup and restore virtual machines. This is useful for safeguarding your virtual machines against unexpected issues and ensuring that you can recover them quickly when needed."}),"\n",(0,r.jsx)(n.h2,{id:"backup-xml-configuration",children:"Backup XML Configuration"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Locate the XML configuration files of your virtual machines. These files contain all the essential configuration details."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"/etc/libvirt/qemu/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Identify the name of the virtual machine you want to back up. You can use the following command to list all available virtual machines:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo virsh list --all\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Dump the XML configuration of your chosen virtual machine into a new XML file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo virsh dumpxml vm_name > vm_name.xml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"vm_name"})," with the actual name of your virtual machine."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"backup-qcow2-disk-image",children:"Backup qcow2 Disk Image"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Locate the qcow2 disk image files of your virtual machines. These files contain the actual system files."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"/var/lib/libvirt/images/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the qcow2 disk image file of your chosen virtual machine to your backup location:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo cp /var/lib/libvirt/images/vm_name.qcow2 backup_location/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"vm_name"})," with the name of your virtual machine and ",(0,r.jsx)(n.code,{children:"backup_location"})," with the desired backup directory."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"restore-backup",children:"Restore Backup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Move the backed-up qcow2 disk image file to the original directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo mv backup_location/vm_name.qcow2 /var/lib/libvirt/images/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Move the backed-up XML configuration file to the original directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo mv backup_location/vm_name.xml /etc/libvirt/qemu/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define the virtual machine using the restored XML configuration file, This will register the virtual machine with libvirt, making it available on virt-manager, and then start the virt-manager application will show the restored virtual machine."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo virsh define --file /etc/libvirt/qemu/vm_name.xml\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var a=i(6540);const r={},s=a.createContext(r);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);