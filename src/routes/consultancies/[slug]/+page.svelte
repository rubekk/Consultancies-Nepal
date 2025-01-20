<script>
	import "./../style.css";
	import { countriesList, testList } from "$lib/index.js";
	import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc } from "firebase/firestore";
    import { firebaseConfig } from "$lib/firebaseConfig.js";
	import { Card, Badge, Button } from "flowbite-svelte";
	import { ArrowRightOutline } from "flowbite-svelte-icons";

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app); 
    const colRef= collection(db, "enquire");

	export let data= {
        name: "AECC Global",
        address: "Kamal Pokhari",
        phone: "01-5970315",
        about: "AECC Global is a leading global international education consultancy, headquartered in Melbourne, Australia. We have supported the study abroad dreams of 50K+ international students, connecting them to the right study opportunities through over 750+ top educational institutions. AECC Global's EdTEch is a unified digital ecosystem that makes international education research and application a seamless self-guided process and is supported by our expert education guidance counsellors. AECC Global's strength lies in its 450+ highly committed employees across 42 branches in 15 countries and growing. Almost all our Education Counsellors have been international students at some point in their lives, so we really understand what it’s like to be considering international study.",
        socials: {
            facebook: "https://www.facebook.com/AECCNepal/",
            instagram: "https://www.instagram.com/aecc.nepal/",
            youtube: "https://www.youtube.com/channel/UCCtwo7tqTfkr__pio4WQCkg",
            linkedin: "https://www.linkedin.com/company/aecc-global-nepal/"
        },
        images: [
            "https://lh3.googleusercontent.com/p/AF1QipODIg-OLM7l5La7DiN2unyh6ztQwCJdhv9rTkdw=s0", 
            "https://lh3.googleusercontent.com/p/AF1QipMKv9o_JWGLzFAotMIIq_nN_Rb3zcKak9s7-ciV=s0"
        ],
        testPreparations: ["IELTS", "TOEFL", "PTE", "GRE", "GMAT"],
        countriesFocused: ["Australia", "Canada", "UK", "USA", "New Zealand", "France", "Cyprus", "Germany", "Switzerland", "UAE"]
    };
	
	let currImgUrl= data.images[0],
		activeImg= 0,
		openEnquiry= false,
		formData= {
			name: "",
			email: "",
			phone: "",
			country: "Australia",
			message: ""
		};

	const changeImage= i=>{
		currImgUrl= data.images[i];
		activeImg= i;
	}

	const checkCountry= country=>{
		let euroCountries= ["france", "estonia", "italy", "denmark", "greece", "portugal", "poland", "finland", "australia", "norway", "switzerland", "cyprus", "ireland", "mauritius"];
		let lowCountry= country.toLowerCase();

		if(euroCountries.includes(lowCountry)) lowCountry= "europe";
		else if(lowCountry=="uk") lowCountry= "united kingdom";

		return countriesList.includes(lowCountry);
	}

	const getCountryURL= country=>{
		let euroCountries= ["france", "estonia", "italy", "denmark", "greece", "portugal", "poland", "finland",  "norway", "switzerland", "cyprus", "ireland", "mauritius"];
		let lowCountry= country.toLowerCase();

		if(euroCountries.includes(lowCountry)) lowCountry= "europe";
		else if(lowCountry=="uk") lowCountry= "united kingdom";
		
		return `/study-abroad/${lowCountry.replaceAll(" ","-")}`;
	}

	const checkTest= test=>{
		let lowTest= test.toLowerCase();

		return testList.includes(lowTest);
	}

	const handleSubmit= async ()=>{
        if(!formData.name || !formData.email || !formData.phone || !formData.country || !formData.message) return;

        await addDoc(colRef, formData);
        formData= {
			name: "",
			email: "",
			phone: "",
			country: "Australia",
			message: ""
		}

		openEnquiry= false;
    }
</script>

<svelte:head>
  <title>StudyAbroadNP - {data.name}</title>
</svelte:head>

{#if data.address && data.phone}
<div class="consultancy-container">
	<Card>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
		<Button class="w-fit">
			Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
		</Button>
	</Card>
	<div class="consultancy-data">
		<div class="consultancy-data-bottom">
			<Badge color="indigo">About</Badge>
			<p>{data.about}</p>
			<Badge color="indigo">Major countries</Badge>
			<div class="data-countries">
				{#each data.countriesFocused as country}
					{#if checkCountry(country)}
						<Badge large color="dark">
							<a href={getCountryURL(country)}>{country}</a>
						</Badge>
					{:else}
						<Badge large color="dark">{country}</Badge>
					{/if}
				{/each}
			</div>
			<Badge color="indigo">Test preparations</Badge>
			<div class="data-tests">
				{#each data.testPreparations as test}
					{#if checkTest(test)}
						<Badge large color="dark">
							<a href={`/test-guides/${test.toLowerCase()}`}>{test}</a>
						</Badge>
					{:else}
						<Badge large color="dark">{test}</Badge>
					{/if}
				{/each}
			</div>
			<Badge color="indigo">Test preparations</Badge>
			<iframe src={data.mapURL} width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			<div class="socials">
				<span>Social links:</span>
				<a href={data.socials.facebook} target="_blank">
					<i class="fa-brands fa-square-facebook"></i>
				</a>
				<a href={data.socials.instagram} target="_blank">
					<i class="fa-brands fa-instagram"></i>
				</a>
				<a href={data.socials.youtube} target="_blank">
					<i class="fa-brands fa-youtube"></i>
				</a>
				<a href={data.socials.linkedin} target="_blank">
					<i class="fa-brands fa-linkedin"></i>
				</a>
			</div>
		</div>
	</div>
</div>

{#if openEnquiry}
<div class="enquire-modal">
	<div class="enquire-modal-inner">
		<i class="cross-modal fa-solid fa-times" on:click={()=> openEnquiry=false}></i>
		<h2>Have any queries? We will reach out to you soon!</h2>
		<form>
			<input bind:value={formData.name} type="text" placeholder="Full name" required>
			<input bind:value={formData.email} type="email" placeholder="Email" required>
			<input bind:value={formData.phone} type="number" placeholder="Phone number" required>
			<select bind:value={formData.country} placeholder="Select a country" required>
				<option value="Australia">Australia</option>
				<option value="USA">USA</option>
				<option value="Canada">Canada</option>
				<option value="Germany">Germany</option>
				<option value="New Zealand">New Zealand</option>
				<option value="United Kingdom">United Kingdom</option>
				<option value="Japan">Japan</option>
				<option value="Singapore">Singapore</option>
				<option value="South Korea">South Korea</option>
				<option value="Help me decide">Others / Help me decide</option>
			</select>
			<textarea bind:value={formData.message} placeholder="Enter your queries..." required></textarea>
			<button class="submit" on:click={handleSubmit}>Submit</button>
		</form>
	</div>
</div>
{/if}
{/if}