<script setup lang="ts">

import kaabaImg from '~/public/media/kaaba-key-features.jpg'
</script>


<template>
  <div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        1
      </div>
      Go to Makkah and perform Tawaaf Ul-Ifaadhah.
      <br /><br />
      It can be performed anytime up to sunset of 12th Dhul Hijjah or more
      depending the opinion pilgrim follows.
      <br /><br />
      Enter Masjid ul-Haram & start the tawaf from the black stone.
      <img :src="kaabaImg" class="rounded-xl mt-4" />
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        2
      </div>
      Once Tawaaf is complete, offer 2 rakaats anywhere behind the Station of
      Ibraheem – or anywhere in the Haram:
      <br /><br />
      Recite Surat al-Kafirun in 1st raka’a and Surat al-Ikhlas in the 2nd
      raka’a, and drink Zamzam water
      <br /><br />
      Make Du’a;
      <br />
      <nuxt-link to="/guide/umrah/step5"
        class="rounded-xl border-2 underline border-[#e7edf4] dark:border-[#223649] p-2 m-1 block">
        (See Step 5 in the Umrah section)
      </nuxt-link>
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        3
      </div>
      Perform Sa’ee;
      <br />
      <nuxt-link to="/guide/umrah/step6"
        class="rounded-xl border-2 underline border-[#e7edf4] dark:border-[#223649] p-2 m-1 block">
        (See Step 6 in the Umrah section)
      </nuxt-link>
      <br />
      Upon the completion of the Sa’ee, all restrictions are now lifted.
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        4
      </div>
      Return back to Mina. Upon leaving al-Masjid ul-Haraam with the left
      foot, recite dua of leaving the Masjid:
      <div
        class="m-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
        <p
          class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center">
          اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          transliteration
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Allahumma-maftah li abwaba rahmatika
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          translation
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          O Allah open to me, Your doors of Mercy.
        </p>
      </div>
    </div>
  </div>
</template>