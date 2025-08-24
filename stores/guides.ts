import { defineStore } from "pinia";

export const useGuidesStore = defineStore("guidesStore", {
  state: () => ({
    umrah: [
      {
        "name": "What is Umrah?",
        "contentComponent": "componentVal"
      },
      {
        "name": "Planning",
        "contentComponent": "componentVal"
      },
      {
        "name": "Starting Umrah: Intention & Ihram",
        "contentComponent": "componentVal"
      },
      {
        "name": "Entering the Masjid Al-Haram",
        "contentComponent": "componentVal"
      },
      {
        "name": "Perform - Tawaf x 7",
        "contentComponent": "componentVal"
      },
      {
        "name": "Perform Saey (Safa & Marwa)",
        "contentComponent": "componentVal"
      },
      {
        "name": "Tahallul (Coming out of the state of ihram)",
        "contentComponent": "componentVal"
      }
    ],
    hajj: [
      {
        "name": "What is Hajj?",
        "contentComponent": "componentVal"
      },
      {
        "name": "Planning",
        "contentComponent": "componentVal"
      },
      {
        "name": "Preparation and Intention",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 1 / 8th Dhul Hijjah - Enter state of Ihram",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 2 / 9th Dhul Hijjah - Arrive in 'Arafah",
        "contentComponent": "componentVal"
      },
      {
        "name": "Stay in Muzdalifah",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 3 / 10th Dhul Hijjah & start of Eid Ul-Adha",
        "contentComponent": "componentVal"
      },
      {
        "name": "Perform Tawaaful-Ifaadhah & Saey",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 4 / 11th Dhul-Hijjah",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 5 / 12th Dhul Hijjah - Farewell Tawaf",
        "contentComponent": "componentVal"
      },
      {
        "name": "Day 6 / 13th Dhul Hijjah",
        "contentComponent": "componentVal"
      }
    ]
  }),
  actions: {
  },
});
