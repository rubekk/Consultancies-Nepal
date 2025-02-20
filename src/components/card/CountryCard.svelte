<script>
  export let countryData;
</script>

{#if countryData}
  <div class="country-card">
    <a href={`/countries/${countryData.slug}`}>
      <div class="img-container">
        <img
          class="country-card-img"
          src={countryData.thumbnail_image.url}
          alt={`${countryData.thumbnail_image.alt}`}
        />
      </div>
      <p class="country-card-txt">{`${countryData.country}`}</p>
    </a>
  </div>
{/if}

<style>
  .country-card {
    width: 300px;
    position: relative;
    cursor: pointer;
  }
  .img-container {
    width: 100%;
    height: 225px;
    border-radius: 5px;
    overflow: hidden;
  }
  .country-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .country-card-img:hover {
    transition: .7s all ease-in-out;
    transform: scale(1.25);
  }
  .country-card-txt {
    padding: 0.25rem 0.5rem;
    width: max-content;
    border-radius: 3px;
  }
</style>
