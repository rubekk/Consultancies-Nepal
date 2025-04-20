<script>
	// import "./../style.css";
	import menu from "$lib/data/menu.json";
	import { Badge, Carousel } from "flowbite-svelte";

	export let data = {
		name: "",
		address: "",
		phone: "",
		about: "",
		socials: {
			facebook: "",
			instagram: "",
			youtube: "",
			linkedin: "",
		},
		images: ["", ""],
		testPreparations: [],
		countriesFocused: [],
	};

	const countriesList = [
		"australia",
		"usa",
		"canada",
		"new zealand",
		"united kingdom",
		"japan",
		"singapore",
		"germany",
		"europe",
	];
	const euroCountries = [
		"france",
		"estonia",
		"italy",
		"denmark",
		"greece",
		"portugal",
		"poland",
		"finland",
		"australia",
		"norway",
		"switzerland",
		"cyprus",
		"ireland",
		"mauritius",
	];
	const testList = ["ielts", "sat", "pte", "toefl", "gre", "gmat"];
	const images = [
		{
			alt: "Cosmic timetraveler",
			src: "/imgs/abroad-study-1.jpeg",
			title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
		},
		{
			alt: "Cristina Gottardi",
			src: "/imgs/aecc-global-1.jpeg",
			title: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
		},
	];

	// check if a country is valid or not
	const checkCountry = (country) => {
		let lowCountry = country.toLowerCase();

		if (euroCountries.includes(lowCountry)) lowCountry = "europe";
		else if (lowCountry == "uk") lowCountry = "united kingdom";

		return countriesList.includes(lowCountry);
	};

	// get url of a country to add in anchor href
	const getCountryURL = (country) => {
		let lowCountry = country.toLowerCase();
		if (euroCountries.includes(lowCountry)) lowCountry = "europe";

		let countrySlug = menu.studyDestinations.find(
			(country) => country.name.toLowerCase() == lowCountry,
		);

		return countrySlug ? `/countries/${countrySlug.slug}` : "#";
	};

	// check if a test is valid or not
	const checkTest = (test) => {
		let lowTest = test.toLowerCase();

		return testList.includes(lowTest);
	};

	// get url of a test to add in anchor href
	const getTestURL = (test) => {
		let testGuideSlug = menu.testGuides.find(
			(tgTest) => tgTest.name.toLowerCase() == test.toLowerCase(),
		);

		return testGuideSlug ? `/test-guides/${testGuideSlug.slug}` : "#";
	};
</script>

<svelte:head>
	<title>StudyAbroadNP - {data.name}</title>
</svelte:head>

{#if data.name && data.address}
	<div class="blog-section">
		<div class="consultancy-data">
			<h1 class="text-3xl">{data.name}</h1>
			<div class="consultancy-location m-2 text-gray-600">
				<i class="fa-solid fa-location-dot"></i>
				<span class="ml-2 italic">{data.address}</span>
			</div>
			<div class="socials">
				<a
					href={data.socials.facebook}
					target="_blank"
					aria-label="Facebook link"
				>
					<i class="fa-brands fa-square-facebook"></i>
				</a>
				<a
					href={data.socials.instagram}
					target="_blank"
					aria-label="Instagram link"
				>
					<i class="fa-brands fa-instagram"></i>
				</a>
				<a
					href={data.socials.youtube}
					target="_blank"
					aria-label="Youtube link"
				>
					<i class="fa-brands fa-youtube"></i>
				</a>
				<a
					href={data.socials.linkedin}
					target="_blank"
					aria-label="LinkedIn link"
				>
					<i class="fa-brands fa-linkedin"></i>
				</a>
			</div>
			{#if data.images}
				<div class="max-w-4xl">
					<Carousel {images} let:Controls>
						<Controls />
					</Carousel>
				</div>
			{/if}
			<Badge class="mt-8 mb-4 text-[1.2rem]" color="indigo">About</Badge>
			<p>
				{data.about ||
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cum animi enim consequuntur veritatis, dignissimos cupiditate quas minus nihil eligendi in dicta ad quo autem praesentium incidunt officiis ut voluptatibus accusamus. Eveniet sed ut expedita, voluptas at, adipisci aperiam velit nesciunt ducimus, laboriosam minus ipsam nam molestias. Repellendus quod non doloribus? Voluptas, aspernatur totam pariatur sapiente, laboriosam soluta adipisci aliquid dolorum modi odit ex voluptatem placeat optio quam iusto provident, nostrum dolore. Enim tempora possimus, recusandae et minus cumque ut fugit mollitia officia sed harum asperiores nobis id, expedita nihil dolore minima."}
			</p>
			<Badge class="mt-8 mb-4 text-[1.2rem]" color="indigo"
				>Major countries</Badge
			>
			<div class="data-countries">
				{#each data.countriesFocused as country}
					{#if checkCountry(country)}
						<Badge class="mx-2" large color="dark">
							<a href={getCountryURL(country)}>{country}</a>
						</Badge>
					{:else}
						<Badge class="mx-2" large color="dark">{country}</Badge>
					{/if}
				{/each}
			</div>
			<Badge class="mt-8 mb-4 text-[1.2rem]" color="indigo"
				>Test preparations</Badge
			>
			<div class="data-tests">
				{#each data.testPreparations as test}
					{#if checkTest(test)}
						<Badge class="mx-2" large color="dark">
							<a href={getTestURL(test)} `>{test}</a>
						</Badge>
					{:else}
						<Badge large color="dark">{test}</Badge>
					{/if}
				{/each}
			</div>
			<Badge class="mt-8 mb-4 text-[1.2rem]" color="indigo">Map</Badge>
			<iframe
				src={data.mapURL}
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Consultancy map"
			></iframe>
		</div>
	</div>
{/if}
