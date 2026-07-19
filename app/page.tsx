import { redirect } from "next/navigation";

// prcreatives.com/ -> prcreatives.com/akhil-ruchitha
//
// Since prcreatives.com is a business domain, the wedding site lives on its
// own path instead of taking over the whole root. This redirect just means
// visiting the bare domain sends people straight there too.
//
// If you'd rather prcreatives.com/ show something else later (a business
// homepage, a different couple's site, etc.), delete this redirect() call
// and put real page content here instead.
export default function RootPage() {
  redirect("/akhil-ruchitha");
}
