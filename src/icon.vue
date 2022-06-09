<template>
    <svg class="g-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script>
import './svg.js'
    export default {
        name: "icon",
        props:['name']
    }
</script>

<style lang="scss">
    .g-icon{
        width: 1em;
        height: 1em;
    }
</style>