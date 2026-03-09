"use client";

import { useState } from "react";
import { FAQ } from "@/types";

export default function FAQBereich({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-gray-900"
          >
            {faq.frage}
            <span className="ml-2 text-gray-400">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-3 text-sm text-gray-600">{faq.antwort}</p>
          )}
        </div>
      ))}
    </div>
  );
}
