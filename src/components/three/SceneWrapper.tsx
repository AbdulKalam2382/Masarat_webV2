import dynamic from "next/dynamic";
import { Suspense } from "react";

const scenes = {
  home:       dynamic(() => import("./scenes/HomeScene"),       { ssr: false }),
  about:      dynamic(() => import("./scenes/AboutScene"),      { ssr: false }),
  contact:    dynamic(() => import("./scenes/ContactScene"),    { ssr: false }),
  solutions:  dynamic(() => import("./scenes/SolutionsScene"),  { ssr: false }),
  cyber:      dynamic(() => import("./scenes/CyberScene"),      { ssr: false }),
  ai:         dynamic(() => import("./scenes/AIScene"),         { ssr: false }),
  dataCenter: dynamic(() => import("./scenes/DataCenterScene"), { ssr: false }),
  elv:        dynamic(() => import("./scenes/ELVScene"),        { ssr: false }),
  digital:    dynamic(() => import("./scenes/SolutionsScene"),  { ssr: false }),
} as const;

type SceneName = keyof typeof scenes;

export default function SceneWrapper({ scene }: { scene: SceneName }) {
  const SceneComponent = scenes[scene];
  return (
    <Suspense fallback={<div className="absolute inset-0 bg-[#0D1B2A]" />}>
      <SceneComponent />
    </Suspense>
  );
}
