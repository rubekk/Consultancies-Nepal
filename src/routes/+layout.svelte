<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header />
<div class="slot-container">
    <slot></slot>
</div>
 <Footer />
