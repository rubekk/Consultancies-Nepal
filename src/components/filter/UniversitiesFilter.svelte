<script>
    import {
        updateSpecialization,
        updateCountry,
        updateDegree,
        updateFee,
        updateExam,
        updateTime,
        updateScholarship,
        updateDuration,
    } from "$lib/filter/filterFunctions";
    import SpecializationFilter from "./SpecializationFilter.svelte";
    import CountryFilter from "./CountryFilter.svelte";
    import DegreeFilter from "./DegreeFilter.svelte";
    import FeeFilter from "./FeeFilter.svelte";
    import AcceptedExamsFilter from "./AcceptedExamFilter.svelte";
    import TimeFilter from "./TimeFilter.svelte";
    import DurationFilter from "./DurationFilter.svelte";
    import ScholarshipFilter from "./ScholarshipFilter.svelte";
</script>

<SpecializationFilter filterFunction={updateSpecialization} />
<CountryFilter filterFunction={updateCountry} />
<DegreeFilter filterFunction={updateDegree} />
<FeeFilter filterFunction={updateFee} />
<AcceptedExamsFilter filterFunction={updateExam} />
<TimeFilter filterFunction={updateTime} />
<ScholarshipFilter filterFunction={updateScholarship} />
<DurationFilter filterFunction={updateDuration} />
