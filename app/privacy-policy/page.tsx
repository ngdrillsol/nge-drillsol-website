import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NGE Drillsol",
  description: "How NGE Drillsol handles website information, sales enquiries and privacy requests.",
  robots: { index: true, follow: true },
};

type PolicyBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] };

type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks: PolicyBlock[];
};

const sections: PolicySection[] = [
  {
    "id": "section-1",
    "number": "1",
    "title": "Introduction and scope",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "NGE Drillsol Private Limited (\"NGE Drillsol\", \"we\", \"us\" or \"our\") operates www.ngedrill.com and supplies drilling rigs, drilling equipment and related services. This Privacy Policy explains what personal information we receive, why we use it, the services involved in handling it, and how you can contact us about your information."
      },
      {
        "kind": "paragraph",
        "text": "This policy covers visitors to our website and people who make sales enquiries through its enquiry facilities, WhatsApp or telephone. It also covers our handling of information you provide when responding to our advertisements and beginning a sales discussion with us."
      },
      {
        "kind": "paragraph",
        "text": "The website currently serves sales enquiries. It does not offer customer account registration or online payment collection. If a subsequent order, recruitment process or other business relationship requires additional information, we will provide further privacy information where appropriate. This policy is not a substitute for the commercial terms of a quotation or purchase contract."
      },
      {
        "kind": "paragraph",
        "text": "“Personal information” means information that identifies a person, or can reasonably be linked to an identifiable person. Business contact information can be personal information even when used in a professional capacity."
      }
    ]
  },
  {
    "id": "section-2",
    "number": "2",
    "title": "Company responsible for your information",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "**Legal name:** NGE Drillsol Private Limited\n**Business address:** Sr. No. 553, Opp. Guru 308, Bypass Highway, Gilosan, Mehsana, Gujarat 384002, India\n**GSTIN:** 24AAGCN4440G1ZP\n**Website:** https://www.ngedrill.com"
      },
      {
        "kind": "paragraph",
        "text": "NGE Drillsol is responsible for the purposes for which it uses personal information covered by this policy. Mr. Kuldeep, Director, is the designated company contact for privacy questions and complaints. His contact details are in section 17."
      }
    ]
  },
  {
    "id": "section-3",
    "number": "3",
    "title": "Information you provide to us",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Depending on your enquiry and what you choose to share, we may receive:"
      },
      {
        "kind": "table",
        "headers": [
          "Category",
          "Examples",
          "Relevance to an enquiry"
        ],
        "rows": [
          [
            "Identity and business details",
            "Name, company name, professional role",
            "Identifying the person or business making the enquiry"
          ],
          [
            "Contact details",
            "Telephone number, WhatsApp number, email address",
            "Responding to questions and sending requested information"
          ],
          [
            "Location",
            "Country, city or project location",
            "Understanding delivery needs and the location of proposed work"
          ],
          [
            "Technical requirements",
            "Drilling depth, bore diameter, formation details, drilling method, rig preference",
            "Assessing which equipment or service may be suitable"
          ],
          [
            "Communications",
            "WhatsApp messages, information discussed by telephone, related enquiry notes and quotation correspondence",
            "Maintaining context and responding accurately"
          ],
          [
            "Privacy requests",
            "Contact information and the details of a correction, deletion or complaint request",
            "Locating the relevant records and addressing the request"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "Project information is personal information when it identifies, or is linked to, a person. We do not need unrelated personal details to discuss equipment requirements."
      },
      {
        "kind": "paragraph",
        "text": "Please avoid sending payment-card information, Aadhaar or passport copies, medical information or other sensitive personal information in an initial sales enquiry. If a later transaction requires particular documentation, we will explain its purpose and appropriate submission method separately."
      },
      {
        "kind": "paragraph",
        "text": "If you provide a colleague's contact details, ensure you are authorised to do so and make this policy available to them. Providing someone else's details does not automatically authorise promotional contact with that person."
      }
    ]
  },
  {
    "id": "section-4",
    "number": "4",
    "title": "Information associated with website visits",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We use Google Analytics to understand use of the website. Depending on the deployed configuration, this can involve device and browser information, approximate location, referral source, pages viewed, visit timing and interactions with website features. Cookies or similar identifiers may help distinguish visits and understand browsing activity."
      },
      {
        "kind": "paragraph",
        "text": "These records can be personal information even when they do not include a name. Aggregated reports can help us identify popular equipment pages and areas of the website that need improvement."
      }
    ]
  },
  {
    "id": "section-5",
    "number": "5",
    "title": "How we receive and handle enquiries",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Our sales communication channels are WhatsApp and telephone. When you contact us, we use the information you provide to understand the enquiry and arrange an appropriate response."
      },
      {
        "kind": "paragraph",
        "text": "WhatsApp messages are handled using the WhatsApp service. Telephone discussions may result in contact records and enquiry notes. When your enquiry refers to an existing quotation or earlier discussion, relevant information may be associated with that enquiry so our response is consistent."
      },
      {
        "kind": "paragraph",
        "text": "Sending a WhatsApp message also involves processing by WhatsApp under its own terms and privacy policy. Our responsibilities concern how NGE receives and uses the information; the platform separately describes its own processing."
      }
    ]
  },
  {
    "id": "section-6",
    "number": "6",
    "title": "Purposes for which we use information",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We use relevant information for the following purposes:"
      },
      {
        "kind": "list",
        "items": [
          "**Responding to requests:** answering questions about equipment, availability, specifications and services.",
          "**Understanding requirements:** reviewing the drilling application, depth, diameter and location information supplied to us.",
          "**Preparing quotations:** providing requested commercial and technical information and clarifying requirements.",
          "**Related follow-up:** continuing the discussion you initiated and checking whether requested information has addressed your enquiry.",
          "**Website measurement:** understanding visitor activity and improving the usefulness of our website.",
          "**Advertising:** promoting our products through Google Ads and Meta platforms and assessing campaign results using the information available through our configured services.",
          "**Privacy and security administration:** addressing privacy requests, investigating reported misuse and protecting business communications.",
          "**Legal matters:** retaining or disclosing relevant records where a legal requirement applies or where needed to establish, exercise or defend legal claims."
        ]
      },
      {
        "kind": "paragraph",
        "text": "An enquiry is not permission for every future use of your information. If we propose a materially different use, we will provide appropriate information and obtain any consent required before proceeding."
      }
    ]
  },
  {
    "id": "section-7",
    "number": "7",
    "title": "Consent and other legal grounds",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The legal grounds available for processing depend on the applicable law and the specific activity. This policy does not treat continued browsing as blanket consent."
      },
      {
        "kind": "paragraph",
        "text": "Where we rely on consent, it will be specific to its purpose and capable of being withdrawn. We will keep optional marketing or tracking choices separate from your request for a quotation."
      },
      {
        "kind": "paragraph",
        "text": "Where the EU or UK GDPR applies, the purposes and relevant grounds are:"
      },
      {
        "kind": "table",
        "headers": [
          "Purpose",
          "Legal ground, where applicable"
        ],
        "rows": [
          [
            "A quotation or pre-contract steps requested by an individual purchasing in their own capacity",
            "Necessary steps at that individual's request before entering a contract"
          ],
          [
            "Handling an enquiry from a representative of a company",
            "Legitimate interests in answering business enquiries, after assessing the impact on the individual"
          ],
          [
            "Optional tracking or promotional communications requiring consent",
            "Consent"
          ],
          [
            "Required legal record-keeping or disclosures",
            "Compliance with the relevant legal obligation"
          ],
          [
            "Necessary security or legal-claim administration",
            "A relevant legal obligation or assessed legitimate interest, as appropriate"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "These grounds are not interchangeable. A company's contract does not automatically provide a contractual ground for processing every employee's information. A legitimate-interest ground is used only where the relevant law recognises it and the necessary assessment supports it."
      }
    ]
  },
  {
    "id": "section-8",
    "number": "8",
    "title": "Cookies and Google Analytics",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Cookies are small pieces of information stored by a browser. Similar technologies can also recognise a device or record interactions. Google Analytics can use these technologies for measurement."
      },
      {
        "kind": "paragraph",
        "text": "We will explain the purposes of tracking and provide the choices required by applicable law. Where prior consent is required, we will obtain it before the relevant tracking begins. Withdrawal will stop future processing that depends on that consent, within the scope of your choice."
      },
      {
        "kind": "paragraph",
        "text": "You can also use your browser's settings to review, delete or block cookies. These settings do not necessarily prevent all forms of measurement and may affect website features. They do not replace any consent controls the website is required to provide."
      },
      {
        "kind": "paragraph",
        "text": "Further information is available in [Google's Privacy Policy](https://policies.google.com/privacy) and its explanation of [information received from partner websites](https://policies.google.com/technologies/partner-sites)."
      }
    ]
  },
  {
    "id": "section-9",
    "number": "9",
    "title": "Google Ads, Meta advertisements and follow-up",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We advertise through Google Ads and Meta platforms, including Facebook and Instagram. Those services handle interactions with advertisements under their own policies and settings. A person who chooses to contact NGE after seeing an advertisement provides enquiry information that we handle as described in this policy."
      },
      {
        "kind": "paragraph",
        "text": "Running advertisements does not, by itself, establish that Meta Pixel, Google Ads conversion tags, remarketing, customer-list matching or similar features operate on this website. Each enabled feature needs to be reflected accurately in the published policy and consent arrangements."
      },
      {
        "kind": "paragraph",
        "text": "Responses to a requested quotation are different from unrelated promotional broadcasts. Any separate promotional programme will use an appropriate legal basis and provide a practical way to stop receiving it. You can ask us to stop optional sales follow-up by using the contact details in section 17 or by telling us in the relevant conversation."
      },
      {
        "kind": "paragraph",
        "text": "Opting out of optional promotion does not necessarily stop communications you request about an active order, quotation or privacy matter. Platform advertising preferences are managed separately through Google or Meta."
      }
    ]
  },
  {
    "id": "section-10",
    "number": "10",
    "title": "Access to and disclosure of information",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We limit access to enquiry information to authorised people who need it to handle the enquiry or support the relevant business activity. Responsibility for a sales enquiry does not justify unrelated use of its contact details."
      },
      {
        "kind": "paragraph",
        "text": "The following services and recipients are relevant to these activities:"
      },
      {
        "kind": "table",
        "headers": [
          "Service or recipient",
          "Relevant activity"
        ],
        "rows": [
          [
            "Authorised NGE personnel",
            "Reviewing and responding to enquiries and handling privacy requests"
          ],
          [
            "WhatsApp",
            "Processing communications sent through its service"
          ],
          [
            "Google Analytics",
            "Measuring website use under the configured settings"
          ],
          [
            "Google Ads and Meta",
            "Processing advertisement interactions and campaign activity"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "Service providers may act on our instructions for some processing and determine their own purposes for other processing. Their roles depend on the service and applicable terms; this policy does not classify every provider as the same type of recipient."
      },
      {
        "kind": "paragraph",
        "text": "We may disclose relevant information to a competent authority where legally required or as necessary for a valid legal claim. We limit such disclosure to information relevant to the request or purpose."
      }
    ]
  },
  {
    "id": "section-11",
    "number": "11",
    "title": "International visitors and transfers",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "NGE operates from India and accepts enquiries from customers worldwide. Information sent to us may be handled in India. Google, WhatsApp and relevant service providers may also process information in countries where they operate."
      },
      {
        "kind": "paragraph",
        "text": "International processing may involve different data-protection rules from those in your country. The applicable requirements depend on the relevant entities, locations and movement of information. Your decision to contact NGE is not blanket permission for unrestricted transfers."
      },
      {
        "kind": "paragraph",
        "text": "Where a restricted international transfer requires a safeguard, we will put the required arrangement in place before making the transfer. You may contact our privacy contact to ask about the arrangements relevant to your information."
      }
    ]
  },
  {
    "id": "section-12",
    "number": "12",
    "title": "Retention and deletion",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We retain personal information for the period reasonably needed for its stated purpose, taking applicable legal requirements into account. Storage availability alone is not a reason to retain information indefinitely."
      },
      {
        "kind": "paragraph",
        "text": "The following factors govern our retention decisions:"
      },
      {
        "kind": "table",
        "headers": [
          "Type of record",
          "Relevant retention factors"
        ],
        "rows": [
          [
            "Active enquiry or quotation",
            "Whether discussions are continuing and the information remains needed to respond"
          ],
          [
            "Closed or unsuccessful enquiry",
            "Whether there is a documented reason for continued retention after the discussion ends"
          ],
          [
            "Enquiry that results in a transaction",
            "Applicable transaction, support, accounting and legal-record requirements; additional notices where needed"
          ],
          [
            "Analytics information",
            "The purpose of measurement and the actual Analytics retention settings"
          ],
          [
            "Privacy request or complaint",
            "Evidence needed to address the request, demonstrate its handling and meet applicable requirements"
          ],
          [
            "Marketing opt-out",
            "The minimum contact or suppression information needed to respect the person's choice"
          ]
        ]
      },
      {
        "kind": "paragraph",
        "text": "When the applicable retention need ends, we will securely delete the information or render it genuinely anonymous. Removing a name alone may not anonymise a record if a person can still be identified."
      },
      {
        "kind": "paragraph",
        "text": "Where information is retained temporarily in backups, it remains subject to appropriate restrictions until it is removed under the applicable backup schedule. A request to delete information held by NGE does not automatically delete a platform's separate account records; requests concerning those records may need to be directed to that platform."
      }
    ]
  },
  {
    "id": "section-13",
    "number": "13",
    "title": "Security and incident handling",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We are committed to applying reasonable technical and organisational measures appropriate to the information and risks involved. This includes managing who can access business communications, protecting the accounts and devices used to handle them, and avoiding unnecessary copying or disclosure of enquiry details."
      },
      {
        "kind": "paragraph",
        "text": "No internet service, device or communication method can be guaranteed completely secure. If you suspect that information shared with NGE has been misused or disclosed without authorisation, contact the privacy contact promptly and provide enough detail to help investigate."
      },
      {
        "kind": "paragraph",
        "text": "If a personal-data incident occurs, we will investigate, take appropriate containment and remedial action, and notify affected people or authorities when applicable law requires it."
      }
    ]
  },
  {
    "id": "section-14",
    "number": "14",
    "title": "Your privacy requests and choices",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "You can contact NGE to ask about personal information relating to you, request a correction, request deletion, or ask us to stop optional follow-up."
      },
      {
        "kind": "paragraph",
        "text": "Where the applicable law provides them, your rights may also include access to a copy of information, restriction of processing, objection to particular processing, portability, withdrawal of consent and a complaint to a competent data-protection authority. The availability and scope of each right depend on the law and circumstances; they are not identical in every country."
      },
      {
        "kind": "paragraph",
        "text": "Withdrawing consent does not invalidate processing lawfully carried out before withdrawal. If information must be retained for a legal reason, a deletion request may not result in immediate removal of every record. We will explain relevant limitations and how your request is handled, subject to lawful restrictions."
      },
      {
        "kind": "paragraph",
        "text": "For a request, please provide the name and contact details used in the original enquiry, an approximate date or other helpful reference, and what you want us to do. Avoid sending excessive identity documents at the outset. We may ask for proportionate verification to protect your information from disclosure to the wrong person."
      },
      {
        "kind": "paragraph",
        "text": "We will respond within the time limits required by applicable law. You may ask our privacy contact to review a response or explain how a complaint has been handled. You do not need our permission to complain to a competent authority where that right applies."
      }
    ]
  },
  {
    "id": "section-15",
    "number": "15",
    "title": "Voluntary information and children's privacy",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "You decide whether to make a sales enquiry and what relevant information to provide. Without a contact method or sufficient project details, we may be unable to provide a useful response or prepare the requested quotation. We address optional analytics or promotional choices separately from the information needed for the enquiry itself."
      },
      {
        "kind": "paragraph",
        "text": "Our products and website are directed at adult business customers and professionals. We do not intend to collect children's information for sales or marketing purposes. A parent, guardian or other concerned person may contact us if a child has supplied personal information so that we can review it and take appropriate action under applicable law."
      }
    ]
  },
  {
    "id": "section-16",
    "number": "16",
    "title": "External services and policy changes",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Links to WhatsApp, Google, Meta or another external service take you to services with their own terms and privacy arrangements. Our policy describes NGE's handling of information; it does not replace those services' policies or remove our responsibilities for processing that we determine."
      },
      {
        "kind": "paragraph",
        "text": "Relevant links include [WhatsApp's Privacy Policy](https://www.whatsapp.com/legal/privacy-policy), [Meta's Privacy Policy](https://www.facebook.com/privacy/policy/) and [Google's Privacy Policy](https://policies.google.com/privacy)."
      },
      {
        "kind": "paragraph",
        "text": "We may revise this policy when our activities, technology or applicable requirements change. The published page will identify its effective or updated date. Where a change requires additional notice or fresh consent, we will provide that notice or seek that consent before the changed processing begins."
      }
    ]
  },
  {
    "id": "section-17",
    "number": "17",
    "title": "Privacy contact and complaints",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Please direct privacy questions, requests and complaints to:"
      },
      {
        "kind": "paragraph",
        "text": "**Mr. Kuldeep**\nDirector and Privacy Contact\n**NGE Drillsol Private Limited**"
      },
      {
        "kind": "paragraph",
        "text": "**Email:** [ngedrillsol@gmail.com](mailto:ngedrillsol@gmail.com)\n**Telephone / WhatsApp:** [+91 91063 60907](tel:+919106360907)\n**Postal address:** Sr. No. 553, Opp. Guru 308, Bypass Highway, Gilosan, Mehsana, Gujarat 384002, India."
      },
      {
        "kind": "paragraph",
        "text": "For email requests, the subject **“Privacy Request — NGE Drillsol”** will help identify the matter. Please describe the concern and the outcome you are seeking, such as a correction, deletion, explanation or end to optional follow-up."
      }
    ]
  }
];

