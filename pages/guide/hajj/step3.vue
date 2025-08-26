<script setup lang="ts">
import Notice from '~/components/notice.vue'

</script>


<template>
  <div>
    <Notice type="warning">
      <template #header>
        State of Ihram
      </template>
      For Hajj Tamattu, you should have completed your umrah for Hajj & should
      have come out of state of Ihram.
    </Notice>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        Start Hajj
      </div>
      Wear the 'Ihram' clothes again (it can be same or different) and make the
      intention for Hajj:
      <div
        class="m-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
        <p
          class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center">
          لَبَّيْكَ اللَّهُمَّ حَجًّا
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          transliteration
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Labbayk Allahumma Hajj
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          translation
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          O Allah, here I am to perform Hajj.
        </p>
      </div>
    </div>
    <Notice type="warning">
      <template #header>
        Fears that something will prevent completion of Hajj
      </template>
      If he / she fears that something will prevent him / her (menstruation)
      from completing Hajj then he / she should say the following:
      <div
        class="m-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
        <p
          class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center">
          فَإِنْ حَبَسَنِي حَابِسٌ فَمَحِلِّي حَيثُ حَبَستَنِي
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          transliteration
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Fa in habasani haabisun Fa Mahilli haisu habastani
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          translation
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          If I am prevented by any obstacle, my place is wherever I am help up.
        </p>
      </div>
    </Notice>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        Talbiyah
      </div>
      You'll begin reciting the following invocation called the Talbiyah facing
      the Qiblah:
      <div
        class="m-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
        <p
          class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center">
          لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ،
          إِنَّ الْحَمْدَ وَ النِّعْمَةَ لَكَ وَ الْمُلْكَ لا شَرِيكَ لَكَ
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          transliteration
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          Labbayk Allahumma Labbayk, Labbayk la sharika laka Labbayk, Innal
          hamda
          wanni‘mata laka walmulk La sharika lak
        </p>
        <p
          class="mt-4 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
          translation
        </p>
        <p
          class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          There is no god but Allah, the One, having no partner with Him.
          Sovereignty
          belongs to Him and all the praise is due to Him, and He is Potent over
          everything
        </p>
      </div>
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        Mina
      </div>
      You will then go to & arrive at Mina.
    </div>
  </div>
</template>