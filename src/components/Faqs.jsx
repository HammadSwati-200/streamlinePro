"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    question: "What is StreamlinePro?",
    answer:
      "StreamlinePro is a comprehensive workflow management tool designed to optimize your business operations.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Our free trial allows you to use all the features of StreamlinePro for 14 days with no obligation. After the trial, you can choose a subscription plan.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. You will not be charged for the subsequent billing period if you cancel before the next billing cycle.",
  },
  {
    question: "Are there any setup fees?",
    answer:
      "No, there are no setup fees. You only pay for the subscription plan you choose.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@streamlinepro.com or through the live chat feature on our website.",
  },
];

const FAQs = () => {
  return (
    <section className="py-16" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-10">
          Frequently Asked <span className="text-red-500">Questions </span>
        </h2>
        <div className="space-y-4">
          {/* Accordion */}
          {faqsData.map((faq, index) => (
            <Accordion type="single" key={index} collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
