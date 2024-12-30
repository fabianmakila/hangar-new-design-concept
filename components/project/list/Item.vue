<template>
    <div class="bg-gray-900 rounded p-4 flex gap-4">
        <img class="w-24 rounded" :src="project.avatarUrl" alt="" />
        <div>
            <div>
                <div class="flex gap-1 items-end">
                    <HangarLink class="font-bold text-xl" :to="/project/ + project.namespace.slug">{{ project.name }}</HangarLink>
                    <span class="text-gray-500">by</span>
                    <HangarLink :to="/user/ + project.namespace.owner"> {{ project.namespace.owner }} </HangarLink>
                </div>
                <p>{{ project.description }}</p>
            </div>
            <div class="flex text-gray-500 gap-2">

            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['project'])
</script>
