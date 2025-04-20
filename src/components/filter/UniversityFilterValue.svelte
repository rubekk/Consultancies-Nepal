<script>
    import { filter } from "$lib/filter/filter";
    import { convertToText } from "$lib/filter/filterFunctions";

    let filterText = "";

    filter.subscribe((value) => {
        if (value) filterText = convertToText(value);
    });
</script>

<strong> {filterText} </strong>
