<template>
    <ProjectListFilter :options="platforms" header="Platform" single />
</template>

<script setup>
const platforms = ["All", "Paper", "Velocity", "Waterfall"]
</script>
