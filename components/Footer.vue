<template>
    <footer class="bg-gray-900 text-sm">
        <div class="max-w-screen-xl mx-auto flex flex-col px-4 py-8">
            <div class="flex gap-4">
                <div class="flex flex-col gap-2 w-full" v-for="category in links">
                    <h4 class="font-bold">{{ category.header }}</h4>
                    <nav class="text-gray-500 flex flex-col">
                        <NuxtLink v-for="link in category.links" class="hover:text-blue-500" :to="link.to">{{ link.name }}</NuxtLink>
                    </nav>
                </div>
            </div>
            <hr class="border-gray-800 my-8" />
            <div class="flex justify-between">
                <img src="~/assets/svg/paper-logo.svg" alt="Paper logo" class="h-12 w-auto" />
                <p class="text-gray-500">&copy; 2024 The PaperMC Team</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const links =  [
        {
          header: "Hangar",
          links: [
            { name: "Authors", to: "/authors" },
            { name: "Staff", to: "/staff" },
            { name: "Resource Guidelines", to: "/guidelines" },
            { name: "Status", to: "https://status.papermc.io" },
            { name: "Hangar API", to: "/api-docs" }
          ]
        },
        {
          header: "Terms",
          links: [
            { name: "Terms and Conditions", to: "" },
            { name: "Privacy Policy", to: "" },
            { name: "Legal Notice", to: "" }
          ]
        },
        {
          header: "Community",
          links: [
            { name: "Our Community", to: "" },
            { name: "Github", to: "" },
            { name: "Discord", to: "" },
            { name: "Forums", to: "" },
            { name: "Twitter", to: "" }
          ]
        },
        {
          header: "PaperMC",
          links: [
            { name: "Our Team", to: "" },
            { name: "Contribute", to: "" },
            { name: "Sponsors", to: "" },
            { name: "Homepage", to: "" }
          ]
        }
      ]
</script>
