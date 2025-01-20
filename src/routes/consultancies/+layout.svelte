<script>
  import "./style.css";
  import { page } from "$app/stores";
  import ConsultancyBCrumb from "../../components/ConsultanciesBCrumb.svelte";
  import ConsultancyRight from "../../components/ConsultanciesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="consultancies-layout">
  <div class="consultancies-breadcrumb">
    <ConsultancyBCrumb />
  </div>
  <div class="consultancies-row">
    <div class={pathname === "/consultancies" ? "consultancies-row-single" : "consultancies-left"}>
      <slot></slot>
    </div>
    {#if pathname !== "/consultancies"}
    <div class="consultancies-right">
      <ConsultancyRight />
    </div>
    {/if}
  </div>
</div>
