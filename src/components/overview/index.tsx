"use client";

import {
  FileTextIcon,
  KeyRoundIcon,
  MapPinIcon,
  MarsIcon,
  NonBinaryIcon,
  VenusIcon,
} from "lucide-react";

import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";
import { USER } from "@/portfolio/data/user";
import { User } from "@/portfolio/types/user";

declare global {
  interface Window {
    rybbit?: {
      event: (eventName: string, properties?: Record<string, unknown>) => void;
    };
  }
}

function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.rybbit && typeof window.rybbit.event === "function") {
    window.rybbit.event(eventName, properties);
  } else {
    console.warn("Rybbit tracking not available.");
  }
}

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2.5">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <div className="grid gap-x-12 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon>
              <MapPinIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
                aria-label={`Location: ${USER.address}`}
              >
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {USER.resume && (
            <IntroItem>
              <IntroItemIcon>
                <FileTextIcon />
              </IntroItemIcon>
              <IntroItemContent>
                <IntroItemLink
                  href={USER.resume}
                  aria-label="View Resume"
                  onClick={() => trackEvent("resume_click", { source: "overview" })}
                >
                  Resume
                </IntroItemLink>
              </IntroItemContent>
            </IntroItem>
          )}

          {/* <PhoneItem phoneNumber={USER.phoneNumber} /> */}

          <EmailItem email={USER.email} />

          <IntroItem>
            <IntroItemIcon>
              <KeyRoundIcon />
            </IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                aria-label="secret"
                onClick={() => trackEvent("secret_click", { source: "overview" })}
              >
                secret
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          {/* <IntroItem>
            <IntroItemIcon>{getGenderIcon(USER.gender)}</IntroItemIcon>
            <IntroItemContent aria-label={`Pronouns: ${USER.pronouns}`}>
              {USER.pronouns}
            </IntroItemContent>
          </IntroItem> */}
        </div>
      </PanelContent>
    </Panel>
  );
}

// function getGenderIcon(gender: User["gender"]) {
//   switch (gender) {
//     case "male":
//       return <MarsIcon />;
//     case "female":
//       return <VenusIcon />;
//     case "non-binary":
//       return <NonBinaryIcon />;
//   }
// }
