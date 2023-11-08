import liteImage from '../../../assets/img/carlight.png'
import plusImage from '../../../assets/img/yellowsmallcar.png'
import enterPriceImage from '../../../assets/img/bi_truck.png'

export const prices = [
  {
    id: 1,
    title: "Lite",
    price: 2500,
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
    image: liteImage,
    color: "bg-[#FFF]",
    bgColor : "bg-[#FFF]",
    // textColor : 'text-[#646BEE]'
  },
  {
    id: 2,
    title: "Plus",
    price: 4500,
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
    image: plusImage,
    bgColor : "bg-[#646BEE]",
    color: "bg-[#646BEE]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Enterprise",
    price: 7500,
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
    image: enterPriceImage,
    color: "bg-[#FFF]",
    bgColor : "bg-[#FFF]",
    // textColor: 'text-[#646BEE]',
  },
];
