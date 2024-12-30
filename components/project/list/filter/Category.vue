<template>
    <ProjectListFilter :options="categories" header="Categories" />
</template>

<script setup>
const categories = [
    "Admin Tools",
    "Chat",
    "Developer Tools",
    "Economy",
    "Gameplay",
    "Games",
    "Protection",
    "Role Playing",
    "World Management",
    "Miscellaneous"
    ];
</script>
