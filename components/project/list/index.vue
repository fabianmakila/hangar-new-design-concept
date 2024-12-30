<template>
    <div v-if="status === 'pending'">
        Loading...
    </div>
    <div v-else class="flex flex-col gap-4">
        <ProjectListItem v-for="project in projects.result" :project="project" :key="project.id" />
    </div>
</template>

<script setup>
const { status, data: projects } = useAPI('/projects', {
    lazy: true
});
</script>
