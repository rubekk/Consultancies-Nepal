<script>
  import "$lib/css/common-category.css";
  import "$lib/css/university.css";
  import "$lib/css/filter.css";
  import { page } from "$app/stores";
  import CommonBreadCrumb from "../../components/breadcrumb/CommonBreadCrumb.svelte";
  import UniversitiesFilter from "../../components/filter/UniversitiesFilter.svelte";
  import UniversitiesRight from "../../components/right/UniversitiesRight.svelte";

  let isCommonPage = false;

  $: isCommonPage = $page?.url?.pathname === "/universities";
</script>

<div class="common-category-layout">
  <div class="breadcrumb">
    <CommonBreadCrumb />
  </div>

  {#if isCommonPage}
    <div class="university-home">
      <div class="university-left-sidebar">
        <UniversitiesFilter />
      </div>
      <div class="university">
        <slot></slot>
      </div>
    </div>
  {:else}
    <div class="blog-container">
      <div class="blog">
        <slot></slot>
      </div>
      <div class="blog-right-sidebar">
        <UniversitiesRight />
      </div>
    </div>
  {/if}
</div>
