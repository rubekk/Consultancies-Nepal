<script>
  import { page } from "$app/stores";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

  // Reactive variable to extract the last part of the pathname
  $: lastPathSegment =
    $page?.url?.pathname?.split("/").filter(Boolean).pop() || "";

  // Check if the user is on the "second breadcrumb" route
  $: showLastBreadcrumb = $page?.url?.pathname !== "/study-abroad";
</script>

<Breadcrumb
  aria-label="Test guides Breadcrumb"
  class="py-3 px-5 dark:bg-gray-900 w-100 mx-10 text-black-500"
>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/study-abroad">Destinations</BreadcrumbItem>
  {#if showLastBreadcrumb}
    <BreadcrumbItem>
      {lastPathSegment.charAt(0).toUpperCase() + lastPathSegment.slice(1)}
    </BreadcrumbItem>
  {/if}
</Breadcrumb>
