/** Editable enquiry prompts, not machine specifications or unit conversions. */
export function getWhatsAppEnquiryUrl(context: string): string {
  const message = `Hello NGE Drillsol, ${context}

Project requirements:
Application:
Required drilling depth (m or ft):
Bore diameter (mm or inches):
Formation / ground conditions:
Drilling method:
Project location:

Please include the unit with each measurement.`;

  return `https://wa.me/919106360907?text=${encodeURIComponent(message)}`;
}

export function getPageWhatsAppEnquiryUrl(pathname: string | null): string {
  const path = pathname?.replace(/\/$/, "") || "/";
  let context = "I would like to discuss my drilling project.";

  if (path === "/") {
    context = "I am enquiring from your homepage about a drilling project.";
  } else if (path === "/contact") {
    context = "I am enquiring from your contact page about my project requirements.";
  } else if (path === "/drilling-rigs/water-well-drilling-rigs") {
    context = "I am interested in water well drilling rigs.";
  } else if (path.startsWith("/drilling-rigs/")) {
    // Keep the exact page reference rather than deriving a model from its slug.
    context = `I am enquiring about the drilling equipment on this page: ${path}`;
  }

  return getWhatsAppEnquiryUrl(context);
}
