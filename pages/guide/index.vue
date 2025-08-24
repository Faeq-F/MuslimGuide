<script lang="ts" setup>



</script>

<template>
  <div>
    <nuxt-link to="/guide/hajj">
      <div
        class="flex items-center gap-4 bg-slate-50 dark:bg-[#182634] px-2 min-h-[72px] py-1 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl m-4">
        <div
          class="text-[#0d141c] dark:text-white flex items-center justify-center rounded-lg bg-[#e7edf4] dark:bg-accented shrink-0 size-14">
          <UIcon name="i-streamline-islam" class="!size-9 stroke-[54px]" />
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#0d141c] dark:text-white text-base font-medium leading-normal ">
            Hajj Guide
          </p>
          <p
            class="text-[#49739c] dark:text-[#90adcb] text-sm font-normal leading-normal ">
            Fulfilling the pillar of Islam
          </p>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link to="/guide/umrah">
      <div
        class="flex items-center gap-4 bg-slate-50 dark:bg-[#182634] px-2 min-h-[72px] py-1 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl m-4">
        <div
          class="text-[#0d141c] dark:text-white flex items-center justify-center rounded-lg bg-[#e7edf4] dark:bg-accented shrink-0 size-14">
          <UIcon name="i-hugeicons-kaaba-02" class="!size-10" />
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#0d141c] dark:text-white text-base font-medium leading-normal ">
            Umrah Guide
          </p>
          <p
            class="text-[#49739c] dark:text-[#90adcb] text-sm font-normal leading-normal ">
            Performing the minor pilgrimage
          </p>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link to="/guide/madinah">
      <div
        class="flex items-center gap-4 bg-slate-50 dark:bg-[#182634] px-2 min-h-[72px] py-1 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl m-4">
        <div
          class="text-[#0d141c] dark:text-white flex items-center justify-center rounded-lg bg-[#e7edf4] dark:bg-accented shrink-0 size-14">
          <UIcon name="i-hugeicons-mosque-02" class="!size-10" />
        </div>
        <div class="flex flex-col justify-center">
          <p
            class="text-[#0d141c] dark:text-white text-base font-medium leading-normal ">
            Madinah Guide
          </p>
          <p
            class="text-[#49739c] dark:text-[#90adcb] text-sm font-normal leading-normal ">
            Visiting the city of the Prophet;
            <br /> Masjid Al-Quba, & Masjid Al-Nabawi
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>