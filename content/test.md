---
title: 'bro'
description: 'meta description of the page'
abc: '[
  {
    id: 1,
    title: "linkon",
    priceMonth: 2500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#FFF]",
  },
  {
    id: 2,
    title: "Plus",
    priceMonth: 4500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#646BEE]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Enterprise",
    priceMonth: 7500,
    priceYear: 4500,
    description:
      "Perfect for Standard Packages that are just getting started. It is a long established the fact.",
    options: [
      "Unlimited Support",
      "Sync data across devices",
      "Create Multiple Firms",
      "Check Profit on Invoices",
      "Keep different rates for each party",
      "Set multiple pricing for items",
      "Balance Sheet",
    ],
    image: "",
    color: "bg-[#FFF]",
  },
];'
---

# The Title is {{ $doc.title }} and customVariable is {{ $doc.abc || 'defaultValue' }}
