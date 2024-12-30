<template>
    <NuxtLink class="flex items-center gap-1 text-black hover:text-accent-500 dark:text-white" v-bind="$props">
        <Icon v-if="props.icon" :name="props.icon" />
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps(['icon'])
</script>
