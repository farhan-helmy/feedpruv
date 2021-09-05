<template>
  <div>
    <div class="card text-center shadow-2xl">
      <figure class="px-10 pt-10">
        <img src="https://picsum.photos/id/870/400/250" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ vendor.vendor_name }}</h2>
        <p>
          {{ vendor.address }}
        </p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Feedback</span>
          </label>

          <textarea
            type="text"
            placeholder="Please insert your feedback"
            class="textarea h-24 input-primary textarea-bordered"
            v-model="feedback.body"
          >
          </textarea>
        </div>
        <div class="justify-center card-actions">
          <button
            class="btn btn-outline btn-accent"
            @click="createFeedback(`${vendor.id}`)"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $supabase }) {
    const uuid = `${params.id}`;
    const { data: vendor } = await $supabase
      .from("vendors")
      .select("*")
      .filter("id", "eq", uuid)
      .single();
    // console.log(uuid);
    // console.log(vendor);
    return { vendor };
  },
  data: () => ({
    feedback: {},
  }),
  methods: {
    async createFeedback(vendorId) {
      const { body } = this.feedback;
      const { data } = await this.$supabase
        .from("feedbacks")
        .insert([{ vendor_id: vendorId, feedback: body }])
        .single();
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>