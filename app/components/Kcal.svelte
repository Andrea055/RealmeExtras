<page>
    <actionBar title="Realme Settings - KCAL"/>
    <stackLayout>

        <image src="~/image/image.jpg" stretch="aspectFit"/>
        <scrollView orientation="vertical">
            <stackLayout>
                <Slider value={get_value_kcal()} text="Value" on:change={(event) => set_value_kcal(event.detail.text)}/>
                <Slider value={get_blue_kcal()} text="Blue" on:change={(event) => set_blue_kcal(event.detail.text)}/>
                <Slider value={get_red_kcal()} text="Red" on:change={(event) => set_red_kcal(event.detail.text)}/>
                <Slider value={get_green_kcal()} text="Green" on:change={(event) => set_green_kcal(event.detail.text)}/>
                <Slider value={get_contrast_kcal()} text="Contrast" on:change={(event) => set_contrast_kcal(event.detail.text)}/>
                <Slider value={get_saturation_kcal()} text="Saturation" on:change={(event) => set_saturation_kcal(event.detail.text)}/>
                <Slider value={get_hue_kcal()} text="Hue" on:change={(event) => set_hue_kcal(event.detail.text)}/>
            </stackLayout>
        </scrollView>
    </stackLayout>
</page>

<script lang="ts">
    import Slider from "~/lib/components/Slider.svelte";
    import { get_blue_kcal, set_blue_kcal, 
             get_red_kcal,  set_red_kcal, 
             get_green_kcal, set_green_kcal,
             get_contrast_kcal, set_contrast_kcal,
             get_saturation_kcal, set_saturation_kcal,
             get_value_kcal, set_value_kcal,
             get_hue_kcal, set_hue_kcal } from "~/lib/kcal";
</script>