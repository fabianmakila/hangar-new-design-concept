<template>
    <div class="text-center">
        <p>Hangar allows you to find and download the best Paper plugins, Velocity plugins or Waterfall plugins for your Minecraft server</p>
    </div>
    <div class="max-w-screen-xl mx-auto flex gap-4">
        <div class="flex flex-col gap-4">
            <ProjectListFilterSort />
            <ProjectListFilterPlatform />
            <ProjectListFilterTag />
            <ProjectListFilterCategory />
        </div>
        <ProjectList />
    </div>
</template>
