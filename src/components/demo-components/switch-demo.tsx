// components/SwitchDemo.tsx
"use client";

import React from "react";
import { NeuLabel } from "../nm-ui/form-parts/label";
import { NeuSwitch } from "../nm-ui/form-parts/switch";

const SwitchDemo: React.FC = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <NeuLabel htmlFor="airplane-mode-default" className="pr-4">
        Airplane Mode (Default)
      </NeuLabel>
      <NeuSwitch id="airplane-mode-default" variant="default" />
    </div>
    <div className="flex items-center gap-4">
      <NeuLabel htmlFor="airplane-mode-small" className="pr-4">
        Airplane Mode (Small)
      </NeuLabel>
      <NeuSwitch id="airplane-mode-small" variant="small" />
    </div>
    <div className="flex items-center gap-4">
      <NeuLabel htmlFor="airplane-mode-large" className="pr-4">
        Airplane Mode (Large)
      </NeuLabel>
      <NeuSwitch id="airplane-mode-large" variant="large" />
    </div>
  </div>
);

export default SwitchDemo;
