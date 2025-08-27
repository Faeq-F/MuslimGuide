import { defineStore } from 'pinia'

const STORE_NAME = 'settingsStore'

const getDefaultSettings = () => ({
  name: '',
  umrahPlanningNotes: `You will need to do some planning for your journey.

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
  `,
  hajjPlanningNotes: `You will need to do some planning for your journey.

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
`,
})

const getSettings = () => {
  const settings = localStorage.getItem(STORE_NAME)
  return settings ? JSON.parse(settings) : getDefaultSettings()
}

export const useSettingsStore = defineStore(STORE_NAME, {
  state: () => ({ settings: getSettings() }),
  actions: {
    updateSettings(partialSettings) {
      this.settings = {
        ...this.settings,
        ...partialSettings,
      }
      localStorage.setItem(STORE_NAME, JSON.stringify(this.settings))
    },
  },
})