<template>
    <ProjectListFilter :options="sortingOptions" header="Sort by" single />
</template>

<script setup>
const sortingOptions = ["Most Stars", "Recent Downloads", "Most Downloads", "Recently Updated", "Newest"]
</script>
