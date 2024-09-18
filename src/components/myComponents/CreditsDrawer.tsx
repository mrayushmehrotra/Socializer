import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

const CreditsDrawer = () => {
  return (
    <div className="text-black hover:text-white flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>API Usage</DrawerTrigger>
        <DrawerContent className="text-white">
          <DrawerHeader className="flex m-5 items-center gap-y-6  justify-center flex-col">
            <DrawerTitle> Usage</DrawerTitle>
            <DrawerDescription>Your API Usage is: 1/5</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose>
              <Button className="bg-white text-black" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreditsDrawer;
