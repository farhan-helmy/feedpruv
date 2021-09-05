<template>
  <div>
    <div class="card bordered">
      <figure>
        <img src="https://picsum.photos/seed/picsum/400/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ vendor.vendor_name }}
          <div class="badge mx-2 badge-secondary">NEW</div>
        </h2>
        <p>
          {{ vendor.address }}
        </p>
        <div class="justify-center card-actions">
          <NuxtLink :to="`/vendor/feedbacks/${vendor.id}`"
            ><button class="btn btn-primary">View Feedbacks</button>
          </NuxtLink>
          <button class="btn btn-secondary" @click="generateQr(`${vendor.id}`)">
            Generate QR
          </button>
        </div>
      </div>
      <figure v-if="generate === true">
        <img :src="`${qrlink}`" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  async asyncData({ params, $supabase }) {
    const { data: vendor } = await $supabase
      .from("vendors")
      .select("*")
      .filter("id", "eq", params.id)
      .single();
    return { vendor };
  },
  data: () => ({
    generate: false,
    qrlink: "",
  }),
  methods: {
    generateQr(vendorId) {
      const link = `http://localhost/feedback/${vendorId}`;
      console.log(link);
      QRCode.toDataURL(link)
        .then((url) => {
          console.log(url);
          this.generate = true;
          this.qrlink = url;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>