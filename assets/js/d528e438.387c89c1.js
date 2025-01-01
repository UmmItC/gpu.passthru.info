"use strict";(self.webpackChunkgpu_passthru_info=self.webpackChunkgpu_passthru_info||[]).push([[822],{888:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"dual-gpu-passthru-desktop/Passthrough-GPU","title":"Passthrough the GPU!","description":"Let passthrough our second GPU now, run the following command in your terminal:","source":"@site/docs/dual-gpu-passthru-desktop/Passthrough-GPU.mdx","sourceDirName":"dual-gpu-passthru-desktop","slug":"/dual-gpu-passthru-desktop/Passthrough-GPU","permalink":"/docs/dual-gpu-passthru-desktop/Passthrough-GPU","draft":false,"unlisted":false,"editUrl":"https://github.com/UmmItC/gpu-passthru/tree/master/docs/dual-gpu-passthru-desktop/Passthrough-GPU.mdx","tags":[],"version":"current","lastUpdatedBy":"UmmIt","lastUpdatedAt":1726204923000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Edit Bootloader Configuration","permalink":"/docs/dual-gpu-passthru-desktop/Bootloader-enable-distro"},"next":{"title":"Installing require Packages","permalink":"/docs/dual-gpu-passthru-desktop/Install-require-packages"}}');var o=i(4848),r=i(8453);const t={sidebar_position:8},l="Passthrough the GPU!",d={},a=[{value:"1.2 Identify IOMMU GPU IDs",id:"12-identify-iommu-gpu-ids",level:2},{value:"Example IDs",id:"example-ids",level:3},{value:"1.3 Embed IDs in Your Bootloader Config",id:"13-embed-ids-in-your-bootloader-config",level:2},{value:"Systemd-boot example",id:"systemd-boot-example",level:3},{value:"GRUB example",id:"grub-example",level:3},{value:"2. Create a <code>vfio.conf</code> File",id:"2-create-a-vfioconf-file",level:2},{value:"3. Update <code>mkinitcpio.conf</code>",id:"3-update-mkinitcpioconf",level:2},{value:"3.2 Regenerate the Image",id:"32-regenerate-the-image",level:2},{value:"4. Verify GPU Passthrough Status",id:"4-verify-gpu-passthrough-status",level:2},{value:"Next Step",id:"next-step",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"passthrough-the-gpu",children:"Passthrough the GPU!"})}),"\n",(0,o.jsx)(n.h1,{id:"explore-iommu-grouping",children:"Explore IOMMU Grouping"}),"\n",(0,o.jsx)(n.p,{children:"Let passthrough our second GPU now, run the following command in your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\nshopt -s nullglob\nfor g in $(find /sys/kernel/iommu_groups/* -maxdepth 0 -type d | sort -V); do\n    echo "IOMMU Group ${g##*/}:"\n    for d in $g/devices/*; do\n        echo -e "\\t$(lspci -nns ${d##*/})"\n    done;\ndone;\n'})}),"\n",(0,o.jsx)(n.p,{children:"This script provides a detailed view of IOMMU groups and their associated devices, helping you understand the connections within your system. This information is vital for configuring device passthrough in virtualization."}),"\n",(0,o.jsx)(n.h2,{id:"12-identify-iommu-gpu-ids",children:"1.2 Identify IOMMU GPU IDs"}),"\n",(0,o.jsxs)(n.p,{children:["The output from the above command will list your GPUs. Your second GPU, the one designated for passthrough, will be included in this list. Note its PCI (Peripheral Component Interconnect) numbers, also known as ",(0,o.jsx)(n.strong,{children:"PCI IDs"}),". These IDs are critical for the upcoming steps."]}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s an example of what you might see:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"IOMMU Group 22:\n\t09:00.0 VGA compatible controller [0300]: Advanced Micro Devices, Inc. [AMD/ATI] Navi 23 [Radeon RX 6600/6600 XT/6600M] [1002:73ff] (rev c7)\nIOMMU Group 23:\n\t09:00.1 Audio device [0403]: Advanced Micro Devices, Inc. [AMD/ATI] Navi 21/23 HDMI/DP Audio Controller [1002:ab28]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example-ids",children:"Example IDs"}),"\n",(0,o.jsx)(n.p,{children:"Suppose your investigation reveals the following GPU IDs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"1002:73ff (GPU)"}),"\n",(0,o.jsxs)(n.li,{children:["1002",":ab28"," (GPU Audio)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Keep these IDs handy, as they are crucial for the next steps."}),"\n",(0,o.jsx)(n.h2,{id:"13-embed-ids-in-your-bootloader-config",children:"1.3 Embed IDs in Your Bootloader Config"}),"\n",(0,o.jsx)(n.p,{children:"Configuring GPU passthrough involves specifying which GPU to allocate to the virtual machine by using its PCI IDs. These IDs pinpoint the GPU within the system, enabling direct hardware access."}),"\n",(0,o.jsx)(n.p,{children:"Add the PCI IDs to your bootloader configuration. If you're using GRUB or another bootloader, include the following in the configuration line where you enabled virtualization:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"vfio-pci.ids=1002:73ff,1002:ab28\n"})}),"\n",(0,o.jsx)(n.h3,{id:"systemd-boot-example",children:"Systemd-boot example"}),"\n",(0,o.jsx)(n.p,{children:"Your updated configuration with systemd-boot should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"title Arch Linux\nlinux /vmlinuz-linux\ninitrd /initramfs-linux.img\noptions root=<root> quiet rw intel_iommu=on iommu=pt vfio-pci.ids=1002:73ff,1002:ab28\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Tips: for user systemd-boot, you do not need to regenerate the config."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"grub-example",children:"GRUB example"}),"\n",(0,o.jsx)(n.p,{children:"Your updated configuration with GRUB should look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'GRUB_CMDLINE_LINUX_DEFAULT="intel_iommu=on iommu=pt vfio-pci.ids=1002:73ff,1002:ab28 ..."\n'})}),"\n",(0,o.jsx)(n.p,{children:"For the GRUB user, you will need to regenerate the config file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo grub-mkconfig -o /boot/grub/grub.cfg\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"2-create-a-vfioconf-file",children:["2. Create a ",(0,o.jsx)(n.code,{children:"vfio.conf"})," File"]}),"\n",(0,o.jsxs)(n.p,{children:["Next, create a new configuration file for ",(0,o.jsx)(n.code,{children:"vfio"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/modprobe.d/vfio.conf\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"options vfio-pci ids=1002:73ff,1002:ab28\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"3-update-mkinitcpioconf",children:["3. Update ",(0,o.jsx)(n.code,{children:"mkinitcpio.conf"})]}),"\n",(0,o.jsxs)(n.p,{children:["Ensure that the necessary ",(0,o.jsx)(n.code,{children:"vfio"})," modules are included in your initial RAM disk. Edit the ",(0,o.jsx)(n.code,{children:"/etc/mkinitcpio.conf"})," file and update the ",(0,o.jsx)(n.code,{children:"MODULES()"})," line:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"MODULES=(vfio_pci vfio vfio_iommu_type1) \n"})}),"\n",(0,o.jsx)(n.h2,{id:"32-regenerate-the-image",children:"3.2 Regenerate the Image"}),"\n",(0,o.jsx)(n.p,{children:"With the configuration updated, rebuild the initial RAM disk and reboot your system:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo mkinitcpio -P # Regenerate all image\nsudo mkinitcpio -p linux # Regenerate image only linux\n"})}),"\n",(0,o.jsx)(n.h2,{id:"4-verify-gpu-passthrough-status",children:"4. Verify GPU Passthrough Status"}),"\n",(0,o.jsx)(n.p,{children:"Now reboot your system and check the status of your GPU. To check if your GPU is correctly configured for passthrough, run"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"lspci -k\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Look at your PCI setup. The ",(0,o.jsx)(n.code,{children:"Kernel driver in use"})," entry should show ",(0,o.jsx)(n.code,{children:"vfio-pci"}),". For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"09:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Navi 23 [Radeon RX 6600/6600 XT/6600M] (rev c7)\n\tSubsystem: Tul Corporation / PowerColor Navi 23 [Radeon RX 6600/6600 XT/6600M]\n\tKernel driver in use: vfio-pci\n\tKernel modules: amdgpu\n09:00.1 Audio device: Advanced Micro Devices, Inc. [AMD/ATI] Navi 21/23 HDMI/DP Audio Controller\n\tSubsystem: Advanced Micro Devices, Inc. [AMD/ATI] Navi 21/23 HDMI/DP Audio Controller\n\tKernel driver in use: vfio-pci\n\tKernel modules: snd_hda_intel\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you see ",(0,o.jsx)(n.code,{children:"vfio-pci"}),", your GPU and GPU Audio are successfully set up for passthrough. If not, review your steps and try again. Success is within reach!"]}),"\n",(0,o.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,o.jsxs)(n.p,{children:["In the next steps, we\u2019ll cover installing the necessary packages, setting up ",(0,o.jsx)(n.code,{children:"libvirt"})," permissions, configuring group memberships, adjusting ",(0,o.jsx)(n.code,{children:"QEMU"})," permissions, and managing the ",(0,o.jsx)(n.code,{children:"libvirt"})," service. Start by installing the required packages for virtualization. Then, configure permissions for ",(0,o.jsx)(n.code,{children:"libvirt"})," to ensure proper management of virtualization resources. You\u2019ll also need to add your user to the relevant groups and set the correct permissions for ",(0,o.jsx)(n.code,{children:"QEMU"}),". Finally, start the ",(0,o.jsx)(n.code,{children:"libvirt"})," service to ensure it runs correctly."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);