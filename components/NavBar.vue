<template>
  <nav
    class="artboard artboard-demo navbar fixed bottom-0 inset-x-0"
    v-if="authenticated"
  >
    <ul class="menu px-3 shadow-lg bg-base-100 rounded-box horizontal">
      <li>
        <NuxtLink to="/home" v-if="authenticated">
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/vendor" v-if="authenticated">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
            <path
              d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
            />
          </svg>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/profile" v-if="authenticated">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    authenticated: false,
    authListener: null,
  }),
  async mounted() {
    /* When the app loads, check to see if the user is signed in */
    /* also create a listener for when someone signs in or out */
    const { data: authListener } = this.$supabase.auth.onAuthStateChange(() =>
      this.checkUser()
    );
    this.authListener = authListener;
    this.checkUser();
  },
  methods: {
    async checkUser() {
      const user = await this.$supabase.auth.user();
      if (user) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    },
  },
  beforeUnmount() {
    this.authListener?.unsubscribe();
  },
};
</script>

<style>
</style>