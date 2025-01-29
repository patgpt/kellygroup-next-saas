import ContactForm from "@/components/forms/ContactForm";
import type { PageParams } from "@/types/common";

const Page = async ({ params }: PageParams) => {
  const { locale } = await params;
  return (
    <div className="container mx-auto max-w-3xl p-8">
      <ContactForm />
    </div>
  );
};

export default Page;
