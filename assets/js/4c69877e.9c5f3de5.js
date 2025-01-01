"use strict";(self.webpackChunkgpu_passthru_info=self.webpackChunkgpu_passthru_info||[]).push([[436],{1791:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"dual-gpu-passthru-desktop/InstallOS-win10","title":"Setting Up Your Virtual Machine (Windows 10) \u2013 The Final Steps","description":"Well done! You\u2019re almost there. The last crucial steps for setting up your Windows 10 virtual machine.","source":"@site/docs/dual-gpu-passthru-desktop/InstallOS-win10.mdx","sourceDirName":"dual-gpu-passthru-desktop","slug":"/dual-gpu-passthru-desktop/InstallOS-win10","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-win10","draft":false,"unlisted":false,"editUrl":"https://github.com/UmmItC/gpu-passthru/tree/master/docs/dual-gpu-passthru-desktop/InstallOS-win10.mdx","tags":[],"version":"current","lastUpdatedBy":"UmmIt","lastUpdatedAt":1726204923000,"sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Downloading the Operating System","permalink":"/docs/dual-gpu-passthru-desktop/Download-OS"},"next":{"title":"Setting Up Your Virtual Machine (Windows 11) \u2013 The Final Steps","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-win11"}}');var n=i(4848),d=i(8453);const a={sidebar_position:12},o="Setting Up Your Virtual Machine (Windows 10) \u2013 The Final Steps",r={},c=[{value:"1. Launch virt-manager and Create a New VM",id:"1-launch-virt-manager-and-create-a-new-vm",level:3},{value:"1.2 Select Your Windows 10 ISO",id:"12-select-your-windows-10-iso",level:3},{value:"1.3 Choose Your RAM",id:"13-choose-your-ram",level:3},{value:"1.4 Set Disk Image Size",id:"14-set-disk-image-size",level:3},{value:"1.5 Configure VM Settings",id:"15-configure-vm-settings",level:3},{value:"1.6 Select Firmware",id:"16-select-firmware",level:3},{value:"1.7 Set Boot Options",id:"17-set-boot-options",level:3},{value:"1.8 Add VirtIO Disk",id:"18-add-virtio-disk",level:3},{value:"1.9 Add VirtIO ISO",id:"19-add-virtio-iso",level:3},{value:"1.9.1 Confirm Boot Options",id:"191-confirm-boot-options",level:3},{value:"2. Begin Installation",id:"2-begin-installation",level:2},{value:"3. Boot Your System",id:"3-boot-your-system",level:2},{value:"3.2 Exit the UEFI Shell",id:"32-exit-the-uefi-shell",level:3},{value:"3.3 Select Boot Manager",id:"33-select-boot-manager",level:3},{value:"3.4 Select Boot Manager (DVD)",id:"34-select-boot-manager-dvd",level:3},{value:"3.5 Press Any Key Again",id:"35-press-any-key-again",level:3},{value:"4. Windows Setup",id:"4-windows-setup",level:2},{value:"4.2 Install Now",id:"42-install-now",level:3},{value:"4.3 Skip Product Key",id:"43-skip-product-key",level:3},{value:"4.4 Select Version",id:"44-select-version",level:3},{value:"4.5 Accept License Terms",id:"45-accept-license-terms",level:3},{value:"4.6 Custom Installation",id:"46-custom-installation",level:3},{value:"4.7 Load Drivers",id:"47-load-drivers",level:3},{value:"4.8 Browse for Drivers",id:"48-browse-for-drivers",level:3},{value:"4.9 Select Virtio-Win",id:"49-select-virtio-win",level:3},{value:"4.9.1 Red Hat VirtIO SCSI Controller",id:"491-red-hat-virtio-scsi-controller",level:3},{value:"4.9.2 VirtIO Disk",id:"492-virtio-disk",level:3},{value:"4.9.3 Select Installation Disk",id:"493-select-installation-disk",level:3},{value:"4.9.4 Installing Windows",id:"494-installing-windows",level:2},{value:"4.9.5 Windows Configuration",id:"495-windows-configuration",level:3},{value:"4.9.6 Power Off",id:"496-power-off",level:3},{value:"5. Remove ISO from virt-manager",id:"5-remove-iso-from-virt-manager",level:2},{value:"6. Add PCI Devices",id:"6-add-pci-devices",level:2},{value:"7. Update Your VM",id:"7-update-your-vm",level:2},{value:"7.2 Update Drivers",id:"72-update-drivers",level:3},{value:"7.3 Install VirtIO Drivers",id:"73-install-virtio-drivers",level:3},{value:"8. Configure Display Settings",id:"8-configure-display-settings",level:2},{value:"8.2 Passthrough USB and Mouse",id:"82-passthrough-usb-and-mouse",level:3},{value:"8.3 Optimize CPU Configuration",id:"83-optimize-cpu-configuration",level:3},{value:"9. Disable Automatic Suspend",id:"9-disable-automatic-suspend",level:2},{value:"Conclusion: You\u2019re All Set!",id:"conclusion-youre-all-set",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"setting-up-your-virtual-machine-windows-10--the-final-steps",children:"Setting Up Your Virtual Machine (Windows 10) \u2013 The Final Steps"})}),"\n",(0,n.jsx)(s.p,{children:"Well done! You\u2019re almost there. The last crucial steps for setting up your Windows 10 virtual machine."}),"\n",(0,n.jsx)(s.h3,{id:"1-launch-virt-manager-and-create-a-new-vm",children:"1. Launch virt-manager and Create a New VM"}),"\n",(0,n.jsxs)(s.p,{children:["Open up ",(0,n.jsx)(s.code,{children:"virt-manager"})," and start by creating a new virtual machine."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"New VM",src:i(3450).A+"",width:"500",height:"500"})}),"\n",(0,n.jsx)(s.h3,{id:"12-select-your-windows-10-iso",children:"1.2 Select Your Windows 10 ISO"}),"\n",(0,n.jsx)(s.p,{children:"Choose your Windows 10 ISO file."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Select ISO",src:i(6249).A+"",width:"500",height:"500"})}),"\n",(0,n.jsx)(s.h3,{id:"13-choose-your-ram",children:"1.3 Choose Your RAM"}),"\n",(0,n.jsx)(s.p,{children:"Decide on the amount of RAM you want to allocate to your VM."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Select RAM",src:i(9706).A+"",width:"500",height:"500"})}),"\n",(0,n.jsx)(s.h3,{id:"14-set-disk-image-size",children:"1.4 Set Disk Image Size"}),"\n",(0,n.jsxs)(s.p,{children:["Set the size of your virtual machine\u2019s disk. Make sure to check ",(0,n.jsx)(s.code,{children:"Enable storage for this virtual machine."})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Select Disk Size",src:i(6979).A+"",width:"500",height:"500"})}),"\n",(0,n.jsx)(s.h3,{id:"15-configure-vm-settings",children:"1.5 Configure VM Settings"}),"\n",(0,n.jsxs)(s.p,{children:["Give your virtual machine a name and tick the box to ",(0,n.jsx)(s.code,{children:"Customize configuration before install."})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Ready to Install",src:i(3160).A+"",width:"500",height:"500"})}),"\n",(0,n.jsx)(s.h3,{id:"16-select-firmware",children:"1.6 Select Firmware"}),"\n",(0,n.jsxs)(s.p,{children:["Choose ",(0,n.jsx)(s.code,{children:"OVMF_CODE.fd"})," for firmware."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"IMPORTANT"}),": This setting cannot be changed after you begin the installation, so double-check this choice."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Firmware",src:i(9640).A+"",width:"1076",height:"899"})}),"\n",(0,n.jsx)(s.h3,{id:"17-set-boot-options",children:"1.7 Set Boot Options"}),"\n",(0,n.jsxs)(s.p,{children:["Enable the boot menu. Select ",(0,n.jsx)(s.code,{children:"SATA CDROM 1"})," and ensure it is checked. Set it as the first boot device to make sure it detects your Windows 10 installation ISO."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Boot Options",src:i(9930).A+"",width:"1076",height:"899"})}),"\n",(0,n.jsx)(s.h3,{id:"18-add-virtio-disk",children:"1.8 Add VirtIO Disk"}),"\n",(0,n.jsx)(s.p,{children:"After installing Windows, add a VirtIO Disk. we'll use for later."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add VirtIO Disk",src:i(9426).A+"",width:"862",height:"705"})}),"\n",(0,n.jsx)(s.h3,{id:"19-add-virtio-iso",children:"1.9 Add VirtIO ISO"}),"\n",(0,n.jsx)(s.p,{children:"add the VirtIO ISO. This will be essential for smooth operation once Windows is installed."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add VirtIO ISO",src:i(5536).A+"",width:"862",height:"705"})}),"\n",(0,n.jsx)(s.h3,{id:"191-confirm-boot-options",children:"1.9.1 Confirm Boot Options"}),"\n",(0,n.jsx)(s.p,{children:"Verify that your boot options look like the example below."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Boot Options Result",src:i(771).A+"",width:"1076",height:"899"})}),"\n",(0,n.jsx)(s.h2,{id:"2-begin-installation",children:"2. Begin Installation"}),"\n",(0,n.jsxs)(s.p,{children:["Click the ",(0,n.jsx)(s.code,{children:"Begin Installation"})," button to start the process."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Begin Installation",src:i(2225).A+"",width:"1076",height:"899"})}),"\n",(0,n.jsx)(s.h2,{id:"3-boot-your-system",children:"3. Boot Your System"}),"\n",(0,n.jsx)(s.p,{children:"When prompted, press any key to boot from your CD/DVD."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Press Any Key",src:i(4006).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"32-exit-the-uefi-shell",children:"3.2 Exit the UEFI Shell"}),"\n",(0,n.jsxs)(s.p,{children:["If you get stuck in the UEFI Shell, type ",(0,n.jsx)(s.code,{children:"exit"})," and press Enter to move forward."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Exit UEFI Shell",src:i(3241).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"33-select-boot-manager",children:"3.3 Select Boot Manager"}),"\n",(0,n.jsxs)(s.p,{children:["Use the arrow keys to navigate to and select ",(0,n.jsx)(s.code,{children:"Boot Manager"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Boot Manager",src:i(6163).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"34-select-boot-manager-dvd",children:"3.4 Select Boot Manager (DVD)"}),"\n",(0,n.jsx)(s.p,{children:"Choose the first option to boot from the DVD."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Boot Manager Select DVD",src:i(403).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"35-press-any-key-again",children:"3.5 Press Any Key Again"}),"\n",(0,n.jsx)(s.p,{children:"Press any key to continue booting up your system."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Press Any Key Again",src:i(4006).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h2,{id:"4-windows-setup",children:"4. Windows Setup"}),"\n",(0,n.jsxs)(s.p,{children:["Now you\u2019ll see the Windows setup process start. The installation steps are similar to a regular Windows installation. Keep clicking ",(0,n.jsx)(s.code,{children:"Next"})," until you reach the ",(0,n.jsx)(s.code,{children:"Install Windows"})," option."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Windows Setup",src:i(3738).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"42-install-now",children:"4.2 Install Now"}),"\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.code,{children:"Install now"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Install Now",src:i(3911).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"43-skip-product-key",children:"4.3 Skip Product Key"}),"\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.code,{children:"I don\u2019t have a product key"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Skip Product Key",src:i(649).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"44-select-version",children:"4.4 Select Version"}),"\n",(0,n.jsx)(s.p,{children:"Choose the Pro version of Windows. The Pro version supports offline accounts."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Windows Pro",src:i(3292).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"45-accept-license-terms",children:"4.5 Accept License Terms"}),"\n",(0,n.jsx)(s.p,{children:"Tick the box to accept the license terms."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Accept License",src:i(3935).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"46-custom-installation",children:"4.6 Custom Installation"}),"\n",(0,n.jsxs)(s.p,{children:["Select ",(0,n.jsx)(s.code,{children:"Custom"})," installation."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Custom Install",src:i(1558).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"47-load-drivers",children:"4.7 Load Drivers"}),"\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.code,{children:"Load drivers"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Load Drivers",src:i(5619).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"48-browse-for-drivers",children:"4.8 Browse for Drivers"}),"\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.code,{children:"Browse"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Browse Drivers",src:i(517).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"49-select-virtio-win",children:"4.9 Select Virtio-Win"}),"\n",(0,n.jsxs)(s.p,{children:["Choose the path ",(0,n.jsx)(s.code,{children:"E:\\amd64\\w10"})," and click ",(0,n.jsx)(s.code,{children:"OK"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Select Virtio-Win",src:i(1611).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"491-red-hat-virtio-scsi-controller",children:"4.9.1 Red Hat VirtIO SCSI Controller"}),"\n",(0,n.jsxs)(s.p,{children:["Select ",(0,n.jsx)(s.code,{children:"Red Hat VirtIO SCSI controller"})," and click ",(0,n.jsx)(s.code,{children:"Next"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Red Hat VirtIO SCSI",src:i(565).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"492-virtio-disk",children:"4.9.2 VirtIO Disk"}),"\n",(0,n.jsx)(s.p,{children:"You should see the new VirtIO Disk. This disk is crucial for installing new drivers later, so do not delete it."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"VirtIO Disk",src:i(2060).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"493-select-installation-disk",children:"4.9.3 Select Installation Disk"}),"\n",(0,n.jsx)(s.p,{children:"Choose your disk for installing Windows. You can partition it into drives (e.g., 150 GB and 350 GB) as needed."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Select Installation Disk",src:i(912).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h2,{id:"494-installing-windows",children:"4.9.4 Installing Windows"}),"\n",(0,n.jsx)(s.p,{children:"Click to start the installation. This process will take some time."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Installing Windows",src:i(847).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"495-windows-configuration",children:"4.9.5 Windows Configuration"}),"\n",(0,n.jsx)(s.p,{children:"Follow the prompts to complete the Windows setup. You can customize settings or proceed with defaults."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(2439).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(4332).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(7221).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(346).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(9203).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(3448).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(9382).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Windows Configuration",src:i(8399).A+"",width:"1440",height:"1026"})]}),"\n",(0,n.jsx)(s.h3,{id:"496-power-off",children:"4.9.6 Power Off"}),"\n",(0,n.jsx)(s.p,{children:"Once the setup is complete, power off your VM."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Power Off",src:i(4824).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h2,{id:"5-remove-iso-from-virt-manager",children:"5. Remove ISO from virt-manager"}),"\n",(0,n.jsxs)(s.p,{children:["You no longer need the Windows ISO file, so go ahead and remove it from ",(0,n.jsx)(s.code,{children:"virt-manager"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"6-add-pci-devices",children:"6. Add PCI Devices"}),"\n",(0,n.jsx)(s.p,{children:"Back to virt-manger and your virtual machine, add your PCI devices such as GPU, GPU-Audio, and Network, and power on the VM."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Add PCI Devices",src:i(6234).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Add PCI Devices",src:i(7345).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Add PCI Devices",src:i(3480).A+"",width:"1440",height:"1026"})]}),"\n",(0,n.jsx)(s.p,{children:"Once added, power on your VM."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Power On VM",src:i(6744).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h2,{id:"7-update-your-vm",children:"7. Update Your VM"}),"\n",(0,n.jsx)(s.p,{children:"Ensure your system is up-to-date by connecting to the network and running Windows Update."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Update Windows",src:i(998).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.p,{children:"Windows updates can be slow, so be patient lmfao."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Update Windows",src:i(6345).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Update Windows",src:i(592).A+"",width:"1440",height:"1026"})]}),"\n",(0,n.jsx)(s.h3,{id:"72-update-drivers",children:"7.2 Update Drivers"}),"\n",(0,n.jsxs)(s.p,{children:["To update your drivers, open Device Manager, find your PCI device, right-click, and select ",(0,n.jsx)(s.code,{children:"Update Driver"}),"."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Open Device Manager:\n",(0,n.jsx)(s.img,{alt:"Device Manager",src:i(665).A+"",width:"1440",height:"1026"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Right-click on your PCI device and choose ",(0,n.jsx)(s.code,{children:"Update Driver"}),":\n",(0,n.jsx)(s.img,{alt:"Update Drivers",src:i(6400).A+"",width:"1440",height:"1026"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Select ",(0,n.jsx)(s.code,{children:"Browse my computer for drivers"}),":\n",(0,n.jsx)(s.img,{alt:"Browse for Drivers",src:i(1803).A+"",width:"1440",height:"1026"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Browse to the path where your drivers are located (typically ",(0,n.jsx)(s.code,{children:"E:\\"})," or the path where you stored your VirtIO drivers) and click ",(0,n.jsx)(s.code,{children:"Next"}),":\n",(0,n.jsx)(s.img,{alt:"Select Path",src:i(8146).A+"",width:"1440",height:"1026"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You should see your GPU listed in Device Manager, indicating that it\u2019s correctly passthroughed."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"GPU Passthrough",src:i(2610).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"73-install-virtio-drivers",children:"7.3 Install VirtIO Drivers"}),"\n",(0,n.jsx)(s.p,{children:"To improve your VM\u2019s performance, you need to install VirtIO drivers. Follow these steps:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Open File Explorer and navigate to the ",(0,n.jsx)(s.code,{children:"E:\\"})," drive where your VirtIO drivers are located."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"VirtIO Installation",src:i(5334).A+"",width:"469",height:"107"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Find the file ",(0,n.jsx)(s.code,{children:"virtio-win-gt-x64.msi"})," and double-click to start the installation."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Install VirtIO",src:i(3453).A+"",width:"626",height:"443"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Click ",(0,n.jsx)(s.code,{children:"Next"})," to continue with the installation."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Next",src:i(3126).A+"",width:"626",height:"443"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Accept the license agreement and click ",(0,n.jsx)(s.code,{children:"Next"}),"."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Accept License",src:i(6415).A+"",width:"626",height:"443"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Continue clicking ",(0,n.jsx)(s.code,{children:"Next"})," to proceed through the installation steps."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Next",src:i(5088).A+"",width:"626",height:"443"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["You might be prompted for superuser permissions. Click ",(0,n.jsx)(s.code,{children:"Next"})," to grant the necessary permissions."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Superuser Permission",src:i(3209).A+"",width:"626",height:"443"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Wait for the installation to complete."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Complete Installation",src:i(8594).A+"",width:"626",height:"443"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"8-configure-display-settings",children:"8. Configure Display Settings"}),"\n",(0,n.jsx)(s.p,{children:"For optimal performance, use a physical monitor instead of a virtual one. Ensure your second monitor displays your Windows 10 VM."}),"\n",(0,n.jsx)(s.p,{children:"If not displayed, back to your vm and check that the GPU is enabled? if not enabled, on device section right-click to enable the GPU."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Display Settings",src:i(3213).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h3,{id:"82-passthrough-usb-and-mouse",children:"8.2 Passthrough USB and Mouse"}),"\n",(0,n.jsx)(s.p,{children:"To ensure smooth mouse and keyboard input, passthrough these devices to your VM."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"So that's why you might need two mice and a keyboard lol."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Mouse Passthrough",src:i(373).A+"",width:"1440",height:"1026"}),"\n",(0,n.jsx)(s.img,{alt:"Keyboard Passthrough",src:i(575).A+"",width:"1440",height:"1026"})]}),"\n",(0,n.jsx)(s.h3,{id:"83-optimize-cpu-configuration",children:"8.3 Optimize CPU Configuration"}),"\n",(0,n.jsx)(s.p,{children:"For better performance, configure your VM to use physical CPU cores instead of vCPUs."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"CPU Configuration",src:i(2675).A+"",width:"1440",height:"1026"})}),"\n",(0,n.jsx)(s.h2,{id:"9-disable-automatic-suspend",children:"9. Disable Automatic Suspend"}),"\n",(0,n.jsxs)(s.p,{children:["Back to your GNU/Linux, To prevent your VM from being interrupted by idle timeouts, disable the ",(0,n.jsx)(s.code,{children:"When idle"})," Automatic Suspend setting."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Power Setting Idle",src:i(8864).A+"",width:"1580",height:"1031"})}),"\n",(0,n.jsx)(s.h2,{id:"conclusion-youre-all-set",children:"Conclusion: You\u2019re All Set!"}),"\n",(0,n.jsx)(s.p,{children:"Congratulations on setting up your virtual machine with hardware passthrough! You should now be able to use your second monitor and enjoy your VM for various tasks, including gaming."}),"\n",(0,n.jsx)(s.p,{children:"If you run into any graphics issues, make sure to download and install the latest drivers for your GPU from:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.amd.com/en/support",children:"AMD Support"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.nvidia.com/download/index.aspx",children:"NVIDIA Driver Downloads"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1611:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/AMD64-b856b5be22a50cdbf9925268e85f1cac.png"},3935:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Accept_license-92dff50e109790592c7f56d758dd70e9.png"},9426:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Add_VirtIO-1429043701cf200270bb83bd78269dc1.png"},5536:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Add_VirtIO_ISO-b81729c5b55e65ee407dcb3e5b19ad3a.png"},771:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/BO_Look_like_this-e58416fedea8da2ec1bd88f58020c271.png"},2225:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Begin_Installation-d7577501774048309b31bc52585bb9f2.png"},6163:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Boot_manager_1-c590c3b1cc99d1da5470b480f753abb3.png"},403:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Boot_manager_select_DVD-de4ac213c5f568c9474397c47d3c5b6a.png"},9930:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Boot_optinos_1-89e77f0981b1df0b36c60484f741b214.png"},517:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Browse_drivers-91c2e22851d8900796913275e856ea85.png"},1558:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Custom_install-e15520aa8171ccc145a4fe8d2186570e.png"},665:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Device_manager-d7ac13050b0f0e8291ede340b0e4ca68.png"},5334:(e,s,i)=>{i.d(s,{A:()=>t});const t="data:image/png;base64,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"},3453:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E1-ef429edabdca25c067d0eb38d2a93fe3.png"},3126:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E2-a10f2ed46d3983e7b6754bcbe8865c35.png"},6415:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E3-f3ef363a9a9f746974faf97012d6ebbd.png"},5088:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E4-062866c4489f954ad6ef8cf7bcb317ca.png"},3209:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E5-91c71c3d41ae3df586ebc7eac5f83f7f.png"},8594:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/E6-43311c44c19c96dddb6968b496c2bb3c.png"},3241:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Exit_bo-4a245effc68363ded22391ef11d75fd5.png"},9640:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Firmware-d39f76f8d52dbc0ba5cf00d8d5c5e12d.png"},2610:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/GPU-ok-ddc13bc3ba9f37d263a409978c2b0fcb.png"},3911:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Install_now-5fc2394b90d5fa17ded7eac1bec8a60d.png"},575:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Keyboard_passthrough-d57e806d49cb3086bdf7e19d593709f6.png"},5619:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Load_drivers-58306c25f5e6e9e3f6f76d70c2ab73f0.png"},373:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Mouse_passthrough-e1265719a622bd6f7abc1fcd5b7a09c1.png"},3450:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/New VM-2e455d24113996b56f87a45365f9f4bb.png"},6234:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/P1-1817d8a80a96c533c373ffd595903d09.png"},7345:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/P2-63e5f7c6333d31080b508ba7dc3e1d94.png"},3480:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/P3-6622d581546efa3042de6965e329d012.png"},8864:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Power_setting_idle-f03d12a00765e7458a442e97ed55d820.png"},6744:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Poweron_1-af01a284c0cfc683b2e336f37e3b8d3a.png"},4006:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Press_any_key_to_boot_up_system-7209a93c748b9e0bedf71d836d318864.png"},3160:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Ready_to_install-848316dc5a6ec6c7efa43c5b035a0da8.png"},565:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/SCSI-e04255f32d0041c3065c37e08980b8e6.png"},6979:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Select_Disk_Size-7cc7f0f215089f6244b2206e530ee169.png"},6249:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Select_ISO-128b818d9b7b96578327a7504e1a7570.png"},9706:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Select_ram-0eefc4e39cbb90e2dd6e182b84c0bf30.png"},2675:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Speed-up-cpu-b9f5e3a262dd02ee5c7ed0a51b02387d.png"},998:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Update_windows-c5737facaeff1f7f34b2d414d03c467d.png"},6345:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Update_windows_2-504d8a84bc22902d8c0ce99f32f8e771.png"},592:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Update_windows_3-7f9357c5a9f92789ed289a26ced713d7.png"},3213:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/VGA-fe85de75720f72034f70f717d114c00f.png"},2060:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/VirtIO_Disk-2b9e4f3da89b4dbd3f4c1cc145f33c76.png"},3738:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Windows_Setup-a48b0d0224d58bf6dd45274c11a3eb8b.png"},6400:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/drivers_update_1-070dd05649b054ea0853b138faba833d.png"},1803:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/drivers_update_2-438cbce2fa9e5e53559183d93252ea10.png"},8146:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/drivers_update_3-6fb6b92f2a9dc44753528a3407f390dc.png"},649:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/i_dont_have_product_key-6f2e03c31275a819ae575f384f4f17f4.png"},912:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/install_windows_1-020663dae1bc30dfe490c0f98e9aadf4.png"},847:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/iw-b423eecaee179e81fd91bdacbd559198.png"},2439:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w1-04bb0b2bee2c0bbce1978e28c46dac4c.png"},4332:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w2-6bc288381092b394eba1ccc4065c3059.png"},7221:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w3-d6ea204a834a3d38e63d83ef75a9592d.png"},346:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w4-3a046b32f728044f86aa95bd46f494ef.png"},9203:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w5-be1d92e2079ba1d928a08f90158a364e.png"},3448:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w6-541b86a901dee6090a48ac66615a1cdc.png"},9382:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w8-4ea3ccf22e9711b3612523ab01761cc7.png"},8399:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/w9-57813e72bac5b42930bd4be3fca959aa.png"},4824:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/wf-21373d41530d24af97d450d45f059c50.png"},3292:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/windows_Pro-3c49c0f42d96c2387e47f8cdbd7aecf1.png"},8453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var t=i(6540);const n={},d=t.createContext(n);function a(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);