import {
  NeuForm,
  NeuFormControl,
  NeuFormField,
  NeuFormLabel,
  NeuFormMessage,
  NeuFormSubmit,
} from "@/components/nm-ui/form-parts/form";
import type { PageParams } from "@/types/common";

const Page = async ({ params }: PageParams) => {
  const { locale } = await params;
  return (
    <div className="container mx-auto max-w-3xl p-8">
      <NeuForm variant="default" className="w-full">
        <NeuFormField name="email" className="mb-6">
          <div className="flex items-baseline justify-between">
            <NeuFormLabel htmlFor="email">Email</NeuFormLabel>
            <NeuFormMessage match="valueMissing">
              Please enter your email
            </NeuFormMessage>
            <NeuFormMessage match="typeMismatch">
              Please provide a valid email
            </NeuFormMessage>
          </div>
          <NeuFormControl>
            <input type="email" id="email" required />
          </NeuFormControl>
        </NeuFormField>
        <NeuFormField name="question" className="mb-6">
          <div className="flex items-baseline justify-between">
            <NeuFormLabel htmlFor="question">Question</NeuFormLabel>
            <NeuFormMessage match="valueMissing">
              Please enter a question
            </NeuFormMessage>
          </div>
          <NeuFormControl asTextarea>
            <textarea id="question" required />
          </NeuFormControl>
        </NeuFormField>
        <NeuFormSubmit>Post question</NeuFormSubmit>
      </NeuForm>
    </div>
  );
};

export default Page;
