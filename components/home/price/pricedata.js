import liteImage from '../../../assets/img/price/Group 20637.svg'
import plusImage from '../../../assets/img/price/dashicons_car.svg'
import enterPriceImage from '../../../assets/img/price/Group 20637 (1).svg'

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
        border : "border-purple-1",
        hover : "hover:bg-purple-1 hover:text-white"
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
        bgColor : "bg-purple-1",
        color: "bg-[#646BEE]",
        textColor: "text-white",
        border : "border-white",
        hover : "hover:bg-white hover:text-purple-1 hover:border-purple-1"
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
        border : "border-purple-1",
        hover : "hover:bg-purple-1 hover:text-white hover:border-white"
        // textColor: 'text-[#646BEE]',
    },
];
