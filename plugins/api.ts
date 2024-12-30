export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://hangar.papermc.dev/api/v1",
    onRequest({ request, options, error }) {},
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
