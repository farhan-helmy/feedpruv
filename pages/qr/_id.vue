<template>
  <div>
    {{ url }}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const url = params.id;
    return { url };
  },
};
</script>

<style>
</style>