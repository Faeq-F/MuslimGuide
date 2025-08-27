import{X as t}from"./BaE0Tk7z.js";const a="settingsStore",o=()=>({name:"",umrahPlanningNotes:`You will need to do some planning for your journey.

Click the first button in the toolbar to open/hide the editing pane (saves automatically)

Here is a checklist of items and preparations you should consider before embarking on your pilgrimage:

I will need to bring with me / buy the following:
- Ihram clothes
- Comfortable walking shoes
- Sunglasses, Umbrella, Sun hat / cap
- Sunscreen
- Reusable water bottle
- Personal hygiene items (toothbrush, toothpaste, miswak, wet wipes, hand sanitizer)
- Medications (if any), plasters, bandages
- Snacks (for long days)
- Small backpack or bag (to carry essentials during the day)
- Small bottle or bag for stones
- Prayer mat
- Small towel
- Smartphone
- Travel documents (passport, visa, ID, boarding cards, etc.)
- Money (local currency and/or credit cards)
- Guidebook or map
- Contact information for emergency situations
- Any necessary health documents (vaccination records, prescriptions)
- Quran; dua and Hajj books
- Sleeping Bag
- Sanitary pads (women)
- Tissues (non perfumed)
- Clothes for at least two days
- Non-perfumed and normal soap
- hairbrush, Alarm, PATIENCE
  `,hajjPlanningNotes:`You will need to do some planning for your journey.

Click the first button in the toolbar to open/hide the editing pane (saves automatically)

Here is a checklist of items and preparations you should consider before embarking on your pilgrimage:

I will need to bring with me / buy the following:
- Ihram clothes
- Comfortable walking shoes
- Sunglasses, Umbrella, Sun hat / cap
- Sunscreen
- Reusable water bottle
- Personal hygiene items (toothbrush, toothpaste, miswak, wet wipes, hand sanitizer)
- Medications (if any), plasters, bandages
- Snacks (for long days)
- Small backpack or bag (to carry essentials during the day)
- Small bottle or bag for stones
- Prayer mat
- Small towel
- Smartphone
- Travel documents (passport, visa, ID, boarding cards, etc.)
- Money (local currency and/or credit cards)
- Guidebook or map
- Contact information for emergency situations
- Any necessary health documents (vaccination records, prescriptions)
- Quran; dua and Hajj books
- Sleeping Bag
- Sanitary pads (women)
- Tissues (non perfumed)
- Clothes for at least two days
- Non-perfumed and normal soap
- hairbrush, Alarm, PATIENCE
`}),s=()=>{const e=localStorage.getItem(a);return e?JSON.parse(e):o()},r=t(a,{state:()=>({settings:s()}),actions:{updateSettings(e){this.settings={...this.settings,...e},localStorage.setItem(a,JSON.stringify(this.settings))}}});export{r as u};
