<stackLayout>
    <label text={text} class="text" />
    <slider bind:value={value} on:valueChange="{valueChange}" maxValue="268"/>
    <!-- maxvalue is a bit more high than 256 because the slider is not precise -->
</stackLayout>

<script>
    export let value, text;
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function valueChange(){
        dispatch('change', {
			text: value
		});
    }
</script>

<style>
    .text{
        margin-top: 30px;
        margin-left: 93px;
    }
</style>