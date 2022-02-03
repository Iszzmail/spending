import React, { useEffect, useState } from 'react';

function Data(props) {

    const [data,Setdata]=useState({
        rates: {
          btc: { name: "Bitcoin", unit: "BTC", value: 1.0, type: "crypto" },
          eth: { name: "Ether", unit: "ETH", value: 14.024, type: "crypto" },
          ltc: { name: "Litecoin", unit: "LTC", value: 339.328, type: "crypto" },
          bch: { name: "Bitcoin Cash", unit: "BCH", value: 131.07, type: "crypto" },
          bnb: { name: "Binance Coin", unit: "BNB", value: 100.861, type: "crypto" },
          eos: { name: "EOS", unit: "EOS", value: 15920.22, type: "crypto" },
          xrp: { name: "XRP", unit: "XRP", value: 61261.094, type: "crypto" },
          xlm: { name: "Lumens", unit: "XLM", value: 186970.121, type: "crypto" },
          link: { name: "Chainlink", unit: "LINK", value: 2293.662, type: "crypto" },
          dot: { name: "Polkadot", unit: "DOT", value: 1931.664, type: "crypto" },
          yfi: { name: "Yearn.finance", unit: "YFI", value: 1.58, type: "crypto" },
          usd: { name: "US Dollar", unit: "$", value: 37599.413, type: "fiat" },
          aed: {
            name: "United Arab Emirates Dirham",
            unit: "DH",
            value: 138102.645,
            type: "fiat",
          },
          ars: {
            name: "Argentine Peso",
            unit: "$",
            value: 3955909.511,
            type: "fiat",
          },
          aud: {
            name: "Australian Dollar",
            unit: "A$",
            value: 52733.365,
            type: "fiat",
          },
          bdt: {
            name: "Bangladeshi Taka",
            unit: "৳",
            value: 3232709.875,
            type: "fiat",
          },
          bhd: { name: "Bahraini Dinar", unit: "BD", value: 14175.918, type: "fiat" },
          bmd: {
            name: "Bermudian Dollar",
            unit: "$",
            value: 37599.413,
            type: "fiat",
          },
          brl: { name: "Brazil Real", unit: "R$", value: 199190.411, type: "fiat" },
          cad: {
            name: "Canadian Dollar",
            unit: "CA$",
            value: 47673.198,
            type: "fiat",
          },
          chf: { name: "Swiss Franc", unit: "Fr.", value: 34534.045, type: "fiat" },
          clp: {
            name: "Chilean Peso",
            unit: "CLP$",
            value: 30425069.263,
            type: "fiat",
          },
          cny: { name: "Chinese Yuan", unit: "¥", value: 239169.868, type: "fiat" },
          czk: { name: "Czech Koruna", unit: "Kč", value: 805992.942, type: "fiat" },
          dkk: { name: "Danish Krone", unit: "kr.", value: 247340.521, type: "fiat" },
          eur: { name: "Euro", unit: "€", value: 33250.74, type: "fiat" },
          gbp: {
            name: "British Pound Sterling",
            unit: "£",
            value: 27693.81,
            type: "fiat",
          },
          hkd: {
            name: "Hong Kong Dollar",
            unit: "HK$",
            value: 293029.147,
            type: "fiat",
          },
          huf: {
            name: "Hungarian Forint",
            unit: "Ft",
            value: 11782913.545,
            type: "fiat",
          },
          idr: {
            name: "Indonesian Rupiah",
            unit: "Rp",
            value: 540422007.545,
            type: "fiat",
          },
          ils: {
            name: "Israeli New Shekel",
            unit: "₪",
            value: 119152.014,
            type: "fiat",
          },
          inr: { name: "Indian Rupee", unit: "₹", value: 2812578.994, type: "fiat" },
          jpy: { name: "Japanese Yen", unit: "¥", value: 4298906.362, type: "fiat" },
          krw: {
            name: "South Korean Won",
            unit: "₩",
            value: 45200094.753,
            type: "fiat",
          },
          kwd: { name: "Kuwaiti Dinar", unit: "KD", value: 11372.205, type: "fiat" },
          lkr: {
            name: "Sri Lankan Rupee",
            unit: "Rs",
            value: 7628213.867,
            type: "fiat",
          },
          mmk: { name: "Burmese Kyat", unit: "K", value: 66853799.469, type: "fiat" },
          mxn: { name: "Mexican Peso", unit: "MX$", value: 773716.215, type: "fiat" },
          myr: {
            name: "Malaysian Ringgit",
            unit: "RM",
            value: 157372.344,
            type: "fiat",
          },
          ngn: {
            name: "Nigerian Naira",
            unit: "₦",
            value: 15635716.028,
            type: "fiat",
          },
          nok: {
            name: "Norwegian Krone",
            unit: "kr",
            value: 330650.105,
            type: "fiat",
          },
          nzd: {
            name: "New Zealand Dollar",
            unit: "NZ$",
            value: 56641.899,
            type: "fiat",
          },
          php: {
            name: "Philippine Peso",
            unit: "₱",
            value: 1917400.919,
            type: "fiat",
          },
          pkr: {
            name: "Pakistani Rupee",
            unit: "₨",
            value: 6634416.48,
            type: "fiat",
          },
          pln: { name: "Polish Zloty", unit: "zł", value: 151281.728, type: "fiat" },
          rub: { name: "Russian Ruble", unit: "₽", value: 2866880.066, type: "fiat" },
          sar: { name: "Saudi Riyal", unit: "SR", value: 141066.456, type: "fiat" },
          sek: { name: "Swedish Krona", unit: "kr", value: 345553.159, type: "fiat" },
          sgd: {
            name: "Singapore Dollar",
            unit: "S$",
            value: 50664.495,
            type: "fiat",
          },
          thb: { name: "Thai Baht", unit: "฿", value: 1245682.888, type: "fiat" },
          try: { name: "Turkish Lira", unit: "₺", value: 509596.128, type: "fiat" },
          twd: {
            name: "New Taiwan Dollar",
            unit: "NT$",
            value: 1045564.485,
            type: "fiat",
          },
          uah: {
            name: "Ukrainian hryvnia",
            unit: "₴",
            value: 1066866.47,
            type: "fiat",
          },
          vef: {
            name: "Venezuelan bolívar fuerte",
            unit: "Bs.F",
            value: 3764.829,
            type: "fiat",
          },
          vnd: {
            name: "Vietnamese đồng",
            unit: "₫",
            value: 851626711.675,
            type: "fiat",
          },
          zar: {
            name: "South African Rand",
            unit: "R",
            value: 576854.786,
            type: "fiat",
          },
          xdr: {
            name: "IMF Special Drawing Rights",
            unit: "XDR",
            value: 26885.686,
            type: "fiat",
          },
          xag: {
            name: "Silver - Troy Ounce",
            unit: "XAG",
            value: 1656.911,
            type: "commodity",
          },
          xau: {
            name: "Gold - Troy Ounce",
            unit: "XAU",
            value: 20.798,
            type: "commodity",
          },
          bits: { name: "Bits", unit: "μBTC", value: 1000000.0, type: "crypto" },
          sats: { name: "Satoshi", unit: "sats", value: 100000000.0, type: "crypto" },
        },
      })

      const transfer=()=>props.getdata(data)

    useEffect(()=>{
        transfer()
    },[])
    return (
        <div>
            
        </div>
    );
}

export default Data;