// Render only the bold text and links used in this static policy.
// No HTML injection or extra Markdown dependency is needed.
function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index} className="font-semibold text-slate-100">{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a key={index} href={link[2]} className="break-words text-yellow-300 underline decoration-yellow-400/40 underline-offset-4 hover:text-yellow-200">
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

function PolicyContent({ block }: { block: PolicyBlock }) {
  if (block.kind === "list") {
    return (
      <ul className="list-disc space-y-3 pl-5 marker:text-yellow-400">
        {block.items.map((item, index) => <li key={index}><InlineText text={item} /></li>)}
      </ul>
    );
  }
  if (block.kind === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-white/10" role="region" aria-label="Policy details table" tabIndex={0}>
        <table className="w-full min-w-[540px] border-collapse text-left text-sm leading-7">
          <thead className="bg-white/5 text-white">
            <tr>{block.headers.map((cell, index) => <th key={index} scope="col" className="px-4 py-3 font-semibold">{cell}</th>)}</tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-white/10">
                {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-4 align-top"><InlineText text={cell} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p className="whitespace-pre-line"><InlineText text={block.text} /></p>;
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050914] pb-20 pt-28 text-slate-300 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Link href="/" className="inline-flex rounded text-sm text-slate-400 transition-colors hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400">
          ← Back to Home
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#10264b] to-[#070d19] p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">NGE Drillsol Private Limited</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">How we handle website information, sales enquiries and your privacy requests.</p>
          <p className="mt-5 text-sm text-slate-400">Last updated: 23 September 2026</p>
        </div>


        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <nav aria-label="Privacy policy contents" className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">On this page</h2>
            <ol className="mt-4 space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="block text-sm leading-6 text-slate-400 hover:text-yellow-300">
                    <span className="mr-1 text-yellow-400">{section.number}.</span> {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="min-w-0 space-y-6">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="scroll-mt-28 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
                <h2 id={`${section.id}-heading`} className="text-xl font-semibold leading-8 text-white sm:text-2xl">
                  <span className="mr-2 text-yellow-400">{section.number}.</span>{section.title}
                </h2>
                <div className="mt-5 space-y-5 break-words text-[15px] leading-8">
                  {section.blocks.map((block, index) => <PolicyContent key={index} block={block} />)}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  );
}
