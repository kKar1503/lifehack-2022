import React from "react";
import { useState } from 'react';
import DashboardNavbar from '../layouts/DashboardNavbar';
import DashboardSidebar from '../layouts/DashboardSidebar';



export default function DashNav() {
    const [open, setOpen] = useState(false);

    return (
        // <div><DashboardNavbar onOpenSidebar={() => setOpen(true)} />
        // <DashboardSidebar
        //   isOpenSidebar={open}
        //   onCloseSidebar={() => setOpen(false)}
        // /></div>
      <div>
        <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
          <DashboardSidebar
            isOpenSidebar={open}
            onCloseSidebar={() => setOpen(false)}
          />
      </div>
          
        
    );
}
