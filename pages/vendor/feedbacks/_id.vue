<template>
  <div class="h-full overflow-x-auto mx-auto py-2">
    <div class="flex text-xl justify-center my-2">
      <button class="btn btn-outline">
        Feedback For {{ vendor.vendor_name }}
      </button>
    </div>
    <table class="table-fixed w-full table-zebra">
      <tbody>
        <tr v-for="feedback in feedbacks" :key="feedback.id">
          <td>
            <div class="flex items-center">
              <div class="avatar">
                <div class="px-2 mask mask-squircle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div class="break-all">{{ feedback.feedback }}</div>
                <div class="text-sm opacity-40">
                  Submitted on {{ feedback.feedback_date }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $supabase }) {
    const { data: feedbacks } = await $supabase
      .from("feedbacks")
      .select("*")
      .filter("vendor_id", "eq", params.id);

    const { data: vendor } = await $supabase
      .from("vendors")
      .select("*")
      .filter("id", "eq", params.id)
      .single();

    return { feedbacks, vendor };
  },
};
</script>

<style>
</style>