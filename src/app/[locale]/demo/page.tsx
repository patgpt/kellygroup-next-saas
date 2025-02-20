"use client";
// app/[locale]/page.tsx
import { NeuButton } from "@/components/nm-ui/button/button";
import { GalleryCard } from "@/components/nm-ui/card/gallery-card";
import { NeuInput } from "@/components/nm-ui/form-parts/input";
import { NeuSelect } from "@/components/nm-ui/form-parts/select";
import { NeuTextarea } from "@/components/nm-ui/form-parts/textarea";
import { NeuLink } from "@/components/nm-ui/navigation/nav-link";

import AppBarDemo from "@/components/demo-components/appbar-demo";
import AvatarDemo from "@/components/demo-components/avatar-demo";
import CollapsibleDemo from "@/components/demo-components/collapsible";
import DialogueDemo from "@/components/demo-components/dialogue-demo";
import SeparatorDemo from "@/components/demo-components/separator-demo";
import SwitchDemo from "@/components/demo-components/switch-demo";
import {
  NeuForm,
  NeuFormControl,
  NeuFormField,
  NeuFormLabel,
  NeuFormMessage,
  NeuFormSubmit,
} from "@/components/nm-ui/form-parts/form";
import { FooterNav } from "@/components/nm-ui/layout/footer";
import DropdownMenuDemo from "@/components/nm-ui/menu/menu-demo";
import { DesktopNav } from "@/components/nm-ui/navigation/desktop-navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("Navigation");
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);

  return (
    <main className="bg-background dark:bg-background min-h-screen p-6">
      {/* AppBar */}
      <AppBarDemo />
      {/* Switch */}
      <SwitchDemo />
      {/* Gallery */}
      <div className="mx-auto mt-16 max-w-[80rem]">
        <h1 className="text-foreground dark:text-foreground text-emboss-bold mb-8 text-2xl font-medium">
          Typography
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Headings */}
          <GalleryCard
            title="Headings"
            description="Headings are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <div className="flex flex-col gap-2">
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
            </div>
          </GalleryCard>
          {/* Dialogue */}
          <DialogueDemo />
          {/* Paragraph */}
          <GalleryCard
            title="Paragraph"
            description="Paragraphs are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <p>Paragraph</p>
          </GalleryCard>

          {/* Links */}
          <GalleryCard
            title="Links"
            description="Links are used to navigate to other pages. They are used to identify the main sections of a page."
          >
            <div className="flex flex-col gap-4">
              <NeuLink
                href="#"
                variant="desktop"
                shadowVariant="medium"
                textEmbossVariant="bold"
              >
                Desktop Link
              </NeuLink>
              <NeuLink
                href="#"
                variant="footer"
                shadowVariant="soft"
                textEmbossVariant="recessed"
              >
                Footer Link
              </NeuLink>
              <NeuLink
                href="#"
                variant="drawer"
                shadowVariant="medium"
                textEmbossVariant="bold"
              >
                Drawer Link
              </NeuLink>
            </div>
          </GalleryCard>
          {/* Separator */}
          <SeparatorDemo />
          {/* Button */}
          <GalleryCard
            title="Button"
            description="Buttons are used to trigger actions. They are used to identify the main sections of a page."
          >
            <NeuButton shadowVariant="medium" textEmbossVariant="bold">
              Button
            </NeuButton>
          </GalleryCard>

          {/* Input */}
          <GalleryCard
            title="Input"
            description="Inputs are used to collect user input. They are used to identify the main sections of a page."
          >
            <NeuInput
              placeholder="Input"
              shadowVariant="soft"
              textEmbossVariant="soft"
            />
          </GalleryCard>

          {/* Select */}
          <GalleryCard
            title="Select"
            description="Selects are used to collect user input. They are used to identify the main sections of a page."
          >
            <NeuSelect shadowVariant="soft" textEmbossVariant="soft">
              <option>Option 1</option>
              <option>Option 2</option>
            </NeuSelect>
          </GalleryCard>

          {/* Textarea */}
          <GalleryCard
            title="Textarea"
            description="Textareas are used to collect user input. They are used to identify the main sections of a page."
          >
            <NeuTextarea
              placeholder="Textarea"
              shadowVariant="soft"
              textEmbossVariant="soft"
              rows={3}
            />
          </GalleryCard>
          {/* Form */}
          <GalleryCard
            title="Form"
            description="Forms are used to collect user input. They are used to identify the main sections of a page."
          >
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
          </GalleryCard>
          {/* Avatar */}
          <GalleryCard
            title="Avatar"
            description="Avatars are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <AvatarDemo />
          </GalleryCard>
          {/* Menu */}
          <GalleryCard
            title="Menu"
            description="Menus are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <DropdownMenuDemo />
          </GalleryCard>
          {/* List */}
          <GalleryCard
            title="List"
            description="Lists are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <ul>
              <li>List Item 1</li>
              <li>List Item 2</li>
            </ul>
          </GalleryCard>
          {/* Collapsible */}
          <GalleryCard
            title="Collapsible"
            description="Collapsibles are used to structure the content of a page. They are used to identify the main sections of a page."
          >
            <CollapsibleDemo />
          </GalleryCard>
          {/* Blockquote */}
          <GalleryCard
            title="Blockquote"
            description="Blockquotes are used to quote other sources. They are used to identify the main sections of a page."
          >
            <blockquote>Blockquote</blockquote>
          </GalleryCard>

          {/* Code */}
          <GalleryCard
            title="Code"
            description="Codes are used to display code. They are used to identify the main sections of a page."
          >
            <code>Code</code>
          </GalleryCard>

          {/* Pre */}
          <GalleryCard
            title="Pre"
            description="Pre is used to display code. They are used to identify the main sections of a page."
          >
            <pre>Pre</pre>
          </GalleryCard>

          {/* Table */}
          <GalleryCard
            title="Table"
            description="Tables are used to display data. They are used to identify the main sections of a page."
          >
            <table>
              <thead>
                <tr>
                  <th>Header 1</th>
                  <th>Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell 1</td>
                  <td>Cell 2</td>
                </tr>
              </tbody>
            </table>
          </GalleryCard>

          {/* Full Desktop Navigation */}
          <GalleryCard
            title="Desktop Navigation"
            description="Desktop navigation is used to navigate the desktop application. They are used to identify the main sections of a page."
          >
            <DesktopNav />
          </GalleryCard>

          {/* Full Footer Navigation */}
          <GalleryCard
            title="Footer Navigation"
            description="Footer navigation is used to navigate the footer of the application. They are used to identify the main sections of a page."
          >
            <FooterNav />
          </GalleryCard>
        </div>
      </div>
    </main>
  );
}
