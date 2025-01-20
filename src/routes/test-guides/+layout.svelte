<script>
  import "./style.css";
  import { page } from "$app/stores";
  import TGBreadcrumb from "../../components/TestGuidesBCrumb.svelte";
  import TGRight from "../../components/TestGuidesRight.svelte";

  $: pathname = $page.url.pathname;
</script>

<div class="test-guides-layout">
  <div class="test-guides-breadcrumb">
    <TGBreadcrumb />
  </div>
  <div class="test-guides-row">
    <div
      class={pathname === "/test-guides"
        ? "test-guides-row-single"
        : "test-guides-left"}
    >
      <slot></slot>
    </div>
    {#if pathname !== "/test-guides"}
      <div class="test-guides-right">
        <TGRight />
      </div>
    {/if}
  </div>
</div>
