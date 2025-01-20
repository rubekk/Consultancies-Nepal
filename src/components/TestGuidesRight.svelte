<script>
  import { page } from "$app/stores";
  import { Listgroup } from "flowbite-svelte";

  let testGuides = [
    { name: "IELTS", href: "/test-guides/ielts" },
    { name: "PTE", href: "/test-guides/pte" },
    { name: "SAT", href: "/test-guides/sat" },
    { name: "TOEFL", href: "/test-guides/toefl" },
    { name: "GRE", href: "/test-guides/gre" },
    { name: "GMAT", href: "/test-guides/gmat" },
  ];

  $: filteredUrl =
    $page?.url?.pathname?.replace("/test-guides/", "").toUpperCase() || "";
  $: filteredGuides = testGuides.filter((guide) => {
    return guide.name !== filteredUrl;
  });
</script>

<h2 class="ml-2 mb-2 font-semibold text-xl">Other Test Guides</h2>
<Listgroup
  active
  items={filteredGuides}
  let:item
  class="w-50 text-xl font-medium"
>
  {item.name}
</Listgroup>
