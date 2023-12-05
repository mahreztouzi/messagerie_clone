import React from "react";

const Sidebar = () => {
 

  return (
    <div className="w-1/5 shadow mt-12 fixed h-full overflow-y-auto text-base lg:text-sm pb-4 sticky?lg:h-(screen-18) lg:block hidden">
      <div className="inline-flex flex-col space-y-2 items-start justify-between flex-1 h-full px-6 pt-6 pb-12">
        <div>
               <h3>SideBar</h3>
        </div>   
      </div>
    </div>
  );
};

export default Sidebar;
