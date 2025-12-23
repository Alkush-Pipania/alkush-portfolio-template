import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { USER } from "@/portfolio/data/user";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  );
}
