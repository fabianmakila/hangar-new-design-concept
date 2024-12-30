<template>
    <div class="bg-gray-900 p-4 rounded flex flex-col gap-2">
        <h2 class="font-bold">{{ header }}</h2>
        <ul>
            <select v-if="single !== undefined">
                <option v-for="option in options" :value="option">{{ option }}</option>
            </select>
            <li v-else v-for="option in options" class="flex gap-2 text-nowrap">
                <InputCheckBox />
                <label>{{ option }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['single', 'options', 'header'])
</script>
