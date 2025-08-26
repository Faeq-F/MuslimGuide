<script setup lang="ts">
import Notice from '~/components/notice.vue';

</script>


<template>
  <div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      Hajj is a sacred pilgrimage that is required of every Muslim at least once
      in their lifetime - it is one of the five pillars of Islam.
    </div>
    <Notice type="info">
      <template #header>
        Types of Hajj
      </template>
      There are three types of Hajj:<br />
      <div class="text-[#49739c] dark:text-[#90adcb]">
        Tamattu, Ifraad and Qiran.
      </div>
      <br />
      For the purpose of this Hajj guide, we will use the Hajj Tamattu
      (recommended by Prophet Muhammad ﷺ)
    </Notice>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        When does Hajj take place?
      </div>
      It takes place during the same time each year, in the sacred month of Dhul
      Hijjah - the twelfth month in the Islamic Calendar.
      <br /><br />
      Hajj begins on the 8th of Dhul Hijjah and lasts approximately five to six
      days depending on the sighting of the moon.
      <br /><br />
      When the new crescent moon is sighted, Muslims around the world welcome in
      the four-day festival of Eid al-Adha.
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        The requirement of Hajj
      </div>
      While Hajj is required of every Muslim, it is only required so long as
      they have the capacity.
      <br /><br />
      There are conditions which make Muslims eligible to perform Hajj and
      exempt from performing Hajj.
    </div>
    <div
      class="p-4 m-4 mb-2 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl">
      <div
        class="font-bold  mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        The opportunity of Hajj
      </div>
      Hajj offers a chance to wipe clean past sins and start anew before Allah.
      <br /><br />
      Additionally, the act of performing Hajj with increased Taqwa (being
      God-conscious) and to a high standard of perfection, is rewarded with
      Paradise.
    </div>
    <Notice type="info">
      <template #header>
        Significant Terms:
      </template>
      <ul class="list-disc ml-4">
        <li>
          Major Ihram:
          <div class="text-[#49739c] dark:text-[#90adcb]">
            Pilgrim enters the state of major Ihram after making the intention
            to perform the rites of Hajj and stays in the state until the end.
          </div>
        </li>
        <li>
          Minor Ihram:
          <div class="text-[#49739c] dark:text-[#90adcb]">
            After completing 2 of the 3 main rituals or 3 of the 4 (hanafi), a
            pilgrim can change their clothes, apply perfume, cut nails but they
            are still prohibited to be affectionate/intimate with their spouse.
          </div>
        </li>
        <li>
          Hanafi Opinion:
          <div class="text-[#49739c] dark:text-[#90adcb]">
            According to Ahnaf, a pilgrim has to perform 3 of 4 main rituals in
            a sequence before coming out of major state of ihram.
            <ol class="list-decimal ml-8">
              <li>
                Rami (Stoning)
              </li>
              <li>
                Hady (Sacrifice an animal)
              </li>
              <li>
                Halq (cut hair)
              </li>
              <li>
                Tawaf Az-ziyarah
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </Notice>

  </div>

</template>