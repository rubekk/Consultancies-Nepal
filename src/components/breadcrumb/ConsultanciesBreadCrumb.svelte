<script>
    import { page } from "$app/stores";
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

    let filteredUrl = $page?.url?.pathname?.replace("/consultancies/", "") || "";

    $: filteredUrl = $page?.url?.pathname?.replace("/consultancies/", "").replaceAll("-", " ").toUpperCase() || "";
</script>

<Breadcrumb
    aria-label="Test guides Breadcrumb"
    class="py-3 px-5 dark:bg-gray-900 w-100 mx-10 text-black-500"
>
    <BreadcrumbItem href="/" home>HOME</BreadcrumbItem>
    <BreadcrumbItem href="/consultancies">CONSULTANCIES</BreadcrumbItem>
    {#if filteredUrl !=="/CONSULTANCIES"}
        <BreadcrumbItem>{filteredUrl}</BreadcrumbItem>
    {/if}
</Breadcrumb>
