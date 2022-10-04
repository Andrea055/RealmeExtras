<page>
    <actionBar title="Realme Settings"/>

    <flexboxLayout flexDirection="column">

        <Switch text="USB2 fast charge" checked="{fsync}" changer={() => fsync_switch(fsync)}></Switch>

        <Switch text="Enable 600hz touch sampling" checked="{touchrate}" changer={() => touchrate_switch(touchrate)}></Switch>

        <Switch text="Auto High Brightness" checked="{hbm}" changer={() => hdm_switch(hbm)}></Switch>

        <Switch text="DC dimming" checked="{dcd}" changer={() => dcd_switch(dcd)}></Switch>

        <Switch text="D2TW(Double Tap To Wake)" checked="{dt2w}" changer={() => d2tw_switch(dt2w)}/>
        
        <Switch text="AdrenoBoost" checked={adreno_boost} changer={() => set_adrenoboost(adreno_boost)}></Switch>

        <!-- <button text="Start FPS overlay" on:tap="{startFPSMeter}"></button>
        <button text="Stop FPS overlay" on:tap="{stopFPSMeter}"></button> -->
        
        <button text="KCAL" backgroundColor="#0388fc" on:tap="{ () => navigate({ page: Kcal }) }"></button>
    </flexboxLayout>

</page>

<script lang="ts">
    
    import { onMount } from 'svelte';
    import { get_oplus_touchrate, touchrate_switch, fsync_switch, get_hbm, hdm_switch, get_dt2w, get_dcd, dcd_switch, d2tw_switch, get_adrenoboost, set_adrenoboost } from '../lib/call';
    import Kcal from './Kcal.svelte';
	import { navigate } from 'svelte-native';
    // import { startFPSMeter, stopFPSMeter } from '~/lib/fps';
    import Switch from '../lib/components/switch.svelte';
    
    let fsync = false, touchrate = false, hbm = false, dt2w = false, dcd = false, adreno_boost = false;


    // java.lang.Runtime.getRuntime().exec('su') Get SU permission

    onMount(() => {
        try{
            // Inizialize the switch
            touchrate = Boolean(parseInt(get_oplus_touchrate().charAt(0)));
            hbm = Boolean(parseInt(get_hbm().charAt(0)));   // Get the current state of hbm
            dt2w = Boolean(parseInt(get_dt2w().charAt(0))); // DT2W state
            dcd = Boolean(parseInt(get_dcd().charAt(0)));   // DC dimming state
            adreno_boost = Boolean(parseInt(get_adrenoboost().charAt(0))); // AdrenoBoost state
        }catch{
            alert("Please install a proper kernel to use this function");
        }

    }
    );
    
</script>
