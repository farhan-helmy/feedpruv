<template>
  <div>
    <div class="h-screen flex flex-wrap content-center bg-gray-700">
      <div class="card bordered mx-auto shadow-sm bg-accent border-gray-900">
        <div class="card-body">
          <h1 class="card-title mx-auto font-bold font-sans">FeedPruv</h1>
        </div>
        <div class="card-actions mx-auto">
          <button class="btn btn-primary" @click="signInWithGoogle">
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  methods: {
    async signInWithGoogle() {
      const { user, session, error } = await this.$supabase.auth.signIn({
        provider: "google",
      });
    },
  },
};
</script>

<style>
</style>