import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [particles, setParticles] = useState(true);
  const [intensity, setIntensity] = useState(60);
  return (
    <div className="settings-panel fixed right-6 top-24">
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold">UI Settings</div>
      </div>
      <div className="mt-3">
        <label className="flex items-center gap-2"><input type="checkbox" checked={particles} onChange={()=>setParticles(s=>!s)} /> Particles</label>
        <div className="mt-2">
          <label className="text-sm">Animation intensity</label>
          <input type="range" min={0} max={100} value={intensity} onChange={(e)=>setIntensity(Number(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Settings;
