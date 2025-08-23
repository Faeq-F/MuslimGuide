import { defineStore } from "pinia";

export const useDuasStore = defineStore("duasStore", {
  state: () => ({
    categories: [
      {
        label: 'Umrah',
        icon: "earth",
        image: "/media/umrah.jpg",
      },
      {
        label: "Travel",
        icon: "earth",
        image: "/media/travel.jpg",
      },
      {
        label: 'Madinah',
        icon: "earth",
        image: "/media/madinah.jpg",
      },
      {
        label: 'Makkah',
        icon: "earth",
        image: "/media/makkah.jpg",
      },
      {
        label: 'General',
        icon: "earth",
        image: "/media/general.jpg",
      },
      {
        label: 'Ziyarah',
        icon: "earth",
        image: "/media/ziyarah.jpg",
      },
    ],
    pluginsList: [
      {
        name: "Du'a when leaving home",
        arabic: "",
        phonetic: "Bismillahi Tawakkaltu 'Alallah, walaa hawla walaa Quwwata illa billah.",
        translation: "I commence my journey in the name of Allah, having put my reliance on Allah, there is no might and no power but in Allah.",
        category: 'Traveling',
      },
      {
        name: "Du'a for protection",
        arabic: "",
        phonetic: "Allahumma inna a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dain, wa ghalabatir-rijal.",
        translation: "O Allah, I seek refuge in You from grief, sadness, laziness, cowardice, and being overwhelmed by debt or men.",
        category: 'Traveling',
      },
      {
        name: "Du'a for traveling",
        arabic: "",
        phonetic: "Subhanallazee Sakh-khara lanaa haaza wa maa kunnaa lahu muqrineen.Wa innaa ilaa Rabbina lamunqaliboon.",
        translation: "Exalted is He who has subjected this to us, and we could not have(otherwise) subdued it. And indeed we shall (surely) return to our Lord.",
        category: 'Traveling',
      },
      {
        name: "Du'a when ascending",
        arabic: "",
        phonetic: "Allahu Akbar.",
        translation: "Allah is the Greatest.",
        category: 'Traveling',
      },
      {
        name: "Du'a before entering Ihram",
        arabic: "",
        phonetic: "Allahumma innee ureedul 'umrata fayasserhaa lee wa taqabbalhaa minnee.",
        translation: "O Allah, Indeed I intend to perform the Umrah, so please make it easy for me and accept it from me.",
        category: 'Umrah',
      },
      {
        name: "Du'a before entering Makkah",
        arabic: "",
        phonetic: "Allāhumma hadha jaramuka wa amnuka fa ḥarrimni'ala n-nar, wa aminni min 'adhabika yawma tab'athu 'ibadak, wa j'alni min awliya'ika wa ahli ta'atik.",
        translation: "O Allah, this is Your sanctuary and security, so make me unlawful to the hellfire, make me safe from Your punishment on the day You resurrect Your servants, and make me one of Your friends and one of the people who obey You.",
        category: 'Umrah',
      },
      {
        name: "Du'a for forgiveness",
        arabic: "",
        phonetic: "Astaghfirullaha wa atubu ilayh.",
        translation: "I seek forgiveness from Allah and turn to Him in repentance.",
        category: 'Umrah',
      },
    ],
  }),
  actions: {

  },
});