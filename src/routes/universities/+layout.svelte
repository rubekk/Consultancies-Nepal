<script>
  import "$lib/css/common-category.css";
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

<style>
  .university-home {
    margin-bottom: 2rem;
  }

  .university-home {
    display: flex;
    gap: 0.5rem;
  }
  
  .university-left-sidebar {
    width: 30%;
    background-color: #fafafa;
    border: 1px solid #f3f3f3;
  }
  
  .university {
    padding: 1.5rem 1.3rem;
    width: 70%;
    background-color: #fafafa;
    border: 1px solid #f3f3f3;
  }
</style>
