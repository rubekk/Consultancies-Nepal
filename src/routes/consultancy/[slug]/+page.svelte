<script>
	import {countriesList, testList } from "$lib/index.js";
	import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc } from "firebase/firestore";
    import {firebaseConfig } from "$lib/firebaseConfig.js";

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
	<div class="consultancy-landing">
		<div class="landing-background">
			<div class="landing-txts">
				<h1>{data.name}</h1>
				<p>
					<span><i class="fa-solid fa-location-dot"></i>{data.address},</span> 
					<span><i class="fa-solid fa-phone"></i>{data.phone}</span>
				</p>
				<div class="socials">
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
				<button class="enquire" on:click={()=> openEnquiry= true}>Enquire <i class="fa-solid fa-chevron-right"></i></button>
			</div>
		</div>
	</div>
	<div class="consultancy-data">
		<div class="data-nav">
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#major-countries">Major countries</a></li>
				<li><a href="#test-preparations">Test preparations</a></li>
				<li><a href="#map">Map</a></li>
			</ul>
		</div>
		<div class="consultancy-data-bottom">
			<h2 class="data-sub-title" id="about">About</h2>
			<div class="data-imgs">
				<img src={currImgUrl} alt="">
				<div class="lines">
					{#each data.images as image, i}
					<div class={activeImg==i?"line active-line":"line"} on:click={()=>changeImage(i)}></div>
					{/each}
				</div>
			</div>
			<p>{data.about}</p>
			<h2 class="data-sub-title" id="major-countries">Major countries</h2>
			<div class="data-countries">
				{#each data.countriesFocused as country}
				<span class="data-country">
					{#if checkCountry(country)}
					<a href={getCountryURL(country)}>{country}</a>
					{:else}
					{country}
					{/if}
				</span>
				{/each}
			</div>
			<h2 class="data-sub-title" id="test-preparations">Test preparations</h2>
			<div class="data-tests">
				{#each data.testPreparations as test}
				<span class="data-test">
					{#if checkTest(test)}
					<a href={`/test-guides/${test.toLowerCase()}`}>{test}</a>
					{:else}
					{test}
					{/if}
				</span>
				{/each}
			</div>
			<div class="enquire-msg">
				<span>Have any queries?</span>
				<button class="enquire" on:click={()=> openEnquiry= true}>Enquire <i class="fa-solid fa-chevron-right"></i></button>
			</div>
			<h2 class="data-sub-title" id="map">Map</h2>
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

<style>
	.consultancy-landing{
		width: 100%;
		height: 350px;
		background-image: url("/imgs/consultancy-landing.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
	}

	/* landing background */
	.landing-background{
		padding: 0 2rem;	
		height: 100%;
		color: #fff;
		background-color: rgba(0,0,0,.5);
		display: flex;
		justify-content: center;
		flex-direction: column;
		position: absolute;
		top: 0;
		left: 17rem;
		transform: rotate(5deg);
	}
	.landing-txts{
		transform: rotate(-5deg);
	}
	.landing-txts h1{
		font-size: 3rem;
	}
	.landing-txts span{
		margin-right: .25rem;
	}
	.landing-txts i, .socials i{
		margin-right: .25rem;
	}
	.socials{
		margin: 1rem 0 0 .5rem;
	}
	.socials i{
		margin-right: .75rem;
		font-size: 1.25rem;
		color: #fff;
	}
	.socials i:hover{
		color: #dcdcdc;
	}
	.enquire, .submit{
		margin-top: 1rem;
		width: 125px;
		height: 35px;
		font-size: 18px;
		letter-spacing: 0.05cm;
		color: #fff;
		background-color: transparent;
		border: 2px solid var(--blue);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: .3s;
	}
	.enquire:hover, .submit{
		background-color: var(--blue);
	}
	.enquire i{
		margin-left: .25rem;
	}

	/* data nav */
	.data-nav{
		margin-bottom: .5rem;
		border-radius: 3px;
	}
	.data-nav ul{
		list-style: none;
		display: flex;
		justify-content: space-between;
	}
	.data-nav li{
		padding: 1rem .5rem;
		width: 25%;
		text-align: center;
		border: 2px solid var(--blue);
		cursor: pointer;
	}
	.data-nav li:first-of-type, .data-nav li:nth-of-type(2), .data-nav li:nth-of-type(3){
		border-right: none;
	}
	.data-nav li:first-of-type{
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	.data-nav li:last-of-type{
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	/* below data nav */
	.consultancy-data{
		margin: auto;
		padding: 2rem 0;
		width: 800px;
		text-align: justify;
	}
	.consultancy-data-bottom{
		padding: 0 1rem;
		border-left: 2px solid #dcdcdc;
		border-right: 2px solid #dcdcdc;
	}
	.data-sub-title{
		margin-bottom: 1.5rem;
		padding: 3rem 0 0;
		width: max-content;
		border-bottom: 2px solid var(--blue);
	}
	.data-countries, .data-tests{
		padding: 1rem;
		background-color: #dcdcdc;
		display: flex;
		flex-wrap: wrap;
	}
	.data-country, .data-test{
		margin: .25rem;
		padding: .5rem 1rem;
		background-color: #fff;
		border: 1px solid var(--blue);
		border-radius: 3px;
	}
	.data-imgs{
		margin-bottom: 1rem;
		position: relative;
	}
	.data-imgs img{
		width: 100%;
		height: 400px;
		object-fit: cover;
	}
	.lines{
		width: max-content;
		display: flex;
		position: absolute;
		bottom: 1rem;
		left: 50%;
		right: 50%;
		transform: translateX(-50%);
	}
	.line{
		margin: .25rem;
		width: 100px;
		height: 5px;
		background-color: #dcdcdc;
		border-radius: 3px;
		cursor: pointer;
	}
	.active-line{
		background-color: #797979;
	}
	.enquire-msg{
		margin-top: 3rem;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.enquire-msg .enquire{
		margin-top: 0;
		margin-left: 1rem;
		color: #000;
	}
	.consultancy-data .socials{
		margin: 3rem 0 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.consultancy-data .socials span{
		margin-right: 1rem;
		font-size: 1.25rem;
	}
	.consultancy-data .socials i{
		font-size: 2rem;
		color: var(--blue);
	}

	/* enquire modal */
	.enquire-modal{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,.5);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed; 
		top: 50%;
		bottom: 50%;
		left: 50%;
		right: 50%;
		transform: translate(-50%, -50%);
		z-index: 1000;
	}
	.cross-modal{
		font-size: 1.25rem;
		color: #797979;
		position: absolute;
		right: 2rem;
		top: 1rem;
		cursor: pointer;
	}
	.enquire-modal-inner{
		padding: 3.5rem 2rem 2rem 2rem;
		width: 700px;
		background-color: #fff;
		border: 2px solid #dcdcdc;
		border-radius: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}
	.enquire-modal-inner h2{
		margin-bottom: 1rem;	
	}
	.enquire-modal input, select, textarea{
		margin: .5rem 0;
		padding: 0 .5rem;
		width: 100%;
		height: 35px;
		border: 1px solid #000;
        outline: none;
	}
	textarea{
		padding: .5rem;
		height: 100px;
	}

	/* media queries */
	@media (max-width: 900px){
		.landing-background{
			left: 7rem;
		}
	}
	@media (max-width: 800px){
		.consultancy-data{
			padding: 0;
			width: 100%;
		}
		.consultancy-data-bottom{
			border: none;
		}
	}
	@media (max-width: 600px){
		.landing-background{
			left: 1rem;
		}
		.data-nav{
			display: none;
		}
	}
</style>