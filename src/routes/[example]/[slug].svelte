<script context="module">
    export async function load({page})
    {
        const { example, slug } = page.params;
        return {
            props: {
                page: slug,
                folder: example
            }
        }
    }
</script> 

<script>
    export let page;
    export let folder;
</script>

Navigate to { folder } / { page }
