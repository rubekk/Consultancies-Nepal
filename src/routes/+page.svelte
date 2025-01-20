<script>
    import "./app.css";
    import { data, faqData, countryData, testData } from "$lib/index.js";
    import Card from "../components/Card.svelte";
    import CountryCard from "../components/CountryCard.svelte";
    import TestCard from "../components/TestCard.svelte";
    import { AccordionItem, Accordion, Badge, Button } from "flowbite-svelte";
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    let openClassImgModal = false,
        classImgModalSrc = "";

    const closeModal = (e) => {
        if (e.target.tagName !== "IMG") openClassImgModal = false;
    };
</script>

<svelte:head>
    <title>StudyAbroadNP - Home</title>
</svelte:head>

<div class="landing-img">
    <div class="landing-tagline">
        <div class="tagline-txt">
            Explore the best <span>Consultancy</span><br />for abroad study!
        </div>
    </div>
</div>

<div class="top-consultancies">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Top Consultancies</Badge>
    </div>
    <div class="top-consultancies-inner">
        {#each data as indData, i}
            {#if i <= 5}
                <Card
                    name={indData.name}
                    address={indData.address
                        ? indData.address
                        : "Putalisadak, Kathmandu"}
                    imgSrc={indData.thumbnailImage
                        ? indData.thumbnailImage
                        : ""}
                />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./consultancies">
                View all Consultancies
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<div class="study-abroad">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Study Destinations</Badge>
    </div>
    <div class="study-abroad-inner">
        {#each countryData as cData, i}
            {#if i <= 7}
                <CountryCard countryData={cData} />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./study-abroad">
                View all Destinations
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<div class="test-guides">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">Test Guides</Badge>
    </div>
    <div class="test-guides-inner">
        {#each testData as tData, i}
            {#if i <= 3}
                <TestCard testData={tData} />
            {/if}
        {/each}
    </div>
    <div class="btn-div">
        <Button color="alternative">
            <a class="text-lg flex items-center" href="./test-guides">
                View all Guides
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<div class="faqs">
    <div class="sub-title">
        <Badge class="mx-auto text-[1.5rem]">FAQs</Badge>
    </div>
    <Accordion inactiveClass="text-gray-500 dark:text-gray-400 bg-white dark:hover:bg-gray-800">
        {#each faqData as item, i}
            <AccordionItem >
                <span slot="header">{item.question}</span>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                    {item.answer}
                </p>
            </AccordionItem>
        {/each}
    </Accordion>
</div>

{#if openClassImgModal}
    <div on:click={(e) => closeModal(e)} class="class-img-modal">
        <i class="fa-solid fa-times"></i>
        <img src={classImgModalSrc} alt="Class Image" />
    </div>
{/if}
