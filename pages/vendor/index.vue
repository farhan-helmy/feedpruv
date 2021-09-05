<template>
  <div>
   
    <div
      class="card text-center min-h-screen overflow-auto"
      v-if="vendorExists === true"
    >
      <div class="card-body" v-for="vendor in vendors" :key="vendor.id">
        <h2 class="card-title">{{ vendor.vendor_name }}</h2>
        <div class="text-sm">Address:</div>
        <p>
          {{ vendor.address }}
        </p>
        <div class="justify-center card-actions">
         
          <NuxtLink :to="`/vendor/${vendor.id}`"
            ><button class="btn btn-link">View</button></NuxtLink
          >
        </div>
        <div class="divider"></div>
      </div>
      <div class="flex justify-center py-2 z-0">
        <NuxtLink to="/vendor/create">
          <div class="btn btn-primary">Add More Vendor</div>
        </NuxtLink>
      </div>
    </div>
    <div class="card text-center shadow-2xl" v-if="vendorExists === false">
      <div class="card-body">
        <h2 class="card-title">Vendor doesn't exist, please create one</h2>
        <div class="justify-center card-actions">
          <NuxtLink to="/vendor/create"
            ><div class="btn btn-success">Create Vendor</div></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.fetchVendor();
  },
  data: () => ({
    vendors: [],
    vendorExists: false,
  }),
  methods: {
    async fetchVendor() {
      const user = this.$supabase.auth.user();
      if (!user) return;
      const { data: vendors, error } = await this.$supabase
        .from("vendors")
        .select("*")
        .filter("user_id", "eq", user.id);
      console.log(vendors.length);
      if (vendors.length === 0) {
        this.vendorExists = false;
      }
      this.vendors = vendors;
      this.vendorExists = true;
    },
  },
};
</script>

<style>
</style>