<script>
    import { Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";

    export let imgSrc =
            "https://www.kiec.edu.np/wp-content/uploads/2020/08/KIEC-Sym-Logo.png",
        name = "Good Consultancy",
        address = "Kathmandu";

    let link = "./consultancies/" + name.toLowerCase().replaceAll(" ", "-");
</script>

<div class="card">
    <div class="card-img">
        <img src={imgSrc} alt="" />
    </div>
    <div class="card-text">
        <div class="consultancy-name" title={name}>{name}</div>
        <div class="consultancy-address">
            <i class="fa-solid fa-location-dot"></i>
            {address}
        </div>
        <Button class="bg-[#2a73f4]" size="xs">
            <a class="text-white flex items-center" href={link}>
                View more
                <ArrowRightOutline class="w-5 h-5 ms-2" />
            </a>
        </Button>
    </div>
</div>

<style>
    .card {
        width: 350px;
        height: 150px;
        display: flex;
        align-items: center;
        background-color: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
    }

    .card:hover {
        transition: 0.3s all ease-in-out;
        transform: scale(1.05);
    }
    .card-img {
        padding: 0.25rem;
        margin-right: 1rem;
        margin-left: 0.5rem;
        width: 130px;
        height: 120px;
    }
    .card-img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .card-text {
        padding: 0.5rem 0.75rem;
        width: 230px;
        border-left: 1px solid #dcdcdc;
    }
    .consultancy-name {
        font-size: 1.1rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-clamp: 2;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .consultancy-address {
        margin: 0.25rem 0 0.5rem;
        font-size: 0.7rem;
        color: #797979;
    }
    .consultancy-address i {
        margin-right: 0.25rem;
    }

    /* media queries */
    @media (max-width: 425px) {
        .card {
            width: 325px;
        }
    }
</style>
