<template>
  <div>
    <div class="card text-center shadow-2xl">
      <figure class="px-10 pt-10">
        <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ user.email }}</h2>
        <div class="grid-flow-row shadow stats">
          <div class="stat">
            <div class="stat-title">Vendors</div>
            <div class="stat-value">3</div>
            <!-- <div class="stat-desc">Jan 1st - Feb 1st</div> -->
          </div>
          <div class="stat">
            <div class="stat-title">Feedbacks Received</div>
            <div class="stat-value">10</div>
            <!-- <div class="stat-desc text-success">↗︎ 400 (22%)</div> -->
          </div>
        </div>
        <div class="justify-start card-actions">
          <button class="btn btn-error" @click="signOut">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.fetchUser();
  },
  data: () => ({
    user: {},
  }),
  methods: {
    async signOut() {
      const { error } = await this.$supabase.auth
        .signOut()
        .then(this.$router.push("/auth"));
    },
    async fetchUser() {
      const user = this.$supabase.auth.user();
      this.user = user;
      //console.log(user);
      if (!user) return;
    },
  },
};
</script>

<style>
</style>