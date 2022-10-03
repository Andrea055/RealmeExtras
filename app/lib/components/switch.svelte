<flexboxLayout alignItems="flex-start">
    <label text="{text}" class="fsync"/>
    <switch bind:checked="{checked}" on:checkedChange={changer}/>
</flexboxLayout>

<style>
    .fsync{
        margin-top: 50px;
        margin-left: 20px;
    }
    #label{
        margin-top: 50px;
        margin-left: 20px; 
    }
</style>

<script>
    export let text, checked, changer;
</script>

