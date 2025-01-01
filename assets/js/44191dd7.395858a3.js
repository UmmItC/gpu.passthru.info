"use strict";(self.webpackChunkgpu_passthru_info=self.webpackChunkgpu_passthru_info||[]).push([[877],{6868:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"dual-gpu-passthru-desktop/InstallOS-win11","title":"Setting Up Your Virtual Machine (Windows 11) \u2013 The Final Steps","description":"This guide will walk you through the steps needed to set up a Windows 11 virtual machine on QEMU/KVM. It includes installing necessary packages, configuring the virtual machine, and handling installation steps.","source":"@site/docs/dual-gpu-passthru-desktop/InstallOS-win11.mdx","sourceDirName":"dual-gpu-passthru-desktop","slug":"/dual-gpu-passthru-desktop/InstallOS-win11","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-win11","draft":false,"unlisted":false,"editUrl":"https://github.com/UmmItC/gpu-passthru/tree/master/docs/dual-gpu-passthru-desktop/InstallOS-win11.mdx","tags":[],"version":"current","lastUpdatedBy":"UmmIt","lastUpdatedAt":1726204923000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Setting Up Your Virtual Machine (Windows 10) \u2013 The Final Steps","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-win10"},"next":{"title":"Setting Up Your Virtual Machine (GNU/Linux) \u2013 The Final Steps","permalink":"/docs/dual-gpu-passthru-desktop/InstallOS-GNU-Linux"}}');var t=n(4848),a=n(8453);const d={sidebar_position:13},r="Setting Up Your Virtual Machine (Windows 11) \u2013 The Final Steps",l={},o=[{value:"1. Installing Required Packages",id:"1-installing-required-packages",level:2},{value:"2. Creating a New VM",id:"2-creating-a-new-vm",level:2},{value:"2.1 Opening virt-manager",id:"21-opening-virt-manager",level:3},{value:"2.2 Selecting Installation Media",id:"22-selecting-installation-media",level:3},{value:"2.3 Locating the Windows 11 ISO",id:"23-locating-the-windows-11-iso",level:3},{value:"2.4 Configuring Memory and CPU",id:"24-configuring-memory-and-cpu",level:3},{value:"2.5 Setting Up Storage",id:"25-setting-up-storage",level:3},{value:"2.6 Naming the VM",id:"26-naming-the-vm",level:3},{value:"3. Virt-manager Configuration",id:"3-virt-manager-configuration",level:2},{value:"3.1 Configuring Firmware",id:"31-configuring-firmware",level:3},{value:"3.2 Setting Up CPUs",id:"32-setting-up-cpus",level:3},{value:"3.3 Adding VirtIO Disk",id:"33-adding-virtio-disk",level:3},{value:"3.4 Adding VirtIO ISO",id:"34-adding-virtio-iso",level:3},{value:"3.5 Configuring Boot Options",id:"35-configuring-boot-options",level:3},{value:"3.6 Adding TPM Device",id:"36-adding-tpm-device",level:3},{value:"3.7 Removing NIC",id:"37-removing-nic",level:3},{value:"4. Booting the VM and Installing Windows 11",id:"4-booting-the-vm-and-installing-windows-11",level:2},{value:"4.1 Starting the Installation",id:"41-starting-the-installation",level:3},{value:"4.1.1 Accessing the UEFI Shell",id:"411-accessing-the-uefi-shell",level:4},{value:"4.1.2 Navigating to Boot Manager",id:"412-navigating-to-boot-manager",level:4},{value:"4.1.3 Booting from the Windows 11 ISO",id:"413-booting-from-the-windows-11-iso",level:4},{value:"4.2 Completing Windows Setup",id:"42-completing-windows-setup",level:3},{value:"4.2.1 Selecting Language and Settings",id:"421-selecting-language-and-settings",level:4},{value:"4.2.2 Installing Windows",id:"422-installing-windows",level:4},{value:"4.2.3 Skipping Product Key",id:"423-skipping-product-key",level:4},{value:"4.2.4 Selecting Edition",id:"424-selecting-edition",level:4},{value:"4.2.5 Accepting License Terms",id:"425-accepting-license-terms",level:4},{value:"4.2.6 Choosing Installation Type",id:"426-choosing-installation-type",level:4},{value:"4.2.7 Loading VirtIO Driver",id:"427-loading-virtio-driver",level:4},{value:"4.2.8 Selecting Installation Disk",id:"428-selecting-installation-disk",level:4},{value:"4.2.9 Rebooting During Installation",id:"429-rebooting-during-installation",level:4},{value:"4.3 Bypassing Network Requirements",id:"43-bypassing-network-requirements",level:3},{value:"5. Post-Installation Configuration",id:"5-post-installation-configuration",level:2},{value:"5.1 Power Off the System",id:"51-power-off-the-system",level:3},{value:"5.2 Adding GPU and GPU-Audio Devices",id:"52-adding-gpu-and-gpu-audio-devices",level:3},{value:"5.2.1 Adding the GPU",id:"521-adding-the-gpu",level:4},{value:"5.3.2 Adding GPU-Audio",id:"532-adding-gpu-audio",level:4},{value:"5.4 Reconnecting the Network Interface Card (NIC)",id:"54-reconnecting-the-network-interface-card-nic",level:3},{value:"5.5 Removing the Windows 11 ISO",id:"55-removing-the-windows-11-iso",level:3},{value:"6. Final Configuration and Updates",id:"6-final-configuration-and-updates",level:2},{value:"6.1 Updating Windows 11",id:"61-updating-windows-11",level:3},{value:"6.1.1 Checking for Updates",id:"611-checking-for-updates",level:4},{value:"6.1.2 Handling Update Errors",id:"612-handling-update-errors",level:4},{value:"6.2 Installing VirtIO Drivers",id:"62-installing-virtio-drivers",level:3},{value:"6.2.1 Opening Device Manager",id:"621-opening-device-manager",level:4},{value:"6.2.2 Updating PCI Devices Driver",id:"622-updating-pci-devices-driver",level:4},{value:"6.2.3 Browsing for the VirtIO ISO",id:"623-browsing-for-the-virtio-iso",level:4},{value:"6.3 Installing VirtIO Driver gt",id:"63-installing-virtio-driver-gt",level:3},{value:"6.3.1 Launching the Installer",id:"631-launching-the-installer",level:4},{value:"6.3.2 Installing Guest Tools",id:"632-installing-guest-tools",level:4},{value:"7. Enabling and Installing GPU Drivers",id:"7-enabling-and-installing-gpu-drivers",level:2},{value:"7.1 Enabling AMD GPU",id:"71-enabling-amd-gpu",level:3},{value:"7.1.1 Accessing Device Manager",id:"711-accessing-device-manager",level:4},{value:"7.1.2 Enabling the GPU",id:"712-enabling-the-gpu",level:4},{value:"7.2 Installing GPU Drivers",id:"72-installing-gpu-drivers",level:3},{value:"9. Conclusion",id:"9-conclusion",level:2}];function c(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"setting-up-your-virtual-machine-windows-11--the-final-steps",children:"Setting Up Your Virtual Machine (Windows 11) \u2013 The Final Steps"})}),"\n",(0,t.jsx)(i.p,{children:"This guide will walk you through the steps needed to set up a Windows 11 virtual machine on QEMU/KVM. It includes installing necessary packages, configuring the virtual machine, and handling installation steps."}),"\n",(0,t.jsx)(i.h2,{id:"1-installing-required-packages",children:"1. Installing Required Packages"}),"\n",(0,t.jsx)(i.p,{children:"Windows 11 has a requirement for TPM (Trusted Platform Module). To address this, you need to install the required packages."}),"\n",(0,t.jsxs)(i.p,{children:["Install the ",(0,t.jsx)(i.code,{children:"swtpm"})," package to provide a virtual TPM:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"sudo pacman -S swtpm\n"})}),"\n",(0,t.jsx)(i.h2,{id:"2-creating-a-new-vm",children:"2. Creating a New VM"}),"\n",(0,t.jsx)(i.h3,{id:"21-opening-virt-manager",children:"2.1 Opening virt-manager"}),"\n",(0,t.jsxs)(i.p,{children:["Open virt-manager on your system and click on ",(0,t.jsx)(i.code,{children:"New Virtual Machine"})," to start the creation process."]}),"\n",(0,t.jsx)(i.h3,{id:"22-selecting-installation-media",children:"2.2 Selecting Installation Media"}),"\n",(0,t.jsxs)(i.p,{children:["In the installation method selection screen, choose ",(0,t.jsx)(i.code,{children:"Local install media (ISO image or CDROM)"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Local install media",src:n(3430).A+"",width:"528",height:"566"})}),"\n",(0,t.jsx)(i.h3,{id:"23-locating-the-windows-11-iso",children:"2.3 Locating the Windows 11 ISO"}),"\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.code,{children:"Browse"})," to locate your Windows 11 ISO file and select it from your file system."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Windows ISO",src:n(243).A+"",width:"528",height:"566"})}),"\n",(0,t.jsx)(i.h3,{id:"24-configuring-memory-and-cpu",children:"2.4 Configuring Memory and CPU"}),"\n",(0,t.jsx)(i.p,{children:"Set the amount of memory (RAM) and number of CPU cores according to your requirements."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Memory and CPU",src:n(1244).A+"",width:"528",height:"566"})}),"\n",(0,t.jsx)(i.h3,{id:"25-setting-up-storage",children:"2.5 Setting Up Storage"}),"\n",(0,t.jsx)(i.p,{children:"Configure your storage settings by allocating a virtual hard disk size appropriate for Windows 11."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Enable Storage",src:n(1057).A+"",width:"528",height:"566"})}),"\n",(0,t.jsx)(i.h3,{id:"26-naming-the-vm",children:"2.6 Naming the VM"}),"\n",(0,t.jsxs)(i.p,{children:["Provide a name for your virtual machine and select ",(0,t.jsx)(i.code,{children:"Customize configuration before install"})," to access advanced settings."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Customize Configuration",src:n(3634).A+"",width:"528",height:"566"})}),"\n",(0,t.jsx)(i.h2,{id:"3-virt-manager-configuration",children:"3. Virt-manager Configuration"}),"\n",(0,t.jsx)(i.h3,{id:"31-configuring-firmware",children:"3.1 Configuring Firmware"}),"\n",(0,t.jsxs)(i.p,{children:["In the Overview section, set the ",(0,t.jsx)(i.code,{children:"Firmware"})," to ",(0,t.jsx)(i.code,{children:"UEFI x86_64: /usr/share/edk2/x64/OVMF_CODE.secboot.fd"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"This is crucial as secure boot is required for Windows 11."}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.strong,{children:["IMPORTANT!!! Ensure you are using the correct firmware as the changes cannot be undone after selecting ",(0,t.jsx)(i.code,{children:"Begin installation"}),". If necessary, you will need to recreate the VM."]})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Firmware",src:n(972).A+"",width:"1052",height:"876"})}),"\n",(0,t.jsx)(i.h3,{id:"32-setting-up-cpus",children:"3.2 Setting Up CPUs"}),"\n",(0,t.jsxs)(i.p,{children:["Configure the CPU settings by setting the CPU mode to ",(0,t.jsx)(i.code,{children:"host-passthrough"}),". Enable the option ",(0,t.jsx)(i.code,{children:"Copy host CPU configuration (host-passthrough)"})," and manually set the CPU topology according to your requirements."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"CPU",src:n(2517).A+"",width:"1052",height:"876"})}),"\n",(0,t.jsx)(i.h3,{id:"33-adding-virtio-disk",children:"3.3 Adding VirtIO Disk"}),"\n",(0,t.jsxs)(i.p,{children:["Add a ",(0,t.jsx)(i.code,{children:"VirtIO"})," storage device with a size of ",(0,t.jsx)(i.code,{children:"40GB"}),". Configure this device with the ",(0,t.jsx)(i.code,{children:"VirtIO"})," bus type and set the device type to ",(0,t.jsx)(i.code,{children:"Disk device"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Add VirtIO Disk",src:n(8995).A+"",width:"865",height:"714"})}),"\n",(0,t.jsx)(i.h3,{id:"34-adding-virtio-iso",children:"3.4 Adding VirtIO ISO"}),"\n",(0,t.jsxs)(i.p,{children:["Create a ",(0,t.jsx)(i.code,{children:"VirtIO ISO"})," storage device and set it as a CDROM device. This will be used for installing VirtIO drivers during the Windows setup."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Add VirtIO ISO",src:n(3445).A+"",width:"865",height:"714"})}),"\n",(0,t.jsx)(i.h3,{id:"35-configuring-boot-options",children:"3.5 Configuring Boot Options"}),"\n",(0,t.jsxs)(i.p,{children:["Set the ",(0,t.jsx)(i.code,{children:"SATA CDROM 1"})," as the primary boot device to ensure the VM boots from the Windows 11 ISO."]}),"\n",(0,t.jsx)(i.h3,{id:"36-adding-tpm-device",children:"3.6 Adding TPM Device"}),"\n",(0,t.jsxs)(i.p,{children:["Add a TPM device and configure it to version ",(0,t.jsx)(i.code,{children:"2.0"}),". This is required for Windows 11 installation."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"TPM",src:n(5610).A+"",width:"723",height:"682"})}),"\n",(0,t.jsx)(i.h3,{id:"37-removing-nic",children:"3.7 Removing NIC"}),"\n",(0,t.jsx)(i.p,{children:"Remove the network interface card (NIC) to avoid the Microsoft Account sign-in requirements during the Windows installation. You can reconnect the NIC after the installation."}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Tips: Removing the NIC ensures that the installation does not require online activation, which can be bypassed by using command-line tools to enable offline mode."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"4-booting-the-vm-and-installing-windows-11",children:"4. Booting the VM and Installing Windows 11"}),"\n",(0,t.jsx)(i.h3,{id:"41-starting-the-installation",children:"4.1 Starting the Installation"}),"\n",(0,t.jsxs)(i.p,{children:["To begin the installation process, first click on ",(0,t.jsx)(i.code,{children:"Begin Installation"})," to start your VM. If you miss the ",(0,t.jsx)(i.code,{children:"Press any key"})," prompt that appears when the VM starts, follow these steps:"]}),"\n",(0,t.jsx)(i.h4,{id:"411-accessing-the-uefi-shell",children:"4.1.1 Accessing the UEFI Shell"}),"\n",(0,t.jsxs)(i.p,{children:["Enter the UEFI Shell by pressing the necessary key to open the BIOS menu. Type ",(0,t.jsx)(i.code,{children:"exit"})," to leave the BIOS menu."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Exit BIOS",src:n(4229).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"412-navigating-to-boot-manager",children:"4.1.2 Navigating to Boot Manager"}),"\n",(0,t.jsxs)(i.p,{children:["Use the arrow keys to navigate to ",(0,t.jsx)(i.code,{children:"Boot Manager"})," and select the UEFI DVD-ROM from the list of boot options."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Boot Manager",src:n(9114).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Boot Manager",src:n(3742).A+"",width:"1308",height:"935"})]}),"\n",(0,t.jsx)(i.h4,{id:"413-booting-from-the-windows-11-iso",children:"4.1.3 Booting from the Windows 11 ISO"}),"\n",(0,t.jsx)(i.p,{children:"Press any key to initiate the boot process from the Windows 11 ISO."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Press any key",src:n(6077).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Launch",src:n(7479).A+"",width:"1308",height:"935"})]}),"\n",(0,t.jsx)(i.h3,{id:"42-completing-windows-setup",children:"4.2 Completing Windows Setup"}),"\n",(0,t.jsx)(i.h4,{id:"421-selecting-language-and-settings",children:"4.2.1 Selecting Language and Settings"}),"\n",(0,t.jsxs)(i.p,{children:["On the Windows setup screen, choose your preferred language, time, and keyboard layout. Click ",(0,t.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Setup",src:n(2638).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"422-installing-windows",children:"4.2.2 Installing Windows"}),"\n",(0,t.jsxs)(i.p,{children:["Click ",(0,t.jsx)(i.code,{children:"Install now"})," to start the installation process."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Install Now",src:n(5259).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"423-skipping-product-key",children:"4.2.3 Skipping Product Key"}),"\n",(0,t.jsxs)(i.p,{children:["When prompted for a product key, click ",(0,t.jsx)(i.code,{children:"I Don't have the product key"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Product Key",src:n(4799).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"424-selecting-edition",children:"4.2.4 Selecting Edition"}),"\n",(0,t.jsxs)(i.p,{children:["Choose ",(0,t.jsx)(i.code,{children:"Windows 11 Pro"})," as the edition and click ",(0,t.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Pro Version",src:n(5207).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"425-accepting-license-terms",children:"4.2.5 Accepting License Terms"}),"\n",(0,t.jsx)(i.p,{children:"Accept the license terms to proceed with the installation."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Accept License",src:n(9898).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"426-choosing-installation-type",children:"4.2.6 Choosing Installation Type"}),"\n",(0,t.jsxs)(i.p,{children:["Select ",(0,t.jsx)(i.code,{children:"Custom: Install Windows only (advanced)"})," for a clean installation."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Custom Installation",src:n(8620).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"427-loading-virtio-driver",children:"4.2.7 Loading VirtIO Driver"}),"\n",(0,t.jsxs)(i.p,{children:["To install the required drivers, click ",(0,t.jsx)(i.code,{children:"Load driver"}),", then ",(0,t.jsx)(i.code,{children:"Browse"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Load Driver",src:n(8338).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsxs)(i.p,{children:["Navigate to ",(0,t.jsx)(i.code,{children:"E:\\amd64\\w11"}),", click ",(0,t.jsx)(i.code,{children:"OK"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Select Drivers",src:n(6142).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsxs)(i.p,{children:["select the REDHAT result. Click ",(0,t.jsx)(i.code,{children:"Next"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 REDHAT Driver Next",src:n(526).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.p,{children:"will take a while, just wait."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Waiting for Installation Complete",src:n(1905).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"428-selecting-installation-disk",children:"4.2.8 Selecting Installation Disk"}),"\n",(0,t.jsxs)(i.p,{children:["Choose the disk where you want to install Windows (e.g: ",(0,t.jsx)(i.code,{children:"400GB"}),") and continue with the installation."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Win11 Install Disk",src:n(6940).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Installing",src:n(2546).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Installing Restart",src:n(2462).A+"",width:"1308",height:"935"})]}),"\n",(0,t.jsx)(i.h4,{id:"429-rebooting-during-installation",children:"4.2.9 Rebooting During Installation"}),"\n",(0,t.jsxs)(i.p,{children:["The installation process will reboot several times. During these reboots, ignore any ",(0,t.jsx)(i.code,{children:"Press any key"})," prompts."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Win11 Ignore Press Any Key",src:n(3693).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Installing",src:n(2347).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Loading Installing",src:n(605).A+"",width:"1308",height:"935"})]}),"\n",(0,t.jsx)(i.h3,{id:"43-bypassing-network-requirements",children:"4.3 Bypassing Network Requirements"}),"\n",(0,t.jsxs)(i.p,{children:["When you reach the ",(0,t.jsx)(i.code,{children:"Hi"})," screen, press ",(0,t.jsx)(i.code,{children:"Shift + F10"})," to open the Command Prompt. In the Command Prompt window, type:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cmd",children:"OOBE\\BYPASSNRO\n"})}),"\n",(0,t.jsx)(i.p,{children:"The system will automatically reboot after executing this command."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"OOBE\\BYPASSNRO",src:n(9111).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h2,{id:"5-post-installation-configuration",children:"5. Post-Installation Configuration"}),"\n",(0,t.jsx)(i.p,{children:"Now just install the window in the normal way. Don't worry too much about it being different."}),"\n",(0,t.jsx)(i.h3,{id:"51-power-off-the-system",children:"5.1 Power Off the System"}),"\n",(0,t.jsxs)(i.p,{children:["After completing the Windows 11 installation, you should power off the VM. This is done by using the ",(0,t.jsx)(i.code,{children:"Power off"})," option from the VM\u2019s menu."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Power Off",src:n(9717).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h3,{id:"52-adding-gpu-and-gpu-audio-devices",children:"5.2 Adding GPU and GPU-Audio Devices"}),"\n",(0,t.jsx)(i.h4,{id:"521-adding-the-gpu",children:"5.2.1 Adding the GPU"}),"\n",(0,t.jsx)(i.p,{children:"Add your GPU to the VM configuration. This involves specifying the GPU as a passthrough device in the VM settings."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Add GPU",src:n(854).A+"",width:"1049",height:"713"})}),"\n",(0,t.jsx)(i.h4,{id:"532-adding-gpu-audio",children:"5.3.2 Adding GPU-Audio"}),"\n",(0,t.jsx)(i.p,{children:"Similarly, add your GPU-Audio device. This step ensures that audio functionalities from the GPU are also included in the VM setup."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Add GPU-Audio",src:n(4019).A+"",width:"1049",height:"713"})}),"\n",(0,t.jsx)(i.h3,{id:"54-reconnecting-the-network-interface-card-nic",children:"5.4 Reconnecting the Network Interface Card (NIC)"}),"\n",(0,t.jsx)(i.p,{children:"Since, previously we removed the NIC to avoid Microsoft account sign-in requirements during installation, reconnect it now. This step will restore network connectivity for the VM."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Add NIC",src:n(6350).A+"",width:"1049",height:"713"})}),"\n",(0,t.jsx)(i.h3,{id:"55-removing-the-windows-11-iso",children:"5.5 Removing the Windows 11 ISO"}),"\n",(0,t.jsx)(i.p,{children:"Finally, remove the Windows 11 ISO from the VM\u2019s virtual drives to complete the setup. This ensures that the VM will not boot from the ISO again."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Remove Win11 ISO",src:n(3704).A+"",width:"1289",height:"935"})}),"\n",(0,t.jsx)(i.h2,{id:"6-final-configuration-and-updates",children:"6. Final Configuration and Updates"}),"\n",(0,t.jsx)(i.h3,{id:"61-updating-windows-11",children:"6.1 Updating Windows 11"}),"\n",(0,t.jsx)(i.p,{children:"You need to ensure your Windows 11 system is up to date."}),"\n",(0,t.jsx)(i.h4,{id:"611-checking-for-updates",children:"6.1.1 Checking for Updates"}),"\n",(0,t.jsx)(i.p,{children:"Power on your VM and navigate to the Windows Update settings to check for updates."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Win11 Check for Update",src:n(5890).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"612-handling-update-errors",children:"6.1.2 Handling Update Errors"}),"\n",(0,t.jsx)(i.p,{children:"If you encounter any update errors, allow the system to reboot automatically as it may resolve the issue."}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"That's windows problem, don't worry too much. just force-reboot."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Win11 Update Error",src:n(1128).A+"",width:"1308",height:"935"}),"\n",(0,t.jsx)(i.img,{alt:"Win11 Up to Date",src:n(5890).A+"",width:"1308",height:"935"})]}),"\n",(0,t.jsx)(i.h3,{id:"62-installing-virtio-drivers",children:"6.2 Installing VirtIO Drivers"}),"\n",(0,t.jsx)(i.p,{children:"To ensure optimal performance and functionality, you need to install VirtIO drivers."}),"\n",(0,t.jsx)(i.h4,{id:"621-opening-device-manager",children:"6.2.1 Opening Device Manager"}),"\n",(0,t.jsxs)(i.p,{children:["Open ",(0,t.jsx)(i.code,{children:"Device Manager"})," to begin the process of updating drivers."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Device Manager",src:n(8511).A+"",width:"1308",height:"935"})}),"\n",(0,t.jsx)(i.h4,{id:"622-updating-pci-devices-driver",children:"6.2.2 Updating PCI Devices Driver"}),"\n",(0,t.jsxs)(i.p,{children:["Update the driver for ",(0,t.jsx)(i.code,{children:"PCI Devices"})," by selecting the appropriate option in Device Manager."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Device Manager Update PCI",src:n(654).A+"",width:"1332",height:"958"})}),"\n",(0,t.jsx)(i.h4,{id:"623-browsing-for-the-virtio-iso",children:"6.2.3 Browsing for the VirtIO ISO"}),"\n",(0,t.jsxs)(i.p,{children:["Browse to the location of the ",(0,t.jsx)(i.code,{children:"VirtIO ISO"})," on ",(0,t.jsx)(i.code,{children:"E:\\"})," to locate the necessary drivers."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Device Manager Search Driver",src:n(528).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Device Manager Search E Driver",src:n(6161).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Device Manager Searching E",src:n(2077).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Device Manager Loaded",src:n(9653).A+"",width:"1332",height:"958"})]}),"\n",(0,t.jsx)(i.h3,{id:"63-installing-virtio-driver-gt",children:"6.3 Installing VirtIO Driver gt"}),"\n",(0,t.jsx)(i.h4,{id:"631-launching-the-installer",children:"6.3.1 Launching the Installer"}),"\n",(0,t.jsxs)(i.p,{children:["Open ",(0,t.jsx)(i.code,{children:"Explorer"}),", navigate to the ",(0,t.jsx)(i.code,{children:"VirtIO"})," folder, and start the installation of ",(0,t.jsx)(i.code,{children:"virtio-win-gt-x64.msi"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64",src:n(3621).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Next",src:n(1075).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"License VirtIO",src:n(1663).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Select",src:n(3468).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Install",src:n(2171).A+"",width:"1332",height:"958"})]}),"\n",(0,t.jsx)(i.p,{children:"Grant any necessary superuser permissions to complete the installation."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Permission",src:n(7579).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Installing",src:n(9979).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Finish",src:n(5661).A+"",width:"1332",height:"958"})]}),"\n",(0,t.jsx)(i.h4,{id:"632-installing-guest-tools",children:"6.3.2 Installing Guest Tools"}),"\n",(0,t.jsx)(i.p,{children:"Finally, install the guest tools to enhance the VM\u2019s performance and integration."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Guest Tool",src:n(4559).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Guest Tool Install",src:n(9061).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Guest Tool Install Yes",src:n(2387).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Guest Tool Installing",src:n(6713).A+"",width:"1332",height:"958"}),"\n",(0,t.jsx)(i.img,{alt:"Explorer E VirtIO Win X64 Guest Tool Success",src:n(4648).A+"",width:"1076",height:"926"})]}),"\n",(0,t.jsx)(i.h2,{id:"7-enabling-and-installing-gpu-drivers",children:"7. Enabling and Installing GPU Drivers"}),"\n",(0,t.jsx)(i.h3,{id:"71-enabling-amd-gpu",children:"7.1 Enabling AMD GPU"}),"\n",(0,t.jsx)(i.p,{children:"For windows 11, you need to manually enable the GPU utilize it for your VM."}),"\n",(0,t.jsx)(i.h4,{id:"711-accessing-device-manager",children:"7.1.1 Accessing Device Manager"}),"\n",(0,t.jsxs)(i.p,{children:["Back to the ",(0,t.jsx)(i.code,{children:"Device Manager"})," on your Windows 11 VM."]}),"\n",(0,t.jsx)(i.h4,{id:"712-enabling-the-gpu",children:"7.1.2 Enabling the GPU"}),"\n",(0,t.jsxs)(i.p,{children:["Locate your GPU under the ",(0,t.jsx)(i.code,{children:"Display adapters"})," section, right-click it, and select ",(0,t.jsx)(i.code,{children:"Enable"})," to activate the GPU."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Enable GPU",src:n(2743).A+"",width:"1332",height:"958"})}),"\n",(0,t.jsx)(i.h3,{id:"72-installing-gpu-drivers",children:"7.2 Installing GPU Drivers"}),"\n",(0,t.jsx)(i.p,{children:"To ensure your GPU functions correctly, you need to install the appropriate drivers, Since it's windows LOL"}),"\n",(0,t.jsx)(i.p,{children:"Visit your GPU manufacturer\u2019s website (AMD, Nvidia, or Intel) to download the latest drivers for your GPU."}),"\n",(0,t.jsx)(i.h2,{id:"9-conclusion",children:"9. Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! You have successfully set up Windows 11 on a QEMU/KVM virtual machine, including configuring a virtual TPM and GPU. Explore and enjoy the features of Windows 11"})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3430:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/1of5-f01d869e730ee60b6464c58f58d8877a.png"},243:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/2of5-5afa058bb09078d3900b20d9e76bf376.png"},1244:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/3of5-b64af35a62efa48dcd8b493e8a4d42f6.png"},1057:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/4of5-f9ab2e0164a150a8c8feab5b7b5a1792.png"},3634:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/5of5-d778858ce34249f159e08f9de1f3ad6b.png"},8511:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-Device-manger-0f1cfa00e776cf63d9a3c6005e7e5bfc.png"},528:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-device-manager-search-driver-3c8bcebf6a95644759cc66b28cc9e112.png"},2077:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-device-manager-searching-e-88d78ef6593f1e7fdcfb99a369a3c79c.png"},9653:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-device-manger-loaded-bc024976f266c20de616a029317f7971.png"},6161:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-device-manger-search-e-driver-a2aa0898b66413a59c92423d133d85ab.png"},654:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-device-manger-update-pci-cee3e1007b9deec686ed9e328ff3f943.png"},5661:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-finish-add4451c1ff8f5c09d2a1f0ec82ed1d1.png"},2387:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-guest-tool-install-yes-37a217acf03d44645e479a299ba50fc2.png"},9061:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-guest-tool-install-88c8493b84fc4f3c69ec44026211ece9.png"},6713:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-guest-tool-installing-86f204273ad9cab27db0851c7c1412c0.png"},4648:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-guest-tool-sucess-73ec106b6e40ea7d24c50b86fa97743b.png"},4559:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-guest-tool-c28e8458298f78ce09f81faf742c7e8a.png"},2171:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-install-592281bc78d49d33d082fa1f507a3a04.png"},9979:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-installing-2aa4834e2541b6a4f8899f297f8c2f8f.png"},1663:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-license-a4d32db6d98dd77bfbe6322e2e261185.png"},1075:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-next-38667cb53214f8278db3e492da82c66f.png"},7579:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-premission-35834bf669a36c1dba5f3fccacb41285.png"},3468:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-select-6e7e09bef3981ffa4deafa26ca4aa8c0.png"},3621:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/explorer-e-virt-win-x64-e6801e1de26f08f3faffb4a3f7efb4c8.png"},2517:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/CPU Select-8672286e11d0c4c5878a2b9a95cd0395.png"},972:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Firmware-94f0d0a32004b75064db55a2145ac238.png"},8995:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/VirtIO Disk-75e394b413011c4a3ff4eec5674bc21f.png"},3445:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/VirtIO iso-aefcd12bdaac4f2755e03f0364a091ee.png"},5610:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/tls-tpm-e6d777aa86516abf3f9bba622b3748ba.png"},9114:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Boot-manger-exit-241408c938b1349b3e4929a4979ebf6f.png"},7479:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Loading-one-612c2c030f5ab88dbbbf8446830fdbf4.png"},6077:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/Pressanykey-one-c597314c3ea653898fe215b7657e195d.png"},3742:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/boot-manager-exit-2-c52b2dc539cb0dba0d8c166b42de9c60.png"},4229:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/exit bios-af89a1489fbfe301e08e8f029b82145c.png"},1905:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-REDHAT-driver-load-cd13d661aca4e354b8bd38d00fa6f100.png"},6142:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-amd64-win11-c3a73fcf27a6ac8ba7ce56e2aae5bdd3.png"},8620:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-custom-disk-5a1f18a7d45ce96a4b038983cb19d4f7.png"},526:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-driver-RedHAT-999e1e5c5867fe603358b9dc7dddf5b5.png"},9898:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-i-accpect-license-758c2e39d6bfac6a798f8d6c7b5b0a54.png"},4799:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-i-dont-have-product-key-51ea857c339fffb470d19ca37427ee4e.png"},3693:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-ignore-installing-9b49720d78d9fe689c953926d2cfe5ce.png"},5259:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-install-now-0a280c24c226f13675cd34ffe8f65dcb.png"},6940:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-install-726246e7fa52c93e9f3a0907aa428ec7.png"},2347:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-installing-2-904f68074edadfa4c001a46b4b22a6e7.png"},2546:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-installing-e3e86b43c2f3757993f36d25c1a1f311.png"},8338:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-load-driver-86c302b92fff316ea1987255bf7559eb.png"},605:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-loading-d31c30b5c3d59321016de01c4de3b944.png"},2462:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-restarting-8a87200b106ab9bfea97ffa0f4576f92.png"},5207:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-select-pro-6323b6114caf84d9c18e7ec207310d49.png"},2638:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-fb51a9ed9f3351790f62982cf0372e74.png"},9111:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-bypassnro-6edc8352c64495b16c4d3d345b9259d8.png"},9717:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/poweroff-7db46f3552c37495a5e6cf18754d2754.png"},4019:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-add-gpu-audio-751a671ad8156efa3ca6d134fd1cb6dd.png"},854:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-add-gpu-28324ce9f38b93ac9e4a19aa9ac30715.png"},6350:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-add-nic-948a0cd9d22e68469eb92d424394cc03.png"},3704:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-remove-iso-987cc849c81a7838732623d782221b08.png"},1128:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-error-f35d1e25fe19ee9f9022732e4503e512.png"},5890:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/w11-makesure-uptodated-d39aa5d92b84274067984f2272df6f29.png"},2743:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/enable-amd-driver-a8cbdb4f783bc4bd152da44fd82bd7db.png"},8453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>r});var s=n(6540);const t={},a=s.createContext(t);function d(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);