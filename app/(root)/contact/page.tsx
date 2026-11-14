import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <ContactForm />
        <p className="text-sm text-muted-foreground">
          Prefer a quick overview?{" "}
          <a
            href="/resume.pdf"
            download="CV Suryo Hastomo 2026.pdf"
            className="text-primary underline underline-offset-4"
          >
            Download my resume (PDF)
          </a>
          .
        </p>
      </div>
    </PageContainer>
  );
}
