import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { AssessmentFlow } from "@/components/assessment/assessment-flow";

export default function AssessmentPage() {
  return (
    <AppShell
      title="Sustainability Assessment"
      description="A fast, calm walkthrough of the habits that most influence your lifestyle impact."
      actions={
        <Link
          href="/results"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
        >
          View saved results
        </Link>
      }
    >
      <AssessmentFlow />
    </AppShell>
  );
}
