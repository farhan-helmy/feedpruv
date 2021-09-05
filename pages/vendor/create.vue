<template>
  <div>
    <div class="card bordered">
      <div class="card-body">
        <h2 class="card-title">
          Create Vendor
          <!-- <div class="badge mx-2 badge-secondary">NEW</div> -->
        </h2>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Vendor Name</span>
          </label>
          <input
            type="text"
            placeholder="vendor name"
            class="input input-primary input-bordered"
            v-model="post.vendor_name"
          />
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <textarea
            type="text"
            placeholder="Address"
            class="textarea h-24 input-primary textarea-bordered"
            v-model="post.address"
          >
          </textarea>
        </div>
        <div class="justify-center card-actions">
          <button class="btn btn-secondary" @click="createVendor">Register Vendor</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    post: {},
  }),
  methods: {
    async createVendor() {
      const { vendor_name, address } = this.post;
      const user = this.$supabase.auth.user();
      const { data } = await this.$supabase
        .from("vendors")
        .insert([{ vendor_name, address, user_id: user.id }])
        .single();
      this.$router.push("/vendor");
    },
  },
};
</script>

<style>
</style